import { motion } from 'framer-motion';
import { Users, DollarSign, Activity, Database, TrendingUp, TrendingDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 59000 },
  { month: 'Jun', revenue: 75000 },
];

const StatCard = ({ icon: Icon, label, value, trend, isPositive, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
    <div className="flex justify-between items-start relative z-10">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
      <div className="p-3 bg-cyan-500/10 rounded-xl">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
    </div>
    <div className={`mt-4 flex items-center text-sm font-medium relative z-10 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
      {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
      <span>{trend}</span>
    </div>
  </motion.div>
);

const AdminDashboard = () => {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">System Admin Panel</h1>
        <p className="text-gray-400">Global overview of finances, users, and server health.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={DollarSign} label="Total Revenue" value="$340,000" trend="+12.5% vs last month" isPositive={true} delay={0.1} />
        <StatCard icon={Users} label="Total Users" value="1,245" trend="+45 new signups" isPositive={true} delay={0.2} />
        <StatCard icon={Activity} label="System Health" value="99.9%" trend="-0.1% downtime" isPositive={false} delay={0.3} />
        <StatCard icon={Database} label="Storage Used" value="4.2 TB" trend="Approaching limit" isPositive={false} delay={0.4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5"
        >
          <h3 className="text-xl font-bold mb-6">Revenue Overview (Last 6 Months)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="month" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recent Activity Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass p-6 rounded-2xl border border-white/5 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-6">Recent User Activity</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {[
              { user: 'Sarah J.', action: 'Uploaded grading sheet', time: '2 mins ago', role: 'Teacher' },
              { user: 'Admin Sys', action: 'Database backup completed', time: '15 mins ago', role: 'System' },
              { user: 'John D.', action: 'Paid tuition fee', time: '1 hour ago', role: 'Student' },
              { user: 'Emily R.', action: 'Submitted assignment', time: '2 hours ago', role: 'Student' },
              { user: 'Mark T.', action: 'Created new class schedule', time: '3 hours ago', role: 'Teacher' },
            ].map((log, i) => (
              <div key={i} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-white text-sm">{log.user}</span>
                  <span className="text-xs text-gray-500">{log.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{log.action}</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {log.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
