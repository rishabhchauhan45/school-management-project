import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, BookOpen, Calendar, DollarSign, Settings, LogOut, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ role }) => {
  const location = useLocation();

  const getLinks = () => {
    switch(role) {
      case 'admin':
        return [
          { name: 'Overview', path: '/dashboard/admin', icon: LayoutDashboard },
          { name: 'Students', path: '#', icon: Users },
          { name: 'Teachers', path: '#', icon: BookOpen },
          { name: 'Finances', path: '#', icon: DollarSign },
          { name: 'Settings', path: '#', icon: Settings },
        ];
      case 'teacher':
        return [
          { name: 'My Classes', path: '/dashboard/teacher', icon: LayoutDashboard },
          { name: 'Students', path: '#', icon: Users },
          { name: 'Assignments', path: '#', icon: BookOpen },
          { name: 'Schedule', path: '#', icon: Calendar },
          { name: 'Settings', path: '#', icon: Settings },
        ];
      default: // student
        return [
          { name: 'My Dashboard', path: '/dashboard/student', icon: LayoutDashboard },
          { name: 'Courses', path: '#', icon: BookOpen },
          { name: 'Timetable', path: '#', icon: Calendar },
          { name: 'Fees', path: '#', icon: DollarSign },
          { name: 'Settings', path: '#', icon: Settings },
        ];
    }
  };

  const links = getLinks();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white shadow-lg"
      >
        <LayoutDashboard className="w-5 h-5" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`w-64 h-screen fixed left-0 top-0 glass border-r border-white/5 flex flex-col pt-24 pb-6 px-4 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex-1 space-y-2 mt-4 overflow-y-auto scrollbar-hide">
          {links.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={i} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute inset-0 bg-blue-500/20 border border-blue-500/30 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <link.icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-blue-400' : 'group-hover:text-blue-400 transition-colors'}`} />
                <span className="font-medium relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="pt-4 border-t border-white/5 space-y-2 mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all w-full text-left">
            <Bell className="w-5 h-5" />
            <span className="font-medium">Notifications</span>
          </button>
          <button onClick={logout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all w-full text-left">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
