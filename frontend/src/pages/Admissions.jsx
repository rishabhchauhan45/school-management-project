import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Users, GraduationCap, Globe } from 'lucide-react';

const faqs = [
  {
    question: "What is the admissions process?",
    answer: "Our admissions process is fully digital. You start by filling out the online application form, followed by an AI-proctored aptitude test, and finally a virtual interview with our admissions panel."
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer: "Yes, NexusEdu is committed to making elite education accessible. We offer merit-based scholarships and need-based financial aid. You can apply for these during the main application process."
  },
  {
    question: "What is the student-to-teacher ratio?",
    answer: "Thanks to our AI teaching assistants handling administrative and basic tutoring tasks, our human teachers can maintain a highly personalized 1:8 student-to-teacher interaction ratio."
  },
  {
    question: "Can international students apply?",
    answer: "Absolutely! Our platform is globally accessible, and we have students from over 120 countries. All classes are equipped with real-time AI translation."
  }
];

const testimonials = [
  {
    name: "Elena M.",
    role: "Computer Science Major",
    content: "The holographic labs completely changed how I learn. Being able to physically interact with 3D models of code architecture is mind-blowing.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "James T.",
    role: "Parent of Freshman",
    content: "The parent dashboard gives me exactly the right amount of insight into my son's progress without feeling intrusive. It's perfectly balanced.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah W.",
    role: "Alumni, Class of '25",
    content: "NexusEdu didn't just teach me facts; it taught me how to think in a rapidly changing world. I got hired by a top tech firm before I even graduated.",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const StatBox = ({ icon: Icon, value, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass p-8 rounded-3xl border border-white/10 text-center relative group overflow-hidden"
  >
    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
    <Icon className="w-10 h-10 text-blue-400 mx-auto mb-4 relative z-10" />
    <h3 className="text-4xl font-black text-white mb-2 relative z-10">{value}</h3>
    <p className="text-gray-400 font-medium relative z-10">{label}</p>
  </motion.div>
);

const Admissions = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full pt-24 pb-20">
      
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold mb-6"
        >
          Fall 2026 Applications Open
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Join the <span className="text-gradient">Next Generation</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          Begin your journey with NexusEdu today. Experience an admissions process that is as innovative and seamless as the education we provide.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-300 glow-primary"
        >
          Apply Now via AI Portal
        </motion.button>
      </div>

      {/* Animated Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatBox icon={Users} value="12,500+" label="Active Students" delay={0.1} />
            <StatBox icon={Globe} value="120" label="Countries Represented" delay={0.2} />
            <StatBox icon={Star} value="98%" label="Satisfaction Rate" delay={0.3} />
            <StatBox icon={GraduationCap} value="100%" label="Graduation Rate" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-gray-400">Hear from the brilliant minds who are shaping the future at NexusEdu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 relative"
              >
                <div className="absolute top-0 right-8 -translate-y-1/2 text-6xl text-blue-500/20 font-serif">"</div>
                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed italic">
                  {test.content}
                </p>
                <div className="flex items-center gap-4">
                  <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full border-2 border-blue-500/50" />
                  <div>
                    <h4 className="font-bold text-white">{test.name}</h4>
                    <p className="text-sm text-blue-400">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about joining our futuristic campus.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border border-white/10 rounded-2xl overflow-hidden"
              >
                <button 
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-lg text-white pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-400 leading-relaxed pt-2 border-t border-white/5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
