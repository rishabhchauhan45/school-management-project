import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children, role = 'student' }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex overflow-x-hidden">
      <Sidebar role={role} />
      <div className="flex-1 md:ml-64 w-full pt-24 p-4 md:p-8 relative">
        {/* Background glow effects for dashboard */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[100vw]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
