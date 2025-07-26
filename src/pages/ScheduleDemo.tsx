import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Calendar, Clock, Video, Users, CheckCircle, 
  ArrowRight, Monitor, Smartphone, Globe 
} from 'lucide-react';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[6-9]\d{9}$/, 'Enter valid mobile number').required('Phone number is required'),
  organization: yup.string().required('Organization name is required'),
  role: yup.string().required('Role is required'),
  organizationType: yup.string().required('Organization type is required'),
  preferredDate: yup.date().required('Preferred date is required'),
  preferredTime: yup.string().required('Preferred time is required'),
  demoType: yup.string().required('Demo type is required'),
  attendees: yup.string().required('Number of attendees is required'),
  specificInterests: yup.string(),
  questions: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

const ScheduleDemo = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const selectedDemoType = watch('demoType');

  const onSubmit = (data: FormData) => {
    console.log('Demo scheduled:', data);
    setSubmitted(true);
  };

  const demoTypes = [
    {
      value: 'overview',
      title: 'Platform Overview',
      duration: '30 minutes',
      description: 'General introduction to AyuSmat features and benefits',
      icon: Monitor,
      features: ['UHID system overview', 'Key features walkthrough', 'Integration possibilities', 'Q&A session']
    },
    {
      value: 'technical',
      title: 'Technical Deep Dive',
      duration: '45 minutes',
      description: 'Detailed technical discussion for IT teams and developers',
      icon: Globe,
      features: ['API documentation', 'Security architecture', 'Integration process', 'Technical requirements']
    },
    {
      value: 'customized',
      title: 'Customized Demo',
      duration: '60 minutes',
      description: 'Tailored demonstration based on your specific needs',
      icon: Users,
      features: ['Role-specific features', 'Use case scenarios', 'Custom workflows', 'Implementation planning']
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const organizationTypes = [
    'Hospital / Healthcare Provider',
    'Insurance Company',
    'Government Agency',
    'NGO / Non-Profit',
    'Technology Partner',
    'Other'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Demo Scheduled Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for scheduling a demo with AyuSmat. We've sent a calendar invitation to your email 
            with the meeting details and a link to join the session.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Check your email for calendar invitation</li>
              <li>• Prepare any specific questions you have</li>
              <li>• Ensure stable internet connection</li>
              <li>• Join 5 minutes before the scheduled time</li>
            </ul>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Another Demo
            </button>
            <button className="w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Video className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Schedule a Demo</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See AyuSmat in action! Book a personalized demonstration to understand how our 
            digital healthcare platform can transform your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Demo Types */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Your Demo Type</h2>
            <div className="space-y-4">
              {demoTypes.map((demo) => {
                const Icon = demo.icon;
                return (
                  <div key={demo.value} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-3 mb-4">
                      <Icon className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{demo.title}</h3>
                        <p className="text-sm text-gray-600">{demo.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{demo.description}</p>
                    <ul className="space-y-1">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="text-xs text-gray-500 flex items-center space-x-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="mt-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-4">Why Schedule a Demo?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>See real-world use cases</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Ask specific questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Understand integration process</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Get implementation timeline</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Demo Session</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter 10-digit mobile number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role *
                    </label>
                    <input
                      {...register('role')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., CTO, Medical Director"
                    />
                    {errors.role && (
                      <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                    )}
                  </div>
                </div>

                {/* Organization Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <input
                      {...register('organization')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter organization name"
                    />
                    {errors.organization && (
                      <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select
                      {...register('organizationType')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      {organizationTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.organizationType && (
                      <p className="mt-1 text-sm text-red-600">{errors.organizationType.message}</p>
                    )}
                  </div>
                </div>

                {/* Demo Preferences */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Demo Type *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {demoTypes.map((demo) => (
                      <label key={demo.value} className="relative">
                        <input
                          type="radio"
                          value={demo.value}
                          {...register('demoType')}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedDemoType === demo.value 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="text-center">
                            <div className="font-medium text-gray-900 text-sm">{demo.title}</div>
                            <div className="text-xs text-gray-500 mt-1">{demo.duration}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.demoType && (
                    <p className="mt-1 text-sm text-red-600">{errors.demoType.message}</p>
                  )}
                </div>

                {/* Scheduling */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      {...register('preferredDate')}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      {...register('preferredTime')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Attendees *
                    </label>
                    <select
                      {...register('attendees')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select attendees</option>
                      <option value="1">Just me</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="10+">More than 10</option>
                    </select>
                    {errors.attendees && (
                      <p className="mt-1 text-sm text-red-600">{errors.attendees.message}</p>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Areas of Interest
                  </label>
                  <textarea
                    {...register('specificInterests')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What specific features or use cases would you like to see?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Questions or Requirements
                  </label>
                  <textarea
                    {...register('questions')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any specific questions or requirements you'd like us to address?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-gray-600">Available Monday to Friday, 9 AM to 6 PM IST</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Video className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Online Demo</h3>
            <p className="text-sm text-gray-600">Conducted via secure video conferencing</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Multi-Device</h3>
            <p className="text-sm text-gray-600">Join from desktop, tablet, or mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;