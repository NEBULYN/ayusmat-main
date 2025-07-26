import React from 'react';
import { ArrowRight, Users, Building2, MapPin, Phone, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Start Your Digital Healthcare Journey Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join millions of Indians who are already experiencing seamless healthcare with AyuSmat
          </p>
        </div>

        {/* Three-Column CTA */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* For Individuals */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Individuals & Families</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Get your lifetime health ID and start building your digital health records today.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <span>Get Your Health ID Today</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="w-full border-2 border-green-600 text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Discover Health Schemes
              </button>
            </div>
          </div>

          {/* For Organizations */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Hospitals & Insurers</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Partner with AyuSmat to streamline operations and improve patient care.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <span>Partner With AyuSmat</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* For Rural Communities */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Rural Communities</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Access health schemes and services designed specifically for rural India.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2">
                <span>Find Schemes in Your Area</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="w-full border-2 border-purple-600 text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Get Help in Hindi
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Getting Started?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you navigate AyuSmat and answer any questions you may have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Helpline: 1800-123-AYUS (2987)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Email: support@ayusmat.gov.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Available in 22 Indian languages</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Registration</h4>
                <p className="text-sm text-gray-600 mb-4">Start with just your mobile number</p>
                <div className="flex space-x-2">
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Start
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We'll send you a verification code to begin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}