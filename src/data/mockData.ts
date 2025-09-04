import { Car, BlogPost, Inquiry, DashboardStats } from '@/types';

export const mockCars: Car[] = [
{
  id: '1',
  make: 'Toyota',
  model: 'Harrier',
  year: 2018,
  price: 35000000,
  mileage: 45000,
  fuelType: 'Hybrid',
  transmission: 'Automatic',
  bodyType: 'SUV',
  color: 'Pearl White',
  engineSize: 2.0,
  description: 'Excellent condition Toyota Harrier with premium features. Low mileage, well maintained, perfect for family use.',
  features: [
  'Navigation System',
  'Backup Camera',
  'Heated Seats',
  'Bluetooth Connectivity',
  'Cruise Control',
  'Leather Interior',
  'Sunroof',
  'LED Headlights'],

  images: [
  'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop'],

  status: 'Available',
  location: 'Kampala',
  chassisNumber: 'ACU30-1234567',
  registrationYear: 2018,
  condition: 'Excellent',
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z'
},
{
  id: '2',
  make: 'Honda',
  model: 'Vezel',
  year: 2019,
  price: 28000000,
  mileage: 35000,
  fuelType: 'Hybrid',
  transmission: 'CVT',
  bodyType: 'SUV',
  color: 'Silver',
  engineSize: 1.5,
  description: 'Fuel-efficient Honda Vezel in pristine condition. Perfect compact SUV for city driving.',
  features: [
  'Honda SENSING',
  'Smart Entry',
  'Push Start',
  'Dual Climate Control',
  'Rearview Camera',
  'LED Lights',
  'Smart Key'],

  images: [
  'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'],

  status: 'Available',
  location: 'Kampala',
  chassisNumber: 'RU3-9876543',
  registrationYear: 2019,
  condition: 'Excellent',
  createdAt: '2024-01-14T10:00:00Z',
  updatedAt: '2024-01-14T10:00:00Z'
},
{
  id: '3',
  make: 'Mazda',
  model: 'CX-5',
  year: 2020,
  price: 32000000,
  mileage: 25000,
  fuelType: 'Petrol',
  transmission: 'Automatic',
  bodyType: 'SUV',
  color: 'Deep Red',
  engineSize: 2.0,
  description: 'Stylish Mazda CX-5 with SKYACTIV technology. Low mileage and excellent performance.',
  features: [
  'SKYACTIV Technology',
  'Mazda Connect',
  'Blind Spot Monitoring',
  'Premium Sound System',
  'Leather Seats',
  'Smart City Brake',
  'Lane Keep Assist'],

  images: [
  'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop'],

  status: 'Available',
  location: 'Kampala',
  chassisNumber: 'KF2P-5555555',
  registrationYear: 2020,
  condition: 'Excellent',
  createdAt: '2024-01-13T10:00:00Z',
  updatedAt: '2024-01-13T10:00:00Z'
},
{
  id: '4',
  make: 'Nissan',
  model: 'X-Trail',
  year: 2017,
  price: 25000000,
  mileage: 55000,
  fuelType: 'Petrol',
  transmission: 'CVT',
  bodyType: 'SUV',
  color: 'Black',
  engineSize: 2.0,
  description: 'Reliable Nissan X-Trail with spacious interior. Great for family adventures.',
  features: [
  '7-Seater',
  'All-Wheel Drive',
  'Intelligent Key',
  'Around View Monitor',
  'Dual Climate Control',
  'Roof Rails',
  'Fog Lights'],

  images: [
  'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop'],

  status: 'Sold',
  location: 'Kampala',
  chassisNumber: 'T32-7777777',
  registrationYear: 2017,
  condition: 'Good',
  createdAt: '2024-01-12T10:00:00Z',
  updatedAt: '2024-01-16T15:30:00Z'
},
{
  id: '5',
  make: 'Subaru',
  model: 'Forester',
  year: 2019,
  price: 30000000,
  mileage: 40000,
  fuelType: 'Petrol',
  transmission: 'CVT',
  bodyType: 'SUV',
  color: 'Blue',
  engineSize: 2.0,
  description: 'Adventure-ready Subaru Forester with excellent safety features and all-wheel drive.',
  features: [
  'Symmetrical AWD',
  'EyeSight Safety',
  'X-Mode',
  'Panoramic Sunroof',
  'Keyless Access',
  'Hill Descent Control',
  'Power Tailgate'],

  images: [
  'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop'],

  status: 'Available',
  location: 'Kampala',
  chassisNumber: 'SK9-3333333',
  registrationYear: 2019,
  condition: 'Excellent',
  createdAt: '2024-01-11T10:00:00Z',
  updatedAt: '2024-01-11T10:00:00Z'
},
{
  id: '6',
  make: 'Toyota',
  model: 'Prius',
  year: 2018,
  price: 22000000,
  mileage: 38000,
  fuelType: 'Hybrid',
  transmission: 'CVT',
  bodyType: 'Hatchback',
  color: 'White',
  engineSize: 1.8,
  description: 'Eco-friendly Toyota Prius with exceptional fuel economy. Perfect for daily commuting.',
  features: [
  'Hybrid Technology',
  'Toyota Safety Sense',
  'Smart Entry',
  'LED Headlights',
  'Touch Screen',
  'Backup Camera',
  'Eco Mode'],

  images: [
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop'],

  status: 'Available',
  location: 'Kampala',
  chassisNumber: 'ZVW30-1111111',
  registrationYear: 2018,
  condition: 'Good',
  createdAt: '2024-01-10T10:00:00Z',
  updatedAt: '2024-01-10T10:00:00Z'
},
{
  id: '7',
  make: 'Honda',
  model: 'Civic',
  year: 2020,
  price: 26000000,
  mileage: 30000,
  fuelType: 'Petrol',
  transmission: 'CVT',
  bodyType: 'Sedan',
  color: 'Championship White',
  engineSize: 1.5,
  description: 'Sporty Honda Civic with modern design and excellent fuel efficiency. Perfect for young professionals.',
  features: [
  'Honda SENSING',
  'Apple CarPlay',
  'Android Auto',
  'Lane Departure Warning',
  'Adaptive Cruise Control',
  'LED Headlights',
  'Push Button Start'],

  images: [
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop'],

  status: 'Available',
  location: 'Kampala',
  chassisNumber: 'FC1-8888888',
  registrationYear: 2020,
  condition: 'Excellent',
  createdAt: '2024-01-09T10:00:00Z',
  updatedAt: '2024-01-09T10:00:00Z'
},
{
  id: '8',
  make: 'Toyota',
  model: 'Land Cruiser Prado',
  year: 2016,
  price: 45000000,
  mileage: 65000,
  fuelType: 'Diesel',
  transmission: 'Automatic',
  bodyType: 'SUV',
  color: 'Silver',
  engineSize: 3.0,
  description: 'Rugged Toyota Land Cruiser Prado perfect for off-road adventures and family trips.',
  features: [
  '4WD System',
  'Hill Descent Control',
  'Crawl Control',
  'Multi-Terrain Select',
  'Leather Seats',
  'Third Row Seating',
  'Roof Rails',
  'Tow Package'],

  images: [
  'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop'],

  status: 'Available',
  location: 'Kampala',
  chassisNumber: 'GRJ150-9999999',
  registrationYear: 2016,
  condition: 'Good',
  createdAt: '2024-01-08T10:00:00Z',
  updatedAt: '2024-01-08T10:00:00Z'
}];



export const mockBlogPosts: BlogPost[] = [
{
  id: '1',
  title: 'Welcome to 3SK Investment: Your Trusted Car Import Partner in Uganda',
  content: 'At 3SK Investment, we are proud to be Uganda\'s leading car import specialist, bringing you the finest Japanese vehicles directly from Japan. With over 8 years of experience in the automotive industry, we have built a reputation for reliability, transparency, and exceptional customer service. Our mission is to make quality Japanese cars accessible to Ugandan families and businesses while providing comprehensive support throughout the entire import process. We understand that purchasing a car is a significant investment, which is why we go above and beyond to ensure every vehicle meets our strict quality standards. From initial consultation to final delivery, our experienced team guides you through every step, handling all documentation, customs clearance, and compliance requirements. We believe in building long-term relationships with our clients, offering not just cars, but peace of mind and ongoing support for years to come.',
  excerpt: 'Learn about 3SK Investment\'s commitment to bringing quality Japanese cars to Uganda with exceptional service and support.',
  author: '3SK Investment Team',
  publishedAt: '2024-01-15T10:00:00Z',
  tags: ['About Us', 'Company', 'Mission'],
  featuredImage: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=400&fit=crop',
  status: 'Published',
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z'
},
{
  id: '2',
  title: 'Why Choose Japanese Cars for Ugandan Roads?',
  content: 'Japanese vehicles have earned their reputation as the most reliable and practical choice for Ugandan drivers. The combination of advanced engineering, rigorous quality control, and practical design philosophy makes Japanese cars perfectly suited for our diverse terrain and climate conditions. Japanese manufacturers prioritize durability and fuel efficiency, crucial factors given Uganda\'s varying road conditions and fuel price fluctuations. Models like the Toyota Harrier, Honda Vezel, and Mazda CX-5 are specifically designed to handle both city driving and rural adventures. The widespread availability of spare parts and the extensive knowledge of Japanese vehicle mechanics in Uganda make maintenance affordable and convenient. Additionally, Japanese cars maintain their value exceptionally well, making them a smart long-term investment. At 3SK Investment, we specialize in sourcing the best Japanese vehicles that meet Ugandan standards and preferences, ensuring you get maximum value for your investment.',
  excerpt: 'Discover why Japanese cars are the ideal choice for Ugandan drivers, from reliability to fuel efficiency and long-term value.',
  author: '3SK Investment Team',
  publishedAt: '2024-01-12T10:00:00Z',
  tags: ['Japanese Cars', 'Uganda', 'Reliability'],
  featuredImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop',
  status: 'Published',
  createdAt: '2024-01-12T10:00:00Z',
  updatedAt: '2024-01-12T10:00:00Z'
},
{
  id: '3',
  title: 'Our Complete Car Import Process: From Japan to Your Doorstep',
  content: 'At 3SK Investment, we have streamlined the car import process to make it as simple and stress-free as possible for our clients. Our comprehensive service begins with a detailed consultation where we understand your specific needs, budget, and preferences. We then source the perfect vehicle from our network of trusted Japanese dealers and auction houses, ensuring every car meets our strict quality standards. Our team conducts thorough inspections, handles all necessary documentation including export certificates and compliance papers, and arranges secure shipping through our reliable freight partners. Once the vehicle arrives in Uganda, we manage all customs clearance procedures, URA requirements, and UNBS standards compliance. The entire process typically takes 6-8 weeks from purchase to delivery, and we provide regular updates throughout. We also offer flexible financing options and comprehensive after-sales support, including warranty coverage and maintenance services, ensuring your investment is protected for years to come.',
  excerpt: 'Everything you need to know about our streamlined car import process from Japan to Uganda, including timelines and support.',
  author: '3SK Investment Team',
  publishedAt: '2024-01-10T10:00:00Z',
  tags: ['Import Process', 'Japan', 'Guide'],
  featuredImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=400&fit=crop',
  status: 'Published',
  createdAt: '2024-01-10T10:00:00Z',
  updatedAt: '2024-01-10T10:00:00Z'
},
{
  id: '4',
  title: 'Financing Options Available at 3SK Investment',
  content: 'We understand that purchasing a car is a significant financial decision, which is why we offer flexible financing solutions to make your dream car more accessible. Our financing options are designed to suit various budgets and circumstances, with competitive interest rates and flexible repayment terms. We work with trusted financial partners to provide both new and used car financing, with loan terms ranging from 12 to 60 months. Our team will help you find the financing solution that best fits your budget and requirements. We also offer trade-in services for your existing vehicle, making the upgrade process even smoother. Additionally, we provide comprehensive insurance options to protect your investment. Our goal is to make quality Japanese cars accessible to everyone, regardless of their financial situation, while ensuring you get the best possible terms and support throughout the financing process.',
  excerpt: 'Explore our flexible financing options designed to make quality Japanese cars accessible to every budget.',
  author: '3SK Investment Team',
  publishedAt: '2024-01-08T10:00:00Z',
  tags: ['Financing', 'Loans', 'Payment'],
  featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
  status: 'Published',
  createdAt: '2024-01-08T10:00:00Z',
  updatedAt: '2024-01-08T10:00:00Z'
},
{
  id: '5',
  title: 'After-Sales Support: Your Investment is Our Priority',
  content: 'At 3SK Investment, our relationship with you doesn\'t end when you drive away with your new car. We are committed to providing comprehensive after-sales support to ensure your vehicle continues to serve you well for years to come. Our after-sales services include regular maintenance check-ups, genuine spare parts supply, and technical support from our certified mechanics. We offer warranty coverage on all imported vehicles, giving you peace of mind and protection against unexpected issues. Our service center is equipped with state-of-the-art diagnostic tools and staffed by experienced technicians who specialize in Japanese vehicles. We also provide 24/7 roadside assistance for emergencies, ensuring help is always available when you need it most. Additionally, we offer vehicle inspection services, insurance assistance, and registration support to make car ownership as hassle-free as possible. Your satisfaction and the longevity of your investment are our top priorities.',
  excerpt: 'Learn about our comprehensive after-sales support services designed to protect and maintain your investment.',
  author: '3SK Investment Team',
  publishedAt: '2024-01-05T10:00:00Z',
  tags: ['After Sales', 'Support', 'Maintenance'],
  featuredImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
  status: 'Published',
  createdAt: '2024-01-05T10:00:00Z',
  updatedAt: '2024-01-05T10:00:00Z'
}];


export const mockInquiries: Inquiry[] = [
{
  id: '1',
  name: 'James Ssempala',
  email: 'james.ssempala@gmail.com',
  phone: '+256 701 234567',
  message: 'I am interested in the Toyota Harrier. Can we schedule a viewing this weekend?',
  carId: '1',
  status: 'New',
  createdAt: '2024-01-16T08:30:00Z'
},
{
  id: '2',
  name: 'Grace Nakato',
  email: 'grace.nakato@yahoo.com',
  phone: '+256 702 345678',
  message: 'What is your best price for the Honda Vezel? I am looking for financing options as well.',
  carId: '2',
  status: 'Contacted',
  createdAt: '2024-01-15T14:20:00Z'
},
{
  id: '3',
  name: 'Robert Mubiru',
  email: 'robert.mubiru@outlook.com',
  phone: '+256 703 456789',
  message: 'Do you have any financing options available? I am interested in the Mazda CX-5.',
  carId: '3',
  status: 'New',
  createdAt: '2024-01-15T11:45:00Z'
},
{
  id: '4',
  name: 'Sarah Namukasa',
  email: 'sarah.namukasa@gmail.com',
  phone: '+256 704 567890',
  message: 'I would like to import a Toyota Prius. Can you help me with the process?',
  carId: '6',
  status: 'In Progress',
  createdAt: '2024-01-14T09:15:00Z'
},
{
  id: '5',
  name: 'Michael Kato',
  email: 'michael.kato@hotmail.com',
  phone: '+256 705 678901',
  message: 'What is the condition of the Subaru Forester? I need a reliable car for off-road trips.',
  carId: '5',
  status: 'Contacted',
  createdAt: '2024-01-13T16:30:00Z'
}];


export const mockDashboardStats: DashboardStats = {
  totalCars: 8,
  availableCars: 7,
  soldCars: 1,
  pendingInquiries: 3,
  totalInquiries: 5,
  blogPosts: 5,
  recentActivity: [
  {
    id: '1',
    type: 'inquiry_received',
    description: 'New inquiry from James Ssempala for Toyota Harrier',
    timestamp: '2024-01-16T08:30:00Z'
  },
  {
    id: '2',
    type: 'car_sold',
    description: 'Nissan X-Trail marked as sold',
    timestamp: '2024-01-16T15:30:00Z'
  },
  {
    id: '3',
    type: 'blog_published',
    description: 'Published: Welcome to 3SK Investment: Your Trusted Car Import Partner',
    timestamp: '2024-01-15T10:00:00Z'
  },
  {
    id: '4',
    type: 'inquiry_received',
    description: 'New inquiry from Grace Nakato for Honda Vezel',
    timestamp: '2024-01-15T14:20:00Z'
  },
  {
    id: '5',
    type: 'car_added',
    description: 'New Honda Civic added to inventory',
    timestamp: '2024-01-14T11:00:00Z'
  },
  {
    id: '6',
    type: 'inquiry_received',
    description: 'New inquiry from Robert Mubiru for Mazda CX-5',
    timestamp: '2024-01-15T11:45:00Z'
  }]

};