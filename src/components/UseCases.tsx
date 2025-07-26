import React from 'react';
import { User, Stethoscope, Building2, Shield } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: User,
      title: "For Patients",
      subtitle: "Urban & Rural",
      benefits: [
        "One health ID for life - no more lost records",
        "Instant access to health history anywhere",
        "Compare and buy insurance directly",
        "Get notified about eligible health schemes",
        "Emergency care with immediate medical history"
      ],
      color: "blue",
      image: "👨‍👩‍👧‍👦"
    },
    {
      icon: Stethoscope,
      title: "For Doctors & Hospitals",
      subtitle: "Healthcare Providers",
      benefits: [
        "Instant access to complete patient history",
        "Reduced paperwork and administrative tasks",
        "Better diagnosis with comprehensive data",
        "Streamlined billing and insurance claims",
        "Real-time updates across all systems"
      ],
      color: "green",
      image: "🏥"
    },
    {
      icon: Building2,
      title: "For Insurance Companies",
      subtitle: "Insurers & TPAs",
      benefits: [
        "Rapid and secure claim processing",
        "Reduced fraud with verified health data",
        "Better risk assessment capabilities",
        "Direct policy sales through platform",
        "Real-time claim status updates"
      ],
      color: "purple",
      image: "🏢"
    },
    {
      icon: Shield,
      title: "For Government",
      subtitle: "Policy Makers",
      benefits: [
        "Real-time healthcare data for policy decisions",
        "Targeted health scheme implementations",
        "Population health analytics and insights",
        "Efficient resource allocation",
        "Better healthcare outcome tracking"
      ],
      color: "orange",
      image: "🏛️"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transforming Healthcare for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how AyuSmat benefits patients, healthcare providers, insurers, and government agencies
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-${useCase.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-7 w-7 text-${useCase.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {useCase.subtitle}
                    </p>
                  </div>
                  <div className="text-4xl">{useCase.image}</div>
                </div>

                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${useCase.color}-500 mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-700 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className={`text-${useCase.color}-600 font-semibold hover:text-${useCase.color}-700 transition-colors flex items-center space-x-2`}>
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join the Healthcare Revolution?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you're a patient, healthcare provider, insurer, or government agency, 
            AyuSmat has solutions tailored for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;