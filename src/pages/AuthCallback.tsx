import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '@/lib/supabaseClient';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handle = async () => {
      // Supabase handles session in URL automatically; just ensure session is loaded
      const { data, error } = await supabase.auth.getSession();
      if (!error && data.session) {
        navigate('/');
      } else {
        navigate('/login');
      }
    };
    handle();
  }, [navigate]);

  return null;
};

export default AuthCallback;

