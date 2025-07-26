import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Heart, Building2, Stethoscope, CreditCard, Users, 
  CheckCircle, ArrowRight, Phone, Mail, Globe,
  TrendingUp, Shield, Clock, Award
} from 'lucide-react';

const schema = yup.object({
  organizationType: yup.string().required('Organization type is required'),
  organizationName: yup.string().required('Organization name is required'),
  contactPerson: yup.string().required('Contact person name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[6-9]\d{9}$/, 'Enter valid mobile number').required('Phone number is required'),
  designation: yup.string().required('Designation is required'),
  location: yup.string().required('Location is required'),
  employeeCount: yup.string().required('Employee count is required'),
  currentSystems: yup.string().required('Current systems information is required'),
  integrationNeeds: yup.string().required('Integration needs are required'),
  timeline: yup.string().required('Implementation timeline is required'),
  message: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

const PartnerWithUs = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const selectedOrgType = watch('organizationType');

  const onSubmit = (data: FormData) => {
    console.log('Partnership form submitted:', data);
    setSubmitted(true);
  };

  const partnerTypes = [
    {
      value: 'hospital',
      label: 'Hospital / Healthcare Provider',
      icon: Building2,
      description: 'Hospitals, clinics, diagnostic centers',
      benefits: ['Streamlined patient management', 'Reduced paperwork', 'Faster insurance claims', 'Better patient outcomes']
    },
    {
      value: 'doctor',
      label: 'Individual Doctor / Practitioner',
      icon: Stethoscope,
      description: 'Private practitioners, specialists',
      benefits: ['Complete patient history access', 'Efficient consultation', 'Digital prescriptions', 'Telemedicine support']
    },
    {
      value: 'insurance',
      label: 'Insurance Company',
      icon: CreditCard,
      description: 'Health insurance providers, TPAs',
      benefits: ['Faster claim processing', 'Reduced fraud', 'Better risk assessment', 'Digital policy management']
    },
    {
      value: 'government',
      label: 'Government / NGO',
      icon: Users,
      description: 'Government agencies, NGOs, health missions',
      benefits: ['Population health insights', 'Scheme management', 'Rural health outreach', 'Data-driven policies']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Reduce administrative overhead by up to 60% with automated processes'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Blockchain-based security with HIPAA and GDPR compliance'
    },
    {
      icon: Clock,
      title: 'Faster Processing',
      description: 'Process insurance claims 10x faster with verified health data'
    },
    {
      icon: Award,
      title: 'Better Outcomes',
      description: 'Improve patient outcomes with comprehensive health history'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Partner Hospitals' },
    { number: '50+', label: 'Insurance Partners' },
    { number: '10M+', label: 'Patients Served' },
    { number: '95%', label: 'Partner Satisfaction' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h2>
          <p className="text-gray-600 mb-6">
            We've received your partnership request. Our team will review your information and contact you within 24-48 hours.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Another Request
            </button>
            <button className="w-full border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Schedule a Demo Call
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Partner with AyuSmat</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join India's largest digital healthcare ecosystem. Transform your healthcare operations 
            with seamless integration and enhanced patient care.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Partner with AyuSmat?</h2>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Partner Types */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Partnership Opportunities</h3>
              <div className="space-y-4">
                {partnerTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div key={type.value} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-start space-x-3">
                        <Icon className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{type.label}</h4>
                          <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {type.benefits.slice(0, 2).map((benefit, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Partnership Journey</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Organization Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Organization Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {partnerTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <label key={type.value} className="relative">
                        <input
                          type="radio"
                          value={type.value}
                          {...register('organizationType')}
                          className="sr-only"
                        />
                        <div className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedOrgType === type.value 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="text-center">
                            <Icon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                            <div className="text-sm font-medium text-gray-900">{type.label}</div>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
                {errors.organizationType && (
                  <p className="mt-1 text-sm text-red-600">{errors.organizationType.message}</p>
                )}
              </div>

              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    {...register('organizationName')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter organization name"
                  />
                  {errors.organizationName && (
                    <p className="mt-1 text-sm text-red-600">{errors.organizationName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    {...register('contactPerson')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter contact person name"
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Designation *
                  </label>
                  <input
                    {...register('designation')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your designation"
                  />
                  {errors.designation && (
                    <p className="mt-1 text-sm text-red-600">{errors.designation.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    {...register('location')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, State"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Size *
                </label>
                <select
                  {...register('employeeCount')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select organization size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
                {errors.employeeCount && (
                  <p className="mt-1 text-sm text-red-600">{errors.employeeCount.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Systems *
                </label>
                <textarea
                  {...register('currentSystems')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your current healthcare management systems"
                />
                {errors.currentSystems && (
                  <p className="mt-1 text-sm text-red-600">{errors.currentSystems.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Integration Needs *
                </label>
                <textarea
                  {...register('integrationNeeds')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What specific integrations or features are you looking for?"
                />
                {errors.integrationNeeds && (
                  <p className="mt-1 text-sm text-red-600">{errors.integrationNeeds.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeline *
                </label>
                <select
                  {...register('timeline')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (Within 1 month)</option>
                  <option value="short">Short term (1-3 months)</option>
                  <option value="medium">Medium term (3-6 months)</option>
                  <option value="long">Long term (6+ months)</option>
                </select>
                {errors.timeline && (
                  <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any additional information or questions?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit Partnership Request</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our partnership team is ready to help you integrate AyuSmat into your healthcare operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-blue-100">1800-123-PARTNER</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-blue-100">partners@ayusmat.gov.in</p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Schedule Demo</h4>
              <p className="text-blue-100">Book a personalized demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;