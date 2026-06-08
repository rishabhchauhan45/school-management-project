import { motion } from 'framer-motion';
import { Users, BookOpen, Calendar, CheckSquare, TrendingUp, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const classPerformance = [
  { name: 'CS101', avg: 85 },
  { name: 'PHY201', avg: 72 },
  { name: 'MTH301', avg: 90 },
  { name: 'ENG102', avg: 88 },
];

const StatCard = ({ icon: Icon, label, value, trend, delay, color = 'blue' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/5 rounded-full blur-2xl group-hover:bg-${color}-500/10 transition-colors`}></div>
    <div className="flex justify-between items-start relative z-10">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
      <div className={`p-3 bg-${color}-500/10 rounded-xl`}>
        <Icon className={`w-6 h-6 text-${color}-400`} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm font-medium text-emerald-400 relative z-10">
      <TrendingUp className="w-4 h-4 mr-1" />
      <span>{trend}</span>
    </div>
  </motion.div>
);

const TeacherDashboard = () => {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8 flex justify-between items-end"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Teacher Overview</h1>
          <p className="text-gray-400">Manage your classes, grading, and schedules.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors text-sm">
          + Create Assignment
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={Users} label="Total Students" value="142" trend="+5 this semester" delay={0.1} />
        <StatCard icon={BookOpen} label="Active Classes" value="4" trend="Same as last term" delay={0.2} color="purple" />
        <StatCard icon={CheckSquare} label="Ungraded Tasks" value="28" trend="Needs attention" delay={0.3} color="red" />
        <StatCard icon={Calendar} label="Upcoming Classes" value="3" trend="Today" delay={0.4} color="cyan" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5"
        >
          <h3 className="text-xl font-bold mb-6">Class Performance Averages</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classPerformance} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="avg" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Action Items */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass p-6 rounded-2xl border border-white/5"
        >
          <h3 className="text-xl font-bold mb-6">Needs Attention</h3>
          <div className="space-y-4">
            {[
              { type: 'grading', text: 'Grade Midterm Papers for CS101', count: 12 },
              { type: 'attendance', text: 'Mark attendance for MTH301', count: 1 },
              { type: 'meeting', text: 'Parent-Teacher meeting at 3 PM', count: 0 },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors flex justify-between items-center cursor-pointer group">
                <div className="flex items-center gap-3">
                  <AlertCircle className={`w-5 h-5 ${item.type === 'grading' ? 'text-red-400' : 'text-blue-400'}`} />
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">{item.text}</span>
                </div>
                {item.count > 0 && (
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
