import { motion } from 'framer-motion';

const PageTemplate = ({ title }) => (
  <div className="min-h-screen pt-32 pb-12 px-6 flex items-center justify-center">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass p-12 rounded-3xl border border-white/10 text-center max-w-2xl w-full relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 relative z-10">{title}</h1>
      <p className="text-gray-400 text-lg relative z-10">This premium futuristic page is currently under construction. Stay tuned for updates!</p>
    </motion.div>
  </div>
);

export const TeacherDashboard = () => <PageTemplate title="Teacher Dashboard" />;
export const AdminDashboard = () => <PageTemplate title="Admin Dashboard" />;
export const Gallery = () => <PageTemplate title="School Gallery" />;
export const Events = () => <PageTemplate title="Upcoming Events" />;
export const Contact = () => <PageTemplate title="Contact Us" />;
