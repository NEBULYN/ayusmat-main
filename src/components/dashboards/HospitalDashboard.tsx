import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Building2, User, Calendar, FileText, Users, 
  Bell, Settings, LogOut, Activity, Search,
  Bed, UserCheck, Clock, TrendingUp, AlertCircle,
  Plus, Eye, Edit, Download, Filter
} from 'lucide-react';

const HospitalDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'admissions', label: 'Admissions', icon: Bed },
    { id: 'staff', label: 'Staff Management', icon: UserCheck },
    { id: 'records', label: 'Medical Records', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const hospitalStats = {
    totalBeds: 250,
    occupiedBeds: 187,
    availableBeds: 63,
    totalPatients: 342,
    admissionsToday: 12,
    dischargesScheduled: 8,
    emergencyCases: 5,
    staffOnDuty: 89
  };

  const recentAdmissions = [
    {
      patientName: 'Rajesh Kumar',
      uhid: 'UHID123456789',
      age: 45,
      admissionTime: '2025-01-15 08:30 AM',
      department: 'Cardiology',
      doctor: 'Dr. Sarah Smith',
      condition: 'Chest pain, suspected MI',
      status: 'admitted',
      bedNumber: 'ICU-12'
    },
    {
      patientName: 'Priya Sharma',
      uhid: 'UHID987654321',
      age: 32,
      admissionTime: '2025-01-15 10:15 AM',
      department: 'Obstetrics',
      doctor: 'Dr. Meera Gupta',
      condition: 'Labor - 38 weeks',
      status: 'in-labor',
      bedNumber: 'MAT-05'
    },
    {
      patientName: 'Amit Singh',
      uhid: 'UHID456789123',
      age: 28,
      admissionTime: '2025-01-15 02:45 PM',
      department: 'Emergency',
      doctor: 'Dr. Rajesh Kumar',
      condition: 'Road traffic accident',
      status: 'critical',
      bedNumber: 'ER-03'
    }
  ];

  const patientsList = [
    {
      name: 'Sunita Devi',
      uhid: 'UHID789123456',
      age: 55,
      gender: 'Female',
      admissionDate: '2025-01-10',
      department: 'Internal Medicine',
      doctor: 'Dr. Priya Sharma',
      condition: 'Diabetes complications',
      status: 'stable',
      bedNumber: 'GW-201',
      insurance: 'Ayushman Bharat'
    },
    {
      name: 'Vikram Patel',
      uhid: 'UHID321654987',
      age: 38,
      gender: 'Male',
      admissionDate: '2025-01-12',
      department: 'Cardiology',
      doctor: 'Dr. Sarah Smith',
      condition: 'Post-angioplasty',
      status: 'recovering',
      bedNumber: 'CCU-08',
      insurance: 'Star Health'
    },
    {
      name: 'Meera Gupta',
      uhid: 'UHID654321789',
      age: 42,
      gender: 'Female',
      admissionDate: '2025-01-14',
      department: 'Orthopedics',
      doctor: 'Dr. Amit Kumar',
      condition: 'Hip fracture surgery',
      status: 'post-op',
      bedNumber: 'OR-15',
      insurance: 'HDFC ERGO'
    }
  ];

  const filteredPatients = patientsList.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.uhid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">City Hospital Dashboard</h2>
        <p className="text-blue-100 mb-4">Real-time hospital operations and patient management</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Building2 className="h-5 w-5" />
            <span className="font-semibold">Hospital ID: {user?.hospitalId}</span>
          </div>
          <p className="text-sm text-blue-100">Multi-specialty tertiary care hospital</p>
        </div>
      </div>

      {/* Hospital Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 rounded-lg p-3">
              <Bed className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{hospitalStats.occupiedBeds}</div>
              <div className="text-sm text-gray-500">/ {hospitalStats.totalBeds}</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900">Bed Occupancy</h3>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${(hospitalStats.occupiedBeds / hospitalStats.totalBeds) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {Math.round((hospitalStats.occupiedBeds / hospitalStats.totalBeds) * 100)}% occupied
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 rounded-lg p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{hospitalStats.totalPatients}</span>
          </div>
          <h3 className="font-semibold text-gray-900">Total Patients</h3>
          <p className="text-sm text-gray-600">Active in system</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 rounded-lg p-3">
              <UserCheck className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{hospitalStats.admissionsToday}</span>
          </div>
          <h3 className="font-semibold text-gray-900">Today's Admissions</h3>
          <p className="text-sm text-gray-600">{hospitalStats.dischargesScheduled} discharges scheduled</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-red-100 rounded-lg p-3">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{hospitalStats.emergencyCases}</span>
          </div>
          <h3 className="font-semibold text-gray-900">Emergency Cases</h3>
          <p className="text-sm text-gray-600">Requiring immediate attention</p>
        </div>
      </div>

      {/* Department Status */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Department Status</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Emergency', patients: 15, capacity: 20, status: 'normal' },
            { name: 'ICU', patients: 18, capacity: 20, status: 'high' },
            { name: 'General Ward', patients: 85, capacity: 100, status: 'normal' },
            { name: 'Cardiology', patients: 25, capacity: 30, status: 'normal' },
            { name: 'Orthopedics', patients: 22, capacity: 25, status: 'high' },
            { name: 'Pediatrics', patients: 12, capacity: 20, status: 'low' }
          ].map((dept, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  dept.status === 'high' ? 'bg-red-100 text-red-800' :
                  dept.status === 'normal' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {dept.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{dept.patients} / {dept.capacity} patients</span>
                <span>{Math.round((dept.patients / dept.capacity) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className={`h-2 rounded-full ${
                    dept.status === 'high' ? 'bg-red-500' :
                    dept.status === 'normal' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${(dept.patients / dept.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Admissions */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Recent Admissions</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {recentAdmissions.map((admission, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{admission.patientName}</h4>
                  <p className="text-sm text-gray-600">UHID: {admission.uhid} | Age: {admission.age}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    admission.status === 'critical' ? 'bg-red-100 text-red-800' :
                    admission.status === 'in-labor' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {admission.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">Bed: {admission.bedNumber}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Department: {admission.department}</p>
                  <p className="text-gray-600">Doctor: {admission.doctor}</p>
                </div>
                <div>
                  <p className="text-gray-600">Condition: {admission.condition}</p>
                  <p className="text-gray-600">Admitted: {admission.admissionTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Patient Management</h3>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Admit Patient</span>
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients by name, UHID, condition, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filters</span>
          </button>
        </div>

        {/* Patients List */}
        <div className="space-y-4">
          {filteredPatients.map((patient, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
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
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    patient.status === 'critical' ? 'bg-red-100 text-red-800' :
                    patient.status === 'stable' ? 'bg-green-100 text-green-800' :
                    patient.status === 'recovering' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {patient.status}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Bed: {patient.bedNumber}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Department:</p>
                  <p className="text-sm text-gray-600">{patient.department}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Attending Doctor:</p>
                  <p className="text-sm text-gray-600">{patient.doctor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Insurance:</p>
                  <p className="text-sm text-gray-600">{patient.insurance}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700">Condition:</p>
                <p className="text-sm text-gray-600">{patient.condition}</p>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center space-x-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>View Records</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <Edit className="h-4 w-4" />
                  <span>Update</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                  <FileText className="h-4 w-4" />
                  <span>Discharge</span>
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
      case 'admissions':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Admissions</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Today's Admissions</h4>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Discharges</h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">8</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Emergency</h4>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">5</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">ICU Patients</h4>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">18</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    New Admission
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Process Discharge
                  </button>
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    Transfer Patient
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'staff':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Staff Management</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Total Staff</h4>
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">245</p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">On Duty</h4>
                  <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">189</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Doctors</h4>
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">45</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Department Staffing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">Emergency Department</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">25/30 staff</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">ICU</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">18/20 staff</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">General Ward</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">35/40 staff</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'records':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Medical Records</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Digital Records</h4>
                  <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">98.5%</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Records Updated Today</h4>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">156</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Record Management</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Search Records
                  </button>
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    Generate Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Analytics</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Patient Satisfaction</h4>
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">4.8/5</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">Avg. Stay Duration</h4>
                  <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">3.2 days</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Readmission Rate</h4>
                  <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">2.1%</p>
                </div>
                <div className="bg-lime-50 dark:bg-lime-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-lime-900 dark:text-lime-100 mb-2">Revenue Growth</h4>
                  <p className="text-2xl font-bold text-lime-600 dark:text-lime-400">+12%</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Emergency Response Time</span>
                    <span className="font-semibold text-gray-900 dark:text-white">8.5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Surgery Success Rate</span>
                    <span className="font-semibold text-gray-900 dark:text-white">97.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Bed Utilization</span>
                    <span className="font-semibold text-gray-900 dark:text-white">85.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Settings</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Hospital Configuration</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hospital Name</label>
                    <input 
                      type="text" 
                      value="City Hospital" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total Beds</label>
                    <input 
                      type="number" 
                      value="250" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">System Preferences</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Auto-sync with AyuSmat network</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Enable real-time bed tracking</span>
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
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hospital Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">City Hospital - {user?.name}</p>
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
                  <Building2 className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">City Hospital</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Multi-specialty Hospital</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">ID: {user?.hospitalId}</p>
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

export default HospitalDashboard;