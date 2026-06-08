import { motion } from 'framer-motion';
import { Book, Clock, CheckCircle, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const attendanceData = [
  { name: 'Mon', present: 100 },
  { name: 'Tue', present: 100 },
  { name: 'Wed', present: 0 },
  { name: 'Thu', present: 100 },
  { name: 'Fri', present: 100 },
];

const gradesData = [
  { subject: 'Math', score: 95 },
  { subject: 'Science', score: 88 },
  { subject: 'History', score: 92 },
  { subject: 'English', score: 85 },
  { subject: 'Physics', score: 90 },
];

const StatCard = ({ icon: Icon, label, value, trend, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
    <div className="flex justify-between items-start relative z-10">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
      <div className="p-3 bg-blue-500/10 rounded-xl">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm font-medium text-emerald-400 relative z-10">
      <TrendingUp className="w-4 h-4 mr-1" />
      <span>{trend}</span>
    </div>
  </motion.div>
);

const StudentDashboard = () => {
  return (
    <div>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-400">Here's your academic overview for this week.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={CheckCircle} label="Attendance" value="92%" trend="+2.5% from last month" delay={0.1} />
          <StatCard icon={Book} label="Assignments" value="12" trend="3 pending this week" delay={0.2} />
          <StatCard icon={TrendingUp} label="Average Grade" value="A-" trend="Top 15% of class" delay={0.3} />
          <StatCard icon={Clock} label="Study Hours" value="24h" trend="+4h from last week" delay={0.4} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6">Academic Performance</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={gradesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="subject" stroke="#9ca3af" axisLine={false} tickLine={false} />
                  <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Schedule/Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass p-6 rounded-2xl border border-white/5"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Today's Classes</h3>
              <button className="text-blue-400 text-sm hover:text-blue-300">View Full</button>
            </div>
            <div className="space-y-4">
              {[
                { time: '09:00 AM', subject: 'Advanced Mathematics', room: 'Room 302', status: 'completed' },
                { time: '10:30 AM', subject: 'Quantum Physics', room: 'Lab 4', status: 'current' },
                { time: '01:00 PM', subject: 'Computer Science', room: 'Lab 1', status: 'upcoming' },
                { time: '02:30 PM', subject: 'World History', room: 'Room 105', status: 'upcoming' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start relative">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mt-1.5 ${
                      item.status === 'completed' ? 'bg-emerald-500' : 
                      item.status === 'current' ? 'bg-blue-500 animate-pulse glow-primary' : 'bg-gray-600'
                    }`}></div>
                    {i !== 3 && <div className="w-[2px] h-10 bg-white/10 my-1"></div>}
                  </div>
                  <div className={`p-3 rounded-xl flex-1 border ${
                    item.status === 'current' ? 'bg-blue-500/10 border-blue-500/20' : 'bg-white/5 border-white/5'
                  }`}>
                    <h4 className={`font-semibold ${item.status === 'current' ? 'text-blue-400' : 'text-gray-200'}`}>{item.subject}</h4>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                      <span>{item.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
