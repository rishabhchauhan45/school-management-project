import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, ChevronDown, Bell, Sun, Moon, LogIn, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('light');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[60]"
        style={{ scaleX: 0, transformOrigin: '0%' }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 glass shadow-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl group-hover:glow-primary transition-all duration-300">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-white transition-colors duration-300">
              Nexus<span className="text-blue-500">Edu</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <div key={i} className="relative group px-3 py-2">
                <Link 
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-blue-400 font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute left-0 top-full mt-1 w-full h-[2px] bg-blue-500 rounded-full glow-primary" 
                    />
                  )}
                  <span className="absolute left-0 top-full mt-1 w-0 h-[2px] bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleDarkMode} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {user ? (
              <div className="flex items-center gap-4">
                <Link to={`/dashboard/${user.role}`} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  Dashboard
                </Link>
                <button onClick={logout} className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-5 py-2 rounded-full glass hover:bg-white/5 text-white text-sm font-medium transition-all duration-300 flex items-center gap-2">
                <LogIn className="w-4 h-4" /> Login
              </Link>
            )}
            
            {!user && (
              <Link to="/admissions" className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-300 glow-primary">
                Enroll
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-gray-300 hover:text-white z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-background/80 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-6 text-2xl font-semibold">
              {navLinks.map((link, i) => (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                >
                  {link.dropdown ? (
                    <div className="flex flex-col items-center gap-4">
                      <span className="text-gray-400">{link.name}</span>
                      {link.dropdown.map((drop, j) => (
                        <Link 
                          key={j} 
                          to={drop.path}
                          onClick={() => setIsOpen(false)}
                          className="text-xl text-gray-200 hover:text-blue-400 transition-colors"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`${location.pathname === link.path ? 'text-blue-500' : 'text-gray-200 hover:text-blue-400'} transition-colors`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
