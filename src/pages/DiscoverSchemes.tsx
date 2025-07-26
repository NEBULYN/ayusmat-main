import React, { useState } from 'react';
import { Search, MapPin, Filter, Heart, Users, Baby, Folder as Elderly, Star, ArrowRight, Phone, Globe } from 'lucide-react';
import Header from '../components/Header';

const DiscoverSchemes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEligibility, setSelectedEligibility] = useState('');

  const schemes = [
    {
      id: 1,
      name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
      description: "World's largest health insurance scheme providing coverage up to ₹5 lakh per family per year",
      coverage: "₹5,00,000",
      category: "Government",
      eligibility: "BPL families, rural & urban poor",
      states: ["All States"],
      benefits: ["Cashless treatment", "Pre & post hospitalization", "Day care procedures", "Emergency care"],
      rating: 4.8,
      enrolledFamilies: "12 Crore+",
      color: "blue"
    },
    {
      id: 2,
      name: "Rashtriya Swasthya Bima Yojana (RSBY)",
      description: "Health insurance scheme for Below Poverty Line (BPL) families in the unorganized sector",
      coverage: "₹30,000",
      category: "Government",
      eligibility: "BPL families",
      states: ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
      benefits: ["Smart card based", "Cashless treatment", "Pre-existing diseases covered", "Maternity benefits"],
      rating: 4.5,
      enrolledFamilies: "3.7 Crore+",
      color: "green"
    },
    {
      id: 3,
      name: "Chief Minister's Comprehensive Health Insurance Scheme",
      description: "State-specific comprehensive health insurance with enhanced coverage for critical illnesses",
      coverage: "₹4,00,000 - ₹15,00,000",
      category: "State Government",
      eligibility: "State residents, income criteria varies",
      states: ["Tamil Nadu", "Andhra Pradesh", "Telangana", "Karnataka"],
      benefits: ["Critical illness cover", "Organ transplant", "Cancer treatment", "Cardiac procedures"],
      rating: 4.6,
      enrolledFamilies: "2.5 Crore+",
      color: "purple"
    },
    {
      id: 4,
      name: "Janani Suraksha Yojana (JSY)",
      description: "Safe motherhood intervention promoting institutional delivery among poor pregnant women",
      coverage: "₹1,400 - ₹1,000",
      category: "Maternal Health",
      eligibility: "Pregnant women from BPL families",
      states: ["All States"],
      benefits: ["Cash assistance", "Free delivery", "Post-natal care", "Transport allowance"],
      rating: 4.4,
      enrolledFamilies: "1 Crore+",
      color: "pink"
    },
    {
      id: 5,
      name: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
      description: "Comprehensive antenatal care services to pregnant women on 9th of every month",
      coverage: "Free Services",
      category: "Maternal Health",
      eligibility: "All pregnant women",
      states: ["All States"],
      benefits: ["Free check-ups", "High-risk pregnancy identification", "Specialist consultation", "Referral services"],
      rating: 4.3,
      enrolledFamilies: "50 Lakh+",
      color: "orange"
    },
    {
      id: 6,
      name: "Aam Aadmi Bima Yojana (AABY)",
      description: "Life insurance scheme for rural landless households and marginalized families",
      coverage: "₹30,000",
      category: "Life Insurance",
      eligibility: "Rural landless households, marginalized families",
      states: ["All States"],
      benefits: ["Natural death benefit", "Accidental death benefit", "Disability benefit", "Scholarship for children"],
      rating: 4.2,
      enrolledFamilies: "4 Crore+",
      color: "indigo"
    }
  ];

  const categories = ["All", "Government", "State Government", "Maternal Health", "Life Insurance", "Child Health", "Senior Citizens"];
  const eligibilityOptions = ["All", "BPL families", "All citizens", "Pregnant women", "Senior citizens", "Children"];
  const states = ["All States", "Bihar", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Rajasthan"];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || selectedState === "All States" || 
                        scheme.states.includes(selectedState) || scheme.states.includes("All States");
    const matchesCategory = !selectedCategory || selectedCategory === "All" || scheme.category === selectedCategory;
    const matchesEligibility = !selectedEligibility || selectedEligibility === "All" || 
                              scheme.eligibility.toLowerCase().includes(selectedEligibility.toLowerCase());
    
    return matchesSearch && matchesState && matchesCategory && matchesEligibility;
  });

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      pink: "bg-pink-50 border-pink-200 text-pink-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <><Header /><div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Discover Health Schemes</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find government and private health schemes you're eligible for.
            Get personalized recommendations based on your location and profile.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schemes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            {/* State Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Eligibility Filter */}
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedEligibility}
                onChange={(e) => setSelectedEligibility(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">All Eligibility</option>
                {eligibilityOptions.slice(1).map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-sm text-gray-600">Available Schemes</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">25 Cr+</div>
            <div className="text-sm text-gray-600">Beneficiaries</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">₹15L</div>
            <div className="text-sm text-gray-600">Max Coverage</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">28</div>
            <div className="text-sm text-gray-600">States Covered</div>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="space-y-6">
          {filteredSchemes.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{scheme.name}</h3>
                        <p className="text-gray-600 mb-3">{scheme.description}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(scheme.color)}`}>
                        {scheme.category}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-sm text-blue-600 font-medium">Coverage</div>
                        <div className="text-lg font-bold text-blue-900">{scheme.coverage}</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-sm text-green-600 font-medium">Enrolled</div>
                        <div className="text-lg font-bold text-green-900">{scheme.enrolledFamilies}</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-sm text-purple-600 font-medium">Rating</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-lg font-bold text-purple-900">{scheme.rating}</span>
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3">
                        <div className="text-sm text-orange-600 font-medium">States</div>
                        <div className="text-sm font-bold text-orange-900">
                          {scheme.states.length > 1 ? `${scheme.states.length} States` : scheme.states[0]}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Eligibility:</div>
                      <div className="text-sm text-gray-600">{scheme.eligibility}</div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-2">Key Benefits:</div>
                      <div className="flex flex-wrap gap-2">
                        {scheme.benefits.map((benefit, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <span>Check Eligibility</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="flex-1 border-2 border-green-600 text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                    Learn More
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Get Help</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No schemes found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedState('');
                setSelectedCategory('');
                setSelectedEligibility('');
              } }
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Finding the Right Scheme?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experts can help you identify schemes you're eligible for and guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call 1800-123-AYUS</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Get Help in Hindi</span>
            </button>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default DiscoverSchemes;