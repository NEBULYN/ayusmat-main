import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Guitar as Hospital, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Seamless Healthcare,
                <span className="text-blue-600 block">One ID for a Lifetime</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                AyuSmat is a digital health ecosystem where every person gets a lifelong Unique Health ID (UHID). 
                All your health records are stored digitally and accessed securely by doctors, hospitals, insurers, and government.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-health-id" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <span>Get Your Health ID Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/discover-schemes" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Discover Health Schemes
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10M+</div>
                <div className="text-sm text-gray-600">Health IDs Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">5,000+</div>
                <div className="text-sm text-gray-600">Partner Hospitals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Insurance Partners</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Your UHID Cloud</h3>
              </div>
              
              {/* Connected Stakeholders */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Patients</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Hospital className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Hospitals</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Insurers</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Shield className="h-6 w-6 text-orange-600" />
                  <span className="text-sm font-medium text-orange-900">Government</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Secure & Private
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Rural Friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;