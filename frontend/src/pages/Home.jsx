import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, Trophy, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Welcome to the future of education</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Empowering Minds with <br />
            <span className="text-gradient">AI-Powered</span> Learning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
          >
            Experience a next-generation school management platform designed to streamline administration, engage students, and empower educators with real-time insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Link to="/admissions" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-lg transition-all duration-300 glow-primary flex items-center justify-center gap-2 group">
              Start Application <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-full glass hover:bg-white/5 text-white font-medium text-lg transition-all duration-300 flex items-center justify-center border border-white/10">
              Explore Platform
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose NexusEdu?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our platform combines cutting-edge AI technology with intuitive design to create an unparalleled educational experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: 'Smart Learning', desc: 'Personalized AI-driven study plans tailored for each student.' },
              { icon: Users, title: 'Real-time Collaboration', desc: 'Seamless communication between teachers, students, and parents.' },
              { icon: BookOpen, title: 'Digital Library', desc: 'Access thousands of resources instantly from any device.' },
              { icon: Trophy, title: 'Performance Analytics', desc: 'Advanced tracking and predictive performance modeling.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
