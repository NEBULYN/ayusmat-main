import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import PatientDashboard from '../components/dashboards/PatientDashboard';
import DoctorDashboard from '../components/dashboards/DoctorDashboard';
import HospitalDashboard from '../components/dashboards/HospitalDashboard';
import InsuranceDashboard from '../components/dashboards/InsuranceDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">Please log in to access your dashboard.</p>
        </div>
      </div>
    );
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'patient':
        return <PatientDashboard />;
      case 'doctor':
        return <DoctorDashboard />;
      case 'hospital':
        return <HospitalDashboard />;
      case 'insurance':
        return <InsuranceDashboard />;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Invalid Role</h2>
              <p className="text-gray-600">Your account role is not recognized.</p>
            </div>
          </div>
        );
    }
  };

  return renderDashboard();
};

export default Dashboard;