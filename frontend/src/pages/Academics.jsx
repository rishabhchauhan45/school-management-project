import { motion } from 'framer-motion';
import { BookOpen, Monitor, Microscope, Activity, Cpu, Code } from 'lucide-react';

const FacultyCard = ({ name, role, department, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass rounded-2xl overflow-hidden border border-white/5 group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
    <div className="h-64 bg-gray-800 relative">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
      <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold mb-3 backdrop-blur-md">
        {department}
      </div>
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  </motion.div>
);

const FacilityCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 hover:border-blue-500/30 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:glow-primary transition-all">
      <Icon className="w-7 h-7 text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Academics = () => {
  return (
    <div className="w-full pt-24 pb-20">
      
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          World-Class <span className="text-gradient">Academics</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Discover our rigorous curriculum, state-of-the-art facilities, and the brilliant minds that make up our faculty.
        </motion.p>
      </div>

      {/* Campus Facilities */}
      <section className="py-16 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Facilities</h2>
              <p className="text-gray-400 max-w-xl">Equipped with next-generation technology to provide an immersive and practical learning experience.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FacilityCard 
              icon={Microscope} 
              title="Quantum Bio-Labs" 
              description="Fully equipped biology and chemistry laboratories featuring VR simulations for molecular level studies."
              delay={0.1}
            />
            <FacilityCard 
              icon={Cpu} 
              title="Robotics & AI Center" 
              description="A dedicated wing for building, programming, and testing autonomous robotics and AI algorithms."
              delay={0.2}
            />
            <FacilityCard 
              icon={Monitor} 
              title="Holographic Classrooms" 
              description="Lecture halls fitted with 3D holographic projectors to bring history, physics, and art to life."
              delay={0.3}
            />
            <FacilityCard 
              icon={BookOpen} 
              title="Digital Meta-Library" 
              description="A vast repository of digital books, research papers, and interactive learning modules accessible 24/7."
              delay={0.4}
            />
            <FacilityCard 
              icon={Code} 
              title="Code Collab Spaces" 
              description="Open-plan collaborative spaces for software engineering students to work on real-world projects."
              delay={0.5}
            />
            <FacilityCard 
              icon={Activity} 
              title="Sports & Wellness" 
              description="Smart gymnasiums that track physical performance and provide AI-generated nutritional advice."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Exceptional Faculty</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Learn from industry veterans, published researchers, and award-winning educators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FacultyCard 
              name="Dr. Sarah Jenkins" 
              role="Head of AI Sciences" 
              department="Computer Science"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              delay={0.1}
            />
            <FacultyCard 
              name="Prof. David Chen" 
              role="Lead Researcher" 
              department="Quantum Physics"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              delay={0.2}
            />
            <FacultyCard 
              name="Dr. Elena Rodriguez" 
              role="Director of Humanities" 
              department="Literature"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
              delay={0.3}
            />
            <FacultyCard 
              name="Marcus Johnson" 
              role="Senior Architect" 
              department="Engineering"
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
