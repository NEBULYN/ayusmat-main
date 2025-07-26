import React from 'react';
import { Car as IdCard, FileText, Building2, CreditCard, MapPin, AlertTriangle, Lock, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: IdCard,
      title: "Lifelong UHID",
      description: "Every citizen gets a single health ID for all hospitals and doctors. No repeated registration or lost records ever.",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Complete Digital Health Records",
      description: "All medical history, prescriptions, tests, allergies, and treatments stored and updated under your UHID.",
      color: "green"
    },
    {
      icon: Building2,
      title: "Hospital & Clinic Integration",
      description: "Mandatory for all public and private hospitals. Healthcare providers update patient records efficiently.",
      color: "purple"
    },
    {
      icon: CreditCard,
      title: "Insurance & Claims",
      description: "Buy health insurance, compare plans, and submit claims digitally with instant access for insurers.",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "Rural Health Scheme Discovery",
      description: "Personalized alerts for government and private health schemes based on your UHID and location.",
      color: "teal"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Care",
      description: "Doctors instantly access life-saving details like allergies and critical history during emergencies.",
      color: "red"
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Blockchain-backed, consent-based access with full HIPAA and GDPR compliance for data protection.",
      color: "indigo"
    },
    {
      icon: Smartphone,
      title: "Accessibility",
      description: "Mobile and web apps with multi-language support and rural-friendly offline features for everyone.",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600",
      orange: "bg-orange-50 text-orange-600",
      teal: "bg-teal-50 text-teal-600",
      red: "bg-red-50 text-red-600",
      indigo: "bg-indigo-50 text-indigo-600",
      pink: "bg-pink-50 text-pink-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Key Features That Transform Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our comprehensive digital ecosystem 
            designed for patients, providers, insurers, and government agencies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;