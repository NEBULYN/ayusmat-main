import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Stethoscope, User, Calendar, FileText, Users, 
  Bell, Settings, LogOut, Activity, Search,
  Clock, Phone, Video, MessageSquare, Eye,
  TrendingUp, AlertCircle, CheckCircle, Plus
} from 'lucide-react';

const DoctorDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'consultations', label: 'Consultations', icon: Stethoscope },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const todayAppointments = [
    { 
      time: '09:00 AM', 
      patient: 'Rajesh Kumar', 
      uhid: 'UHID123456789',
      type: 'Follow-up', 
      status: 'confirmed',
      age: 45,
      condition: 'Hypertension'
    },
    { 
      time: '10:30 AM', 
      patient: 'Priya Sharma', 
      uhid: 'UHID987654321',
      type: 'New Patient', 
      status: 'confirmed',
      age: 32,
      condition: 'Diabetes screening'
    },
    { 
      time: '02:00 PM', 
      patient: 'Amit Singh', 
      uhid: 'UHID456789123',
      type: 'Consultation', 
      status: 'pending',
      age: 28,
      condition: 'Chest pain'
    },
  ];

  const recentPatients = [
    {
      name: 'Sunita Devi',
      uhid: 'UHID789123456',
      age: 55,
      lastVisit: '2025-01-14',
      condition: 'Diabetes Type 2',
      status: 'stable',
      nextAppointment: '2025-01-28'
    },
    {
      name: 'Vikram Patel',
      uhid: 'UHID321654987',
      age: 38,
      lastVisit: '2025-01-12',
      condition: 'Hypertension',
      status: 'improving',
      nextAppointment: '2025-01-26'
    },
    {
      name: 'Meera Gupta',
      uhid: 'UHID654321789',
      age: 42,
      lastVisit: '2025-01-10',
      condition: 'Thyroid disorder',
      status: 'monitoring',
      nextAppointment: '2025-01-24'
    },
  ];

  const patientsList = [
    {
      name: 'Rajesh Kumar',
      uhid: 'UHID123456789',
      age: 45,
      gender: 'Male',
      phone: '+91 98765 43210',
      lastVisit: '2025-01-15',
      condition: 'Hypertension, Diabetes',
      status: 'active',
      riskLevel: 'medium'
    },
    {
      name: 'Priya Sharma',
      uhid: 'UHID987654321',
      age: 32,
      gender: 'Female',
      phone: '+91 87654 32109',
      lastVisit: '2025-01-14',
      condition: 'Pregnancy - 2nd trimester',
      status: 'active',
      riskLevel: 'low'
    },
    {
      name: 'Amit Singh',
      uhid: 'UHID456789123',
      age: 28,
      gender: 'Male',
      phone: '+91 76543 21098',
      lastVisit: '2025-01-13',
      condition: 'Anxiety, Sleep disorder',
      status: 'active',
      riskLevel: 'low'
    },
    {
      name: 'Sunita Devi',
      uhid: 'UHID789123456',
      age: 55,
      gender: 'Female',
      phone: '+91 65432 10987',
      lastVisit: '2025-01-12',
      condition: 'Diabetes Type 2, Obesity',
      status: 'active',
      riskLevel: 'high'
    },
  ];

  const filteredPatients = patientsList.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.uhid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Good morning, {user?.name}!</h2>
        <p className="text-blue-100 mb-4">You have {todayAppointments.length} appointments scheduled for today.</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Stethoscope className="h-5 w-5" />
            <span className="font-semibold">License: {user?.licenseNumber}</span>
          </div>
          <p className="text-sm text-blue-100">Cardiology Specialist</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 rounded-lg p-3">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{todayAppointments.length}</span>
          </div>
          <h3 className="font-semibold text-gray-900">Today's Appointments</h3>
          <p className="text-sm text-gray-600">Next: 9:00 AM</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 rounded-lg p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">156</span>
          </div>
          <h3 className="font-semibold text-gray-900">Total Patients</h3>
          <p className="text-sm text-gray-600">Active: 142</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 rounded-lg p-3">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">23</span>
          </div>
          <h3 className="font-semibold text-gray-900">Consultations</h3>
          <p className="text-sm text-gray-600">This week</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 rounded-lg p-3">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9</span>
          </div>
          <h3 className="font-semibold text-gray-900">Patient Rating</h3>
          <p className="text-sm text-gray-600">Based on 89 reviews</p>
        </div>
      </div>

      {/* Today's Schedule & Recent Patients */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Today's Schedule</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {todayAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">{appointment.time}</div>
                  <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
                    appointment.status === 'confirmed' ? 'bg-green-500' : 'bg-orange-500'
                  }`}></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{appointment.patient}</h4>
                  <p className="text-sm text-gray-600">{appointment.condition}</p>
                  <p className="text-xs text-gray-500">UHID: {appointment.uhid}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Video className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Patients</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentPatients.map((patient, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                  <p className="text-sm text-gray-600">{patient.condition}</p>
                  <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  patient.status === 'stable' ? 'bg-green-100 text-green-800' :
                  patient.status === 'improving' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {patient.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Patient Management</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Patient</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients by name, UHID, or condition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Patients List */}
        <div className="space-y-4">
          {filteredPatients.map((patient, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                    <p className="text-sm text-gray-600">{patient.age} years, {patient.gender}</p>
                    <p className="text-xs text-gray-500">UHID: {patient.uhid}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    patient.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
                    patient.riskLevel === 'medium' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {patient.riskLevel} risk
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Last visit: {patient.lastVisit}</p>
                </div>
              </div>
              
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Conditions:</p>
                  <p className="text-sm text-gray-600">{patient.condition}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Contact:</p>
                  <p className="text-sm text-gray-600">{patient.phone}</p>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-3">
                <button className="flex items-center space-x-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>View Records</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>Message</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'appointments':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Appointments</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Today's Appointments</h4>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">8</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">This Week</h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">23</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Pending</h4>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Schedule Management</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Calendar
                  </button>
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    Block Time Slots
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'consultations':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Consultations</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Video Consultations</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">5 scheduled for today</p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">In-Person Visits</h4>
                  <p className="text-teal-700 dark:text-teal-300 text-sm">12 patients today</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Consultations</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Rajesh Kumar</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Hypertension follow-up</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Priya Sharma</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Diabetes consultation</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">4 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'prescriptions':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Prescriptions</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Today's Prescriptions</h4>
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">15</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">This Month</h4>
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">342</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Digital Prescriptions</h4>
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">98%</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Prescription Tools</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Create New Prescription
                  </button>
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    View Templates
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Dr. {user?.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">License: {user?.licenseNumber}</p>
                  <p className="text-gray-600 dark:text-gray-400">Cardiology Specialist</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    value={user?.email || ''} 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Specialization</label>
                  <input 
                    type="text" 
                    value="Cardiology" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    readOnly
                  />
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Settings</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Practice Settings</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Enable online consultations</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Auto-sync with hospital systems</span>
                  </label>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Availability</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Working Hours</label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <option>9:00 AM - 6:00 PM</option>
                      <option>8:00 AM - 5:00 PM</option>
                      <option>10:00 AM - 7:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Consultation Duration</label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option>45 minutes</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Save Settings
              </button>
            </div>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Doctor Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dr. {user?.name} - Cardiology</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                <Bell className="h-6 w-6" />
              </button>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Dr. {user?.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cardiology Specialist</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">License: {user?.licenseNumber}</p>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;