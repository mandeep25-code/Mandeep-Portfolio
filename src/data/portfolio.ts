import {
  Github,
  Mail,
  Linkedin,
  Code2,
  FileText,
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  Database,
  Globe,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const personalInfo = {
  name: 'Mandeep Dhiman',
  title: 'Full Stack Developer',
  tagline: 'Building intelligent web applications with MERN stack & AI',
  bio: [
    "I'm a B.Tech Computer Science student and aspiring Full-Stack Developer passionate about building modern, scalable, and AI-powered web applications. I specialize in the MERN stack, including React.js, Node.js, Express.js, and MongoDB, and I'm also expanding my skills in Python, AI/ML, and LLM integration.",
    'I enjoy solving problems, learning new technologies, and turning ideas into practical digital solutions. My goal is to build impactful software and grow as a professional Software and AI Engineer.',
  ],
  passion: "I'm passionate about AI, full-stack development, and turning innovative ideas into intelligent real-world applications.",
  location: 'Yamuna Nagar, Haryana, India',
  email: 'mandeeps0564@gmail.com',
  phone: '+91 9817674007',
  socials: [
    { name: 'GitHub', link: 'https://github.com/mandeep25-code', icon: Github },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/mandeep-dhiman-03373727a', icon: Linkedin },
    { name: 'Email', link: 'mailto:mandeeps0564@gmail.com', icon: Mail },
  ],
};

export const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  techs: { name: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: Code2,
    techs: [{ name: 'C++' }, { name: 'JavaScript' }, { name: 'Python' }],
  },
  {
    category: 'Frontend',
    icon: Globe,
    techs: [{ name: 'React.js' }, { name: 'HTML5' }, { name: 'CSS3' }, { name: 'Bootstrap' }],
  },
  {
    category: 'Backend & Database',
    icon: Database,
    techs: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'MongoDB' }, { name: 'MySQL' }, { name: 'REST APIs' }, { name: 'JWT' }],
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    techs: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Postman' }, { name: 'VS Code' }],
  },
  {
    category: 'Concepts',
    icon: Cpu,
    techs: [{ name: 'OOP' }, { name: 'DSA' }, { name: 'AI/ML' }, { name: 'LLM Integration' }],
  },
];

export type Project = {
  id: string;
  name: string;
  category: 'Full Stack' | 'Frontend' | 'AI';
  live: string;
  github: string;
  timeline: string;
  status: 'Completed' | 'On Going';
  shortDescription: string;
  techUsed: string[];
  features: string[];
  description: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: '07',
    name: 'Pulse UI - Modern SaaS Dashboard',
    category: 'Frontend',
    live: '',
    github: 'https://github.com/mandeep25-code',
    timeline: '2026',
    status: 'Completed',
    featured: true,
    shortDescription: 'A responsive analytics dashboard designed for fast decisions, with an accessible interface, data-rich views, and purposeful micro-interactions.',
    techUsed: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: ['Responsive dashboard layout', 'Reusable UI component system', 'Accessible dark and light themes', 'Interactive data visualisation states'],
    description: ['Designed a polished frontend experience that makes complex product data easy to scan.', 'Built the interface with reusable React components and responsive layouts for every screen size.'],
  },
  {
    id: '06',
    name: 'Nexus AI Chat App',
    category: 'AI',
    live: '',
    github: 'https://github.com/mandeep25-code',
    timeline: '2026',
    status: 'Completed',
    featured: true,
    shortDescription: 'An AI chat workspace with conversation history, prompt suggestions, markdown-ready replies, and a focused interface for everyday problem solving.',
    techUsed: ['React.js', 'TypeScript', 'AI API', 'Tailwind CSS'],
    features: ['Persistent conversation history', 'Suggested prompts and quick actions', 'Streaming-style response experience', 'Responsive, dark-mode-first interface'],
    description: ['Created an intuitive chat workspace that makes interacting with an AI assistant feel fast and natural.', 'Focused on the product details that matter: clear states, helpful prompts, message history, and a distraction-free responsive UI.'],
  },
  {
    id: '05',
    name: 'AI-Powered Software Project Management & Client Portal',
    category: 'Full Stack',
    live: '',
    github: 'https://github.com/mandeep25-code',
    timeline: '2025',
    status: 'Completed',
    shortDescription:
      'A project, milestone, and task management system with role-based authentication, dedicated client portal, and AI-powered task generation, summaries, and risk detection.',
    techUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AI Integration'],
    features: [
      'Project, milestone, and task management system',
      'Role-based authentication with dedicated client portal',
      'AI-powered task generation and project summaries',
      'AI risk detection to flag potential project delays',
      'Comprehensive dashboard for project tracking',
    ],
    description: [
      'Built a comprehensive project management system with milestone and task tracking, role-based authentication, and a dedicated client portal for transparent collaboration.',
      'Integrated AI-powered task generation, project summaries, and risk detection to automatically flag potential delays and improve project delivery.',
      'Designed a scalable MERN architecture with secure JWT authentication, enabling teams and clients to collaborate effectively on software projects.',
    ],
  },
  {
    id: '04',
    name: 'AI-Powered Omnichannel Retail Platform',
    category: 'Full Stack',
    live: '',
    github: 'https://github.com/mandeep25-code',
    timeline: '2025',
    status: 'Completed',
    shortDescription:
      'A full-featured e-commerce platform with product catalogue, search, cart, wishlist, orders, inventory management, and AI-powered product recommendations and shopping assistant.',
    techUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration'],
    features: [
      'Full-featured e-commerce platform with product catalogue',
      'Search, filtering, cart, wishlist, and order management',
      'Inventory management system',
      'AI-powered product recommendations for personalization',
      'AI shopping assistant to enhance customer experience',
    ],
    description: [
      'Built a full-featured omnichannel e-commerce platform with product catalogue, advanced search and filtering, cart, wishlist, orders, and inventory management.',
      'Integrated AI-powered product recommendations and an AI shopping assistant to enhance personalization and improve the customer shopping experience.',
      'Developed a scalable MERN stack architecture with RESTful APIs for seamless frontend-backend communication and efficient data handling.',
    ],
  },
  {
    id: '03',
    name: 'AI-Powered Real Estate Marketplace',
    category: 'Full Stack',
    live: '',
    github: 'https://github.com/mandeep25-code',
    timeline: '2025',
    status: 'Completed',
    shortDescription:
      'A full-stack real estate marketplace with property listings, advanced search, filters, wishlist, comparison, buyer-seller communication, and AI-powered property recommendations and price analysis.',
    techUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API'],
    features: [
      'Property listings with advanced search and filters',
      'Wishlist and property comparison features',
      'Buyer-seller communication system',
      'AI-powered property recommendations and natural-language search',
      'AI price analysis, investment insights, and property risk detection',
    ],
    description: [
      'Built a full-stack real estate marketplace with property listings, advanced search, filters, wishlist, comparison, and buyer-seller communication features.',
      'Integrated Google Gemini API for AI-powered property recommendations, natural-language property search, price analysis, investment insights, and property risk/anomaly detection.',
      'Designed a responsive MERN stack application with secure authentication, enabling seamless property browsing and buyer-seller interactions.',
    ],
  },
  {
    id: '01',
    name: 'MERN Stack Internship Projects',
    category: 'Frontend',
    live: '',
    github: 'https://github.com/mandeep25-code',
    timeline: 'Jul – Sep 2025',
    status: 'Completed',
    shortDescription:
      'Full-stack web applications built during MERN Stack Development Intern at GeeksforGeeks, featuring AI integration, REST APIs, and end-to-end frontend-backend workflows.',
    techUsed: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'Postman'],
    features: [
      'Full-stack web applications with AI integration',
      'End-to-end MERN workflow — frontend-backend integration',
      'API testing with Postman',
      'Version control using Git and GitHub',
    ],
    description: [
      'Built full-stack web applications with AI integration using React.js, Node.js, Express.js, and MongoDB during the MERN Stack Development Internship at GeeksforGeeks.',
      'Practiced end-to-end MERN workflow including frontend-backend integration, API testing with Postman, and version control using Git and GitHub.',
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: 'GeeksforGeeks',
    role: 'MERN Stack Development Intern',
    period: 'Jul – Sep 2025',
    points: [
      'Built full-stack web applications with AI integration using React.js, Node.js, Express.js, and MongoDB.',
      'Practiced end-to-end MERN workflow — frontend-backend integration, API testing with Postman, and version control using Git/GitHub.',
    ],
  },
];

export type Education = {
  institution: string;
  degree: string;
  detail: string;
  period: string;
};

export const educations: Education[] = [
  {
    institution: 'Jai Parkash Mukand Lal Innovative Engineering and Technology Institute, Radaur',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    detail: 'CGPA: 7.2',
    period: '2023 – 2027',
  },
  {
    institution: 'DAV Public School, Radaur',
    degree: 'CBSE Class XII',
    detail: 'Percentage: 68.4%',
    period: '2022 – 2023',
  },
  {
    institution: 'DAV Public School, Radaur',
    degree: 'CBSE Class X',
    detail: 'Percentage: 60%',
    period: '2020 – 2021',
  },
];

export type Certification = {
  name: string;
  source: string;
};

export const certifications: Certification[] = [
  { name: 'MERN Stack Development', source: 'GeeksforGeeks' },
  { name: 'Workshop on Web Development', source: 'GeeksforGeeks at IIT Roorkee' },
  { name: 'C++ with Data Structures & Algorithms', source: 'PW Skills' },
  { name: 'TCS iON Career Edge — Young Professional', source: 'TCS iON' },
  { name: 'Generative AI', source: 'LinkedIn Learning' },
];

export const experienceIcon = Briefcase;
export const educationIcon = GraduationCap;
export const certificationIcon = Award;
export const fileIcon = FileText;
