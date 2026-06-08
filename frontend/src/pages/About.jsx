import { motion } from 'framer-motion';
import { Target, Eye, Compass, Award } from 'lucide-react';

const TimelineItem = ({ year, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`flex w-full ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} items-center relative mb-12 md:mb-24`}
  >
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 glow-primary z-10 border-4 border-background"></div>
    <div className={`w-full md:w-5/12 glass p-6 md:p-8 rounded-2xl border border-white/5 relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
      <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 absolute top-4 right-4 md:static md:opacity-100">{year}</span>
      <h3 className="text-2xl font-bold mt-2 md:mt-4 mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Redefining Education for the <span className="text-gradient">Future</span></h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              At NexusEdu, we blend cutting-edge artificial intelligence with proven pedagogical methods to create an environment where every student reaches their absolute maximum potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/5 border-y border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To democratize elite-level education globally by providing an accessible, AI-powered platform that personalizes the learning journey, minimizes administrative overhead, and fosters a collaborative ecosystem for students, teachers, and parents.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors duration-500"></div>
              <Eye className="w-12 h-12 text-purple-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We envision a world where physical boundaries no longer dictate the quality of education. A completely interconnected, data-driven learning universe that adapts in real-time to the cognitive needs of every individual learner on the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Compass, title: 'Innovation First', desc: 'Constantly pushing the boundaries of what is possible in EdTech.' },
              { icon: Award, title: 'Excellence', desc: 'Accepting nothing less than the highest standard in everything we do.' },
              { icon: Target, title: 'Student-Centric', desc: 'Every decision made is optimized for the learners success.' },
              { icon: Eye, title: 'Transparency', desc: 'Clear, open communication with our entire community.' }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-colors"
              >
                <value.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The evolution of the NexusEdu platform from a bold idea to a global phenomenon.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-50"></div>
            
            <TimelineItem 
              year="2022" 
              title="The Inception" 
              description="Founded by a team of visionary educators and AI researchers with a single goal: revolutionize the modern classroom."
              index={0} 
            />
            <TimelineItem 
              year="2023" 
              title="Beta Launch" 
              description="Deployed the first version of the platform in 50 pilot schools, gathering critical data to train our neural networks."
              index={1} 
            />
            <TimelineItem 
              year="2024" 
              title="Series A Funding" 
              description="Secured $50M in funding to scale operations and integrate advanced predictive analytics and holographic UI concepts."
              index={2} 
            />
            <TimelineItem 
              year="2025" 
              title="Global Expansion" 
              description="Expanded to over 10,000 institutions worldwide, translating the platform into 40 different languages."
              index={3} 
            />
            <TimelineItem 
              year="2026" 
              title="AI Singularity UI" 
              description="Launched the highly anticipated 'Billion-Dollar SaaS' redesign, featuring glassmorphism, dynamic routing, and ultra-fast performance."
              index={4} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
