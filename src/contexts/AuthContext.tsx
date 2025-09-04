import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import supabase from '@/lib/supabaseClient';

interface User {
  id: string;
  name: string;
  email: string;
  userType: 'customer' | 'employee' | 'admin';
  role: 'Customer' | 'Admin' | 'Manager' | 'Editor' | 'Sales' | 'Support';
  permissions: string[];
  avatar?: string;
  phone?: string;
  password?: string; // For mock users only - in production, use proper password hashing
  preferences?: {
    favoriteCarIds: string[];
    interestedBrands: string[];
    priceRange: {min: number;max: number;};
  };
}

// Supabase user metadata shape
type SupabaseUserMetadata = {
  name?: string;
  userType?: 'customer' | 'employee' | 'admin';
  role?: 'Customer' | 'Admin' | 'Manager' | 'Editor' | 'Sales' | 'Support';
  phone?: string;
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{success: boolean;error?: string;}>;
  signup: (userData: SignupData) => Promise<{success: boolean;error?: string;}>;
  createTeamMember: (userData: TeamMemberData) => Promise<{success: boolean;error?: string;}>;
  logout: () => void;
  isLoading: boolean;
  hasPermission: (permission: string) => boolean;
  isCustomer: () => boolean;
  isEmployee: () => boolean;
  isAdmin: () => boolean;
  getRedirectPath: () => string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'customer';
  phone?: string;
}

interface TeamMemberData {
  name: string;
  email: string;
  password: string;
  userType: 'employee' | 'admin';
  role: 'Manager' | 'Editor' | 'Sales' | 'Support';
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const rolePermissions = {
  Customer: [
  'view_cars', 'save_favorites', 'make_inquiries', 'view_profile', 'edit_profile'],

  Admin: [
  'manage_users', 'manage_cars', 'manage_blog', 'view_analytics',
  'manage_settings', 'manage_inquiries', 'delete_content', 'manage_employees'],

  Manager: [
  'manage_cars', 'manage_blog', 'view_analytics', 'manage_inquiries', 'view_users'],

  Editor: [
  'manage_blog', 'manage_cars', 'view_inquiries'],

  Sales: [
  'manage_cars', 'manage_inquiries', 'view_customers', 'create_quotes'],

  Support: [
  'view_inquiries', 'respond_inquiries', 'view_customers']

};

// Mock users for demonstration (seeded users)
const seededUsers: User[] = [
// Admin users
{
  id: '1',
  name: 'Admin User',
  email: 'admin@3sk.com',
  userType: 'admin',
  role: 'Admin',
  permissions: rolePermissions.Admin,
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  password: 'password123'
},
// Employee users
{
  id: '2',
  name: 'Manager User',
  email: 'manager@3sk.com',
  userType: 'employee',
  role: 'Manager',
  permissions: rolePermissions.Manager,
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  password: 'password123'
},
{
  id: '3',
  name: 'Sales Representative',
  email: 'sales@3sk.com',
  userType: 'employee',
  role: 'Sales',
  permissions: rolePermissions.Sales,
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  password: 'password123'
},
// Customer users
{
  id: '4',
  name: 'John Customer',
  email: 'john@email.com',
  userType: 'customer',
  role: 'Customer',
  permissions: rolePermissions.Customer,
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
  phone: '+1-555-0123',
  password: 'password123',
  preferences: {
    favoriteCarIds: [],
    interestedBrands: ['Toyota', 'Honda'],
    priceRange: { min: 15000, max: 30000 }
  }
}];

// Storage key for mock users
const MOCK_USERS_KEY = '3sk_mock_users';



// Helper functions for mock user persistence
const getMockUsers = (): User[] => {
  try {
    const stored = localStorage.getItem(MOCK_USERS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : seededUsers;
    }
    // Initialize with seeded users if no stored users
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(seededUsers));
    return seededUsers;
  } catch {
    return seededUsers;
  }
};

const saveMockUsers = (users: User[]) => {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

const findMockUserByEmail = (email: string): User | undefined => {
  const users = getMockUsers();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
};

export const AuthProvider = ({ children }: {children: ReactNode;}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If Supabase is configured, initialize from session and subscribe
    if (supbaseAvailable()) {
      const init = async () => {
        try {
          const { data } = await supabase!.auth.getUser();
          if (data.user) {
            setUser(mapSupabaseUserToUser(data.user));
          }
        } catch (error) {
          console.error('Supabase auth init failed:', error);
        } finally {
          setIsLoading(false);
        }
      };
      init();

      const { data: sub } = supabase!.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser(mapSupabaseUserToUser(session.user));
        } else {
          setUser(null);
        }
      });
      return () => {
        sub.subscription.unsubscribe();
      };
    } else {
      // Fallback to local mock storage
      const storedAuth = localStorage.getItem('3sk_auth');
      if (storedAuth) {
        try {
          const authData = JSON.parse(storedAuth);
          const foundUser = findMockUserByEmail(authData.email);
          if (foundUser) {
            setUser(foundUser);
          }
        } catch (error) {
          console.error('Auth restoration failed:', error);
          localStorage.removeItem('3sk_auth');
        }
      }
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    if (supbaseAvailable()) {
      try {
        const { error } = await supabase!.auth.signInWithPassword({ email, password });
        if (error) {
          setIsLoading(false);
          return { success: false, error: error.message };
        }
        setIsLoading(false);
        return { success: true };
      } catch (e: any) {
        setIsLoading(false);
        return { success: false, error: e?.message || 'Login failed' };
      }
    }

    // Fallback: mock users
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const foundUser = findMockUserByEmail(email);
    if (!foundUser) {
      setIsLoading(false);
      return { success: false, error: 'User not found' };
    }
    // Check the stored password for the user
    if (foundUser.password && password !== foundUser.password) {
      setIsLoading(false);
      return { success: false, error: 'Invalid password' };
    }
    // For backward compatibility with seeded users that might not have passwords
    if (!foundUser.password && password !== 'password123') {
      setIsLoading(false);
      return { success: false, error: 'Invalid password' };
    }
    setUser(foundUser);
    localStorage.setItem('3sk_auth', JSON.stringify({ email, timestamp: Date.now() }));
    setIsLoading(false);
    return { success: true };
  };

  const signup = async (userData: SignupData) => {
    setIsLoading(true);
    if (supbaseAvailable()) {
      try {
        const emailRedirectTo = `${window.location.origin}/auth/callback`;
        const { error } = await supabase!.auth.signUp({
          email: userData.email,
          password: userData.password,
          options: {
            emailRedirectTo,
            data: {
              name: userData.name,
              userType: 'customer',
              role: 'Customer',
              phone: userData.phone
            } as SupabaseUserMetadata
          }
        });
        setIsLoading(false);
        if (error) {
          return { success: false, error: error.message };
        }
        // Supabase sends a confirmation email.
        return { success: true };
      } catch (e: any) {
        setIsLoading(false);
        return { success: false, error: e?.message || 'Signup failed' };
      }
    }

    // Fallback: mock users
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (userData.password !== userData.confirmPassword) {
      setIsLoading(false);
      return { success: false, error: 'Passwords do not match' };
    }

    if (findMockUserByEmail(userData.email)) {
      setIsLoading(false);
      return { success: false, error: 'Email already registered' };
    }

    // Only allow customer registration through public signup
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      userType: 'customer',
      role: 'Customer',
      permissions: rolePermissions.Customer,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face`,
      phone: userData.phone,
      password: userData.password, // Store the user's chosen password
      preferences: {
        favoriteCarIds: [],
        interestedBrands: [],
        priceRange: { min: 0, max: 100000 }
      }
    };

    // Add to persistent storage
    const currentUsers = getMockUsers();
    currentUsers.push(newUser);
    saveMockUsers(currentUsers);
    
    setUser(newUser);
    localStorage.setItem('3sk_auth', JSON.stringify({ email: userData.email, timestamp: Date.now() }));
    setIsLoading(false);

    return { success: true };
  };

  const createTeamMember = async (userData: TeamMemberData) => {
    setIsLoading(true);
    if (supbaseAvailable()) {
      // Creating employees/admins requires service role via server. Not supported on client.
      setIsLoading(false);
      return { success: false, error: 'Not supported from client. Use a secure admin endpoint.' };
    }

    // Fallback mock behavior
    if (!user || !isAdmin()) {
      setIsLoading(false);
      return { success: false, error: 'Unauthorized: Only administrators can create team members' };
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (findMockUserByEmail(userData.email)) {
      setIsLoading(false);
      return { success: false, error: 'Email already registered' };
    }
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      userType: userData.userType,
      role: userData.role,
      permissions: rolePermissions[userData.role],
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face`,
      phone: userData.phone,
      password: userData.password // Store the team member's password
    };
    
    // Add to persistent storage
    const currentUsers = getMockUsers();
    currentUsers.push(newUser);
    saveMockUsers(currentUsers);
    
    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    if (supbaseAvailable()) {
      supabase!.auth.signOut();
    } else {
      setUser(null);
      localStorage.removeItem('3sk_auth');
    }
  };

  function supbaseAvailable() {
    return Boolean(supabase);
  }

  function mapSupabaseUserToUser(sbUser: { id: string; email?: string; user_metadata?: SupabaseUserMetadata; }): User {
    const meta = (sbUser.user_metadata || {}) as SupabaseUserMetadata;
    const role = meta.role || 'Customer';
    const userType = meta.userType || (role === 'Customer' ? 'customer' : role === 'Admin' ? 'admin' : 'employee');
    return {
      id: sbUser.id,
      name: meta.name || (sbUser.email || '').split('@')[0] || 'User',
      email: sbUser.email || '',
      userType,
      role,
      permissions: rolePermissions[role],
      avatar: undefined,
      phone: meta.phone,
      // Don't include password for Supabase users as they handle authentication
      preferences: userType === 'customer' ? {
        favoriteCarIds: [],
        interestedBrands: [],
        priceRange: { min: 0, max: 100000 }
      } : undefined
    };
  }

  const hasPermission = (permission: string) => {
    return user?.permissions.includes(permission) || false;
  };

  const isCustomer = () => {
    return user?.userType === 'customer';
  };

  const isEmployee = () => {
    return user?.userType === 'employee';
  };

  const isAdmin = () => {
    return user?.userType === 'admin';
  };

  const getRedirectPath = () => {
    if (!user) return '/login';
    if (user.userType === 'customer') return '/';
    if (user.userType === 'admin' || user.userType === 'employee') return '/admin';
    return '/';
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      createTeamMember,
      logout,
      isLoading,
      hasPermission,
      isCustomer,
      isEmployee,
      isAdmin,
      getRedirectPath
    }}>
      {children}
    </AuthContext.Provider>);

};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;