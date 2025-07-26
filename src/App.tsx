import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GetHealthID from './pages/GetHealthID';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DiscoverSchemes from './pages/DiscoverSchemes';
import PartnerWithUs from './pages/PartnerWithUs';
import ScheduleDemo from './pages/ScheduleDemo';
import Dashboard from './pages/Dashboard';

const HomePage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-health-id" element={<GetHealthID />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/discover-schemes" element={<DiscoverSchemes />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/unauthorized" element={
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Access Denied</h2>
                  <p className="text-gray-600 dark:text-gray-300">You don't have permission to access this page.</p>
                </div>
              </div>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;