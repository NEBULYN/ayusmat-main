import React from 'react';
import { ArrowRight, UserPlus, Activity, Shield, Bell } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Generate Your UHID",
      description: "Get your unique health ID at birth, first hospital visit, or through assisted registration drives in your area.",
      color: "blue"
    },
    {
      icon: Activity,
      title: "Health Events Logged",
      description: "All doctor visits, lab tests, and hospital stays are automatically logged and visible under your UHID.",
      color: "green"
    },
    {
      icon: Shield,
      title: "Secure Access & Updates",
      description: "Hospitals and insurers access and update your records via secure consent and authentication protocols.",
      color: "purple"
    },
    {
      icon: Bell,
      title: "Personalized Notifications",
      description: "Receive alerts about available health schemes, insurance options, and important health reminders.",
      color: "orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How AyuSmat Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to transform your healthcare experience with a lifetime health ID
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center mb-4`}>
                        <Icon className={`h-8 w-8 text-${step.color}-600`} />
                      </div>
                      <div className="text-center max-w-xs">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-gray-400 mx-8" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-${step.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-6 w-6 text-${step.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Example */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Real-World Example
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rural Family Registration</h4>
              <p className="text-sm text-gray-600">A family in Bihar gets their UHID through a mobile registration drive at their local Primary Health Center.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Health Records Update</h4>
              <p className="text-sm text-gray-600">During a visit to the city hospital, their medical history is instantly available and updated in real-time.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scheme Discovery</h4>
              <p className="text-sm text-gray-600">They receive SMS alerts about new government health schemes they're eligible for based on their location and UHID.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;