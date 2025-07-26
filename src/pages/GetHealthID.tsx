import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Heart, User, Phone, MapPin, Calendar, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dateOfBirth: yup.date().required('Date of birth is required'),
  gender: yup.string().required('Gender is required'),
  phone: yup.string().matches(/^[6-9]\d{9}$/, 'Enter valid mobile number').required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  pincode: yup.string().matches(/^\d{6}$/, 'Enter valid pincode').required('Pincode is required'),
  state: yup.string().required('State is required'),
  district: yup.string().required('District is required'),
  emergencyContact: yup.string().matches(/^[6-9]\d{9}$/, 'Enter valid mobile number').required('Emergency contact is required'),
});

type FormData = yup.InferType<typeof schema>;

const GetHealthID = () => {
  const [step, setStep] = useState(1);
  const [generatedUHID, setGeneratedUHID] = useState('');
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    // Generate UHID
    const uhid = `UHID${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    setGeneratedUHID(uhid);
    setStep(3);
  };

  const steps = [
    { number: 1, title: 'Personal Information', icon: User },
    { number: 2, title: 'Address & Contact', icon: MapPin },
    { number: 3, title: 'UHID Generated', icon: CheckCircle },
  ];

  return (
    <><Header /><div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Get Your Health ID</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your lifetime Unique Health ID (UHID) in just a few simple steps.
            This will be your single identity for all healthcare services across India.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((stepItem, index) => {
              const Icon = stepItem.icon;
              const isActive = step >= stepItem.number;
              const isCompleted = step > stepItem.number;

              return (
                <div key={stepItem.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-500 text-white' :
                        isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`mt-2 text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                      {stepItem.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${step > stepItem.number ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <form onSubmit={handleSubmit(() => setStep(2))} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name" />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name" />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      {...register('dateOfBirth')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    {errors.dateOfBirth && (
                      <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      {...register('gender')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter 10-digit mobile number" />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
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
                      placeholder="Enter your email address" />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Address & Contact Details</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complete Address *
                  </label>
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your complete address" />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      {...register('pincode')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="6-digit pincode" />
                    {errors.pincode && (
                      <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      {...register('state')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select State</option>
                      <option value="bihar">Bihar</option>
                      <option value="delhi">Delhi</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                    </select>
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      District *
                    </label>
                    <input
                      {...register('district')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter district" />
                    {errors.district && (
                      <p className="mt-1 text-sm text-red-600">{errors.district.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Number *
                  </label>
                  <input
                    type="tel"
                    {...register('emergencyContact')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Emergency contact mobile number" />
                  {errors.emergencyContact && (
                    <p className="mt-1 text-sm text-red-600">{errors.emergencyContact.message}</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <span>Generate UHID</span>
                    <CheckCircle className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="mb-8">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Congratulations! Your UHID is Ready
                </h2>
                <p className="text-xl text-gray-600">
                  Your Unique Health ID has been successfully generated
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Unique Health ID</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4 tracking-wider">
                  {generatedUHID}
                </div>
                <p className="text-sm text-gray-600">
                  Keep this ID safe. You'll need it for all healthcare services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Download Health Card</h4>
                  <p className="text-sm text-gray-600 mb-4">Get a digital copy of your health ID card</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Download PDF
                  </button>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                  <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">SMS Confirmation</h4>
                  <p className="text-sm text-gray-600 mb-4">UHID details sent to your mobile</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                    Resend SMS
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Create Account & Access Dashboard
                </button>
                <button className="w-full border-2 border-green-600 text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Discover Health Schemes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div></>
  );
};

export default GetHealthID;