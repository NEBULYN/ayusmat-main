import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  CreditCard, User, FileText, TrendingUp, Users, 
  Bell, Settings, LogOut, Activity, Search,
  DollarSign, Clock, CheckCircle, AlertTriangle,
  Plus, Eye, Download, Filter, Shield
} from 'lucide-react';

const InsuranceDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'policies', label: 'Policy Management', icon: Shield },
    { id: 'customers', label: 'Customer Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'fraud', label: 'Fraud Detection', icon: AlertTriangle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const claimsData = [
    {
      claimId: 'CLM2025001234',
      patientName: 'Rajesh Kumar',
      uhid: 'UHID123456789',
      policyNumber: 'POL789456123',
      hospital: 'City Hospital',
      claimAmount: 45000,
      approvedAmount: 42000,
      dateSubmitted: '2025-01-14',
      status: 'approved',
      treatment: 'Cardiac catheterization',
      documents: ['Medical reports', 'Bills', 'Discharge summary']
    },
    {
      claimId: 'CLM2025001235',
      patientName: 'Priya Sharma',
      uhid: 'UHID987654321',
      policyNumber: 'POL456789012',
      hospital: 'Apollo Hospital',
      claimAmount: 125000,
      approvedAmount: 0,
      dateSubmitted: '2025-01-15',
      status: 'under-review',
      treatment: 'Maternity - C-section',
      documents: ['Medical reports', 'Bills', 'Pre-auth']
    },
    {
      claimId: 'CLM2025001236',
      patientName: 'Amit Singh',
      uhid: 'UHID456789123',
      policyNumber: 'POL123456789',
      hospital: 'Metro Hospital',
      claimAmount: 85000,
      approvedAmount: 0,
      dateSubmitted: '2025-01-15',
      status: 'pending-documents',
      treatment: 'Orthopedic surgery',
      documents: ['Medical reports', 'Bills']
    }
  ];

  const filteredClaims = claimsData.filter(claim =>
    claim.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    claim.claimId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    claim.uhid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    claim.hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalClaims: 1247,
    pendingClaims: 89,
    approvedClaims: 1098,
    rejectedClaims: 60,
    totalClaimValue: 15600000,
    approvedValue: 14200000,
    avgProcessingTime: 3.2,
    fraudDetected: 12
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Insurance Dashboard</h2>
        <p className="text-blue-100 mb-4">Manage claims, policies, and customer relationships efficiently</p>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <CreditCard className="h-5 w-5" />
            <span className="font-semibold">{user?.insuranceCompany}</span>
          </div>
          <p className="text-sm text-blue-100">Claims Processing & Policy Management</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 rounded-lg p-3">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{stats.totalClaims}</span>
          </div>
          <h3 className="font-semibold text-gray-900">Total Claims</h3>
          <p className="text-sm text-gray-600">{stats.pendingClaims} pending review</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 rounded-lg p-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{stats.approvedClaims}</span>
          </div>
          <h3 className="font-semibold text-gray-900">Approved Claims</h3>
          <p className="text-sm text-gray-600">
            {Math.round((stats.approvedClaims / stats.totalClaims) * 100)}% approval rate
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 rounded-lg p-3">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              ₹{(stats.totalClaimValue / 10000000).toFixed(1)}Cr
            </span>
          </div>
          <h3 className="font-semibold text-gray-900">Claim Value</h3>
          <p className="text-sm text-gray-600">
            ₹{(stats.approvedValue / 10000000).toFixed(1)}Cr approved
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 rounded-lg p-3">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">{stats.avgProcessingTime}</span>
          </div>
          <h3 className="font-semibold text-gray-900">Avg Processing</h3>
          <p className="text-sm text-gray-600">Days per claim</p>
        </div>
      </div>

      {/* Claims Status Overview */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Claims by Status</h3>
          <div className="space-y-4">
            {[
              { status: 'Pending Review', count: 89, color: 'orange' },
              { status: 'Under Investigation', count: 23, color: 'blue' },
              { status: 'Approved', count: 156, color: 'green' },
              { status: 'Rejected', count: 12, color: 'red' },
              { status: 'Pending Documents', count: 34, color: 'yellow' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                  <span className="font-medium text-gray-900">{item.status}</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Claim approved', details: 'CLM2025001234 - ₹42,000', time: '2 hours ago', type: 'approved' },
              { action: 'New claim submitted', details: 'CLM2025001235 - ₹125,000', time: '4 hours ago', type: 'new' },
              { action: 'Fraud detected', details: 'CLM2025001230 - Flagged for review', time: '6 hours ago', type: 'fraud' },
              { action: 'Policy renewed', details: 'POL789456123 - Rajesh Kumar', time: '1 day ago', type: 'policy' },
              { action: 'Claim rejected', details: 'CLM2025001228 - Insufficient docs', time: '1 day ago', type: 'rejected' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'approved' ? 'bg-green-500' :
                  activity.type === 'new' ? 'bg-blue-500' :
                  activity.type === 'fraud' ? 'bg-red-500' :
                  activity.type === 'policy' ? 'bg-purple-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderClaims = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Claims Management</h3>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Claim</span>
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
              placeholder="Search claims by patient name, claim ID, UHID, or hospital..."
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

        {/* Claims List */}
        <div className="space-y-4">
          {filteredClaims.map((claim, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{claim.patientName}</h4>
                  <p className="text-sm text-gray-600">Claim ID: {claim.claimId}</p>
                  <p className="text-sm text-gray-600">UHID: {claim.uhid}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    claim.status === 'approved' ? 'bg-green-100 text-green-800' :
                    claim.status === 'under-review' ? 'bg-blue-100 text-blue-800' :
                    claim.status === 'pending-documents' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {claim.status.replace('-', ' ')}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Submitted: {claim.dateSubmitted}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Hospital:</p>
                  <p className="text-sm text-gray-600">{claim.hospital}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Treatment:</p>
                  <p className="text-sm text-gray-600">{claim.treatment}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Policy Number:</p>
                  <p className="text-sm text-gray-600">{claim.policyNumber}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Claim Amount:</p>
                  <p className="text-lg font-bold text-gray-900">₹{claim.claimAmount.toLocaleString()}</p>
                </div>
                {claim.approvedAmount > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700">Approved Amount:</p>
                    <p className="text-lg font-bold text-green-600">₹{claim.approvedAmount.toLocaleString()}</p>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Documents:</p>
                <div className="flex flex-wrap gap-2">
                  {claim.documents.map((doc, docIndex) => (
                    <span key={docIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center space-x-1 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                {claim.status === 'under-review' && (
                  <>
                    <button className="flex items-center space-x-1 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                      <CheckCircle className="h-4 w-4" />
                      <span>Approve</span>
                    </button>
                    <button className="flex items-center space-x-1 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Reject</span>
                    </button>
                  </>
                )}
                {claim.status === 'pending-documents' && (
                  <button className="flex items-center space-x-1 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                    <FileText className="h-4 w-4" />
                    <span>Request Documents</span>
                  </button>
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
      case 'policies':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Policy Management</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Active Policies</h4>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12,456</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">New This Month</h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">234</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Renewals Due</h4>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">89</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Premium Collected</h4>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">₹2.3Cr</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Policy Actions</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Create New Policy
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Bulk Renewals
                  </button>
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    Policy Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Customer Management</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Total Customers</h4>
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">45,678</p>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-2">Active Policies</h4>
                  <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">38,234</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Customer Satisfaction</h4>
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">4.6/5</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Customer Segments</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">Individual Policies</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">28,456 customers</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">Family Floater</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">12,234 families</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="text-gray-900 dark:text-white">Corporate Policies</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">4,988 employees</span>
                  </div>
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
                  <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-2">Claim Ratio</h4>
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">68%</p>
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">Avg. Settlement Time</h4>
                  <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">3.2 days</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Customer Retention</h4>
                  <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">92%</p>
                </div>
                <div className="bg-lime-50 dark:bg-lime-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-lime-900 dark:text-lime-100 mb-2">Revenue Growth</h4>
                  <p className="text-2xl font-bold text-lime-600 dark:text-lime-400">+15%</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Performance Indicators</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Policy Conversion Rate</span>
                    <span className="font-semibold text-gray-900 dark:text-white">23.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Average Premium per Policy</span>
                    <span className="font-semibold text-gray-900 dark:text-white">₹18,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">Fraud Detection Rate</span>
                    <span className="font-semibold text-gray-900 dark:text-white">2.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'fraud':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Fraud Detection</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Flagged Claims</h4>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">23</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Under Investigation</h4>
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">8</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Fraud Prevented</h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">₹12.5L</p>
                </div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Fraud Alerts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded">
                    <div>
                      <p className="font-medium text-red-900 dark:text-red-100">Suspicious Claim Pattern</p>
                      <p className="text-sm text-red-700 dark:text-red-300">Multiple claims from same provider</p>
                    </div>
                    <span className="text-sm text-red-600 dark:text-red-400">High Risk</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                    <div>
                      <p className="font-medium text-yellow-900 dark:text-yellow-100">Duplicate Medical Records</p>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">Same treatment claimed twice</p>
                    </div>
                    <span className="text-sm text-yellow-600 dark:text-yellow-400">Medium Risk</span>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      value={user?.insuranceCompany || ''} 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">License Number</label>
                    <input 
                      type="text" 
                      value="INS123456789" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">System Preferences</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Auto-approve low-risk claims</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" defaultChecked />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Enable fraud detection alerts</span>
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
              <CreditCard className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Insurance Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user?.insuranceCompany} - {user?.name}</p>
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
                  <CreditCard className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{user?.insuranceCompany}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Insurance Provider</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{user?.name}</p>
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

export default InsuranceDashboard;