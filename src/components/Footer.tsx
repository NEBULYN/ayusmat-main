import React from 'react';
import { Heart, Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AyuSmat</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming healthcare in India with lifetime health IDs, making quality healthcare 
              accessible to every citizen from villages to cities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#for-patients" className="text-gray-300 hover:text-white transition-colors">For Patients</a></li>
              <li><a href="#for-hospitals" className="text-gray-300 hover:text-white transition-colors">For Hospitals</a></li>
              <li><a href="#rural-health" className="text-gray-300 hover:text-white transition-colors">Rural Health</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="text-gray-300 hover:text-white transition-colors">Data Security</a></li>
              <li><a href="#accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Helpline</p>
                  <p className="text-gray-300">1800-123-AYUS (2987)</p>
                  <p className="text-gray-400 text-xs">24/7 Support in 22 languages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">support@ayusmat.gov.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300">Ministry of Health & Family Welfare<br />Nirman Bhavan, New Delhi - 110011</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Language Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="h-5 w-5 text-blue-400" />
            <span className="font-semibold">Available Languages</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-300">
            <span>हिंदी (Hindi)</span>
            <span>English</span>
            <span>বাংলা (Bengali)</span>
            <span>தமிழ் (Tamil)</span>
            <span>తెలుగు (Telugu)</span>
            <span>ગુજરાતી (Gujarati)</span>
            <span>ಕನ್ನಡ (Kannada)</span>
            <span>മലയാളം (Malayalam)</span>
            <span>ਪੰਜਾਬੀ (Punjabi)</span>
            <span>ଓଡ଼ିଆ (Odia)</span>
            <span>मराठी (Marathi)</span>
            <span>অসমীয়া (Assamese)</span>
          </div>
        </div>

        {/* Government Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="font-semibold mb-4">Government Partnerships</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Ayushman Bharat</a>
            <a href="#" className="hover:text-white transition-colors">National Health Mission</a>
            <a href="#" className="hover:text-white transition-colors">Digital India</a>
            <a href="#" className="hover:text-white transition-colors">PMJAY</a>
            <a href="#" className="hover:text-white transition-colors">eHealth</a>
            <a href="#" className="hover:text-white transition-colors">Telemedicine</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 AyuSmat. A Government of India Initiative. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>🔒 SSL Secured</span>
            <span>🏛️ Government Verified</span>
            <span>🌐 ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;