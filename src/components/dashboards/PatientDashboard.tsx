import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Heart, User, Calendar, FileText, CreditCard, 
  Bell, Settings, LogOut, Activity, Pill,
  MapPin, Phone, Mail, Download, Eye,
  TrendingUp, AlertCircle, CheckCircle
} from 'lucide-react';

const PatientDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'health-history', label: 'Health History', icon: FileText },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'prescriptions', label: 'Prescriptions', icon: Pill },
    { id: 'insurance', label: 'Insurance', icon: CreditCard },
    { id: 'schemes', label: 'Health Schemes', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const recentActivities = [
    { date: '2025-01-15', type: 'Consultation', doctor: 'Dr. Sarah Smith', hospital: 'City Hospital', status: 'completed' },
    { date: '2025-01-10', type: 'Lab Test', test: 'Blood Sugar Test', hospital: 'Metro Lab', status: 'completed' },
    { date: '2025-01-05', type: 'Prescription', doctor: 'Dr. John Doe', medication: 'Metformin 500mg', status: 'active' },
    { date: '2024-12-28', type: 'Insurance Claim', amount: '₹15,000', insurer: 'Star Health', status: 'approved' },
  ];

  const upcomingAppointments = [
    { date: '2025-01-20', time: '10:00 AM', doctor: 'Dr. Priya Sharma', specialty: 'Cardiology', hospital: 'Apollo Hospital' },
    { date: '2025-01-25', time: '02:30 PM', doctor: 'Dr. Rajesh Kumar', specialty: 'General Medicine', hospital: 'City Hospital' },
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', trend: 'stable' },
    { label: 'Blood Sugar', value: '95', unit: 'mg/dL', status: 'normal', trend: 'down' },
    { label: 'Weight', value: '70', unit: 'kg', status: 'normal', trend: 'stable' },
    { label: 'BMI', value: '22.5', unit: '', status: 'normal', trend: 'stable' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {user?.name}!</h2>
        <p className="text-blue-100 mb-4">Your health is our priority. Here's your latest health summary.</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">Your UHID: {user?.uhid}</span>
          </div>
          <p className="text-sm text-blue-100">This is your lifetime health identifier</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 rounded-lg p-3">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">3</span>
          </div>
          <h3 className="font-semibold text-gray-900">Upcoming Appointments</h3>
          <p className="text-sm text-gray-600">Next: Jan 20, 10:00 AM</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 rounded-lg p-3">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">12</span>
          </div>
          <h3 className="font-semibold text-gray-900">Health Records</h3>
          <p className="text-sm text-gray-600">Last updated: Jan 15</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 rounded-lg p-3">
              <Pill className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <h3 className="font-semibold text-gray-900">Active Prescriptions</h3>
          <p className="text-sm text-gray-600">Refill due: Jan 22</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 rounded-lg p-3">
              <CreditCard className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">₹5L</span>
          </div>
          <h3 className="font-semibold text-gray-900">Insurance Coverage</h3>
          <p className="text-sm text-gray-600">Available balance</p>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Health Metrics</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {healthMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center space-x-1 mb-2 ${
                metric.status === 'normal' ? 'text-green-600' : 'text-red-600'
              }`}>
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="text-sm">{metric.unit}</span>
                {metric.trend === 'up' && <TrendingUp className="h-4 w-4" />}
                {metric.trend === 'down' && <TrendingUp className="h-4 w-4 transform rotate-180" />}
              </div>
              <p className="text-sm font-medium text-gray-900">{metric.label}</p>
              <p className={`text-xs ${
                metric.status === 'normal' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.status}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities & Upcoming Appointments */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'completed' ? 'bg-green-500' :
                  activity.status === 'active' ? 'bg-blue-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.type}</p>
                  <p className="text-sm text-gray-600">
                    {activity.doctor && `Dr: ${activity.doctor}`}
                    {activity.test && `Test: ${activity.test}`}
                    {activity.medication && `Med: ${activity.medication}`}
                    {activity.amount && `Amount: ${activity.amount}`}
                  </p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Appointments</h3>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                  <span className="text-sm text-blue-600">{appointment.specialty}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{appointment.hospital}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{appointment.date}</span>
                  <span>{appointment.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderHealthHistory = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Complete Health History</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Report</span>
          </button>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {[
            {
              date: '2025-01-15',
              type: 'Consultation',
              title: 'Cardiology Consultation',
              doctor: 'Dr. Sarah Smith',
              hospital: 'City Hospital',
              details: 'Regular checkup, blood pressure monitoring, ECG normal',
              files: ['ECG Report.pdf', 'Consultation Notes.pdf']
            },
            {
              date: '2025-01-10',
              type: 'Lab Test',
              title: 'Comprehensive Blood Panel',
              hospital: 'Metro Lab',
              details: 'Blood sugar: 95 mg/dL, Cholesterol: 180 mg/dL, All values normal',
              files: ['Blood Test Report.pdf']
            },
            {
              date: '2024-12-28',
              type: 'Surgery',
              title: 'Appendectomy',
              doctor: 'Dr. Rajesh Kumar',
              hospital: 'Apollo Hospital',
              details: 'Laparoscopic appendectomy, successful procedure, no complications',
              files: ['Surgery Report.pdf', 'Discharge Summary.pdf', 'Post-op Instructions.pdf']
            }
          ].map((record, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{record.title}</h4>
                    <p className="text-sm text-gray-600">{record.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    record.type === 'Consultation' ? 'bg-blue-100 text-blue-800' :
                    record.type === 'Lab Test' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {record.type}
                  </span>
                </div>
                
                {record.doctor && (
                  <p className="text-sm text-gray-600 mb-2">Doctor: {record.doctor}</p>
                )}
                {record.hospital && (
                  <p className="text-sm text-gray-600 mb-2">Hospital: {record.hospital}</p>
                )}
                
                <p className="text-gray-700 mb-4">{record.details}</p>
                
                {record.files && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Attached Files:</p>
                    {record.files.map((file, fileIndex) => (
                      <div key={fileIndex} className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">{file}</span>
                        <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                      </div>
                    ))}
                  </div>
                )}
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
      case 'health-history':
        return renderHealthHistory();
      case 'appointments':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Appointments</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Upcoming Appointments</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">You have 2 upcoming appointments this week</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Recent Visits</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Last visit: Jan 15, 2025 - Dr. Sarah Smith</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Schedule New Appointment</h4>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        );
      case 'prescriptions':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Prescriptions</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Active Prescriptions</h4>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">2</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Refills Due</h4>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">1</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Total Medications</h4>
                  <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">5</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Current Medications</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">Metformin 500mg</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">2x daily</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">Lisinopril 10mg</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">1x daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'insurance':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Insurance</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Current Policy</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Provider</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Star Health Insurance</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Coverage</p>
                    <p className="font-semibold text-gray-900 dark:text-white">₹5,00,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Policy Number</p>
                    <p className="font-semibold text-gray-900 dark:text-white">POL123456789</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expires</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Dec 31, 2025</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  File New Claim
                </button>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  View Claims History
                </button>
              </div>
            </div>
          </div>
        );
      case 'schemes':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Health Schemes</h3>
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Eligible Schemes</h4>
                <p className="text-green-700 dark:text-green-300 text-sm">You are eligible for 3 government health schemes</p>
              </div>
              <div className="space-y-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Ayushman Bharat</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Coverage up to ₹5 lakh per family</p>
                  <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Apply Now</button>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white">State Health Scheme</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Additional coverage for state residents</p>
                  <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">Learn More</button>
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
                  <User className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">UHID: {user?.uhid}</p>
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    value={user?.phone || ''} 
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Privacy Settings</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Allow doctors to access my health history</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Share data with insurance providers</span>
                  </label>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Notifications</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Appointment reminders</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Health scheme updates</span>
                  </label>
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
              <Heart className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Patient Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Welcome, {user?.name}</p>
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
                  <User className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{user?.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">UHID: {user?.uhid}</p>
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

export default PatientDashboard;