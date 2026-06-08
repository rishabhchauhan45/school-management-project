import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentDashboard from './pages/StudentDashboard';
import { TeacherDashboard, AdminDashboard, Gallery, Events, Contact } from './pages/CommonPages';
import TeacherDashboardPage from './pages/TeacherDashboard';
import AdminDashboardPage from './pages/AdminDashboard';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>;
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRole && user.role !== allowedRole) return <Navigate to="/" replace />;
  
  return children;
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/dashboard/student" element={
            <ProtectedRoute allowedRole="student">
              <DashboardLayout role="student"><StudentDashboard /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/teacher" element={
            <ProtectedRoute allowedRole="teacher">
              <DashboardLayout role="teacher"><TeacherDashboardPage /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard/admin" element={
            <ProtectedRoute allowedRole="admin">
              <DashboardLayout role="admin"><AdminDashboardPage /></DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
