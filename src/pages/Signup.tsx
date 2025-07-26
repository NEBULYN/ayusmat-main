import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Heart, Eye, EyeOff, Shield, CheckCircle, QrCode } from 'lucide-react';
import { useAuth, UserRole } from '../contexts/AuthContext';

const baseSchema = {
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
  name: yup.string().required('Full name is required'),
  phone: yup.string().matches(/^[6-9]\d{9}$/, 'Enter valid mobile number').required('Phone number is required'),
  role: yup.string().required('Please select your role'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
};

const patientSchema = yup.object(baseSchema);

const doctorSchema = yup.object({
  ...baseSchema,
  licenseNumber: yup.string().required('Medical license number is required'),
  specialization: yup.string().required('Specialization is required'),
});

const hospitalSchema = yup.object({
  ...baseSchema,
  hospitalName: yup.string().required('Hospital name is required'),
  hospitalId: yup.string().required('Hospital registration ID is required'),
  department: yup.string().required('Department is required'),
});

const insuranceSchema = yup.object({
  ...baseSchema,
  insuranceCompany: yup.string().required('Insurance company name is required'),
  employeeId: yup.string().required('Employee ID is required'),
  designation: yup.string().required('Designation is required'),
});

const dynamicSchema = yup.lazy((values: any) => {
  switch (values?.role) {
    case 'doctor': return doctorSchema;
    case 'hospital': return hospitalSchema;
    case 'insurance': return insuranceSchema;
    default: return patientSchema;
  }
});

type FormData = yup.InferType<typeof patientSchema> & {
  licenseNumber?: string;
  specialization?: string;
  hospitalName?: string;
  hospitalId?: string;
  department?: string;
  insuranceCompany?: string;
  employeeId?: string;
  designation?: string;
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [qrCode, setQrCode] = useState('');
  const [twoFAToken, setTwoFAToken] = useState('');
  
  const { signup, setupTwoFA, verifyTwoFA, isLoading, error } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    resolver: yupResolver(dynamicSchema)
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: FormData) => {
    try {
      await signup(data);
      setStep(2);
    } catch (err) {
      console.error('Signup failed:', err);
    }
  };

  const handleSetupTwoFA = async () => {
    try {
      const qrCodeUrl = await setupTwoFA();
      setQrCode(qrCodeUrl);
      setStep(3);
    } catch (err) {
      console.error('2FA setup failed:', err);
    }
  };

  const handleVerifyTwoFA = async () => {
    try {
      const isValid = await verifyTwoFA(twoFAToken);
      if (isValid) {
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('2FA verification failed:', err);
    }
  };

  const roleOptions = [
    { value: 'patient', label: 'Patient', icon: '👤', description: 'Individual seeking healthcare' },
    { value: 'doctor', label: 'Doctor', icon: '👨‍⚕️', description: 'Medical practitioner' },
    { value: 'hospital', label: 'Hospital Staff', icon: '🏥', description: 'Hospital employee' },
    { value: 'insurance', label: 'Insurance Provider', icon: '🏢', description: 'Insurance company employee' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">AyuSmat</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join the digital healthcare revolution
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[
              { number: 1, title: 'Account Details' },
              { number: 2, title: 'Email Verification' },
              { number: 3, title: 'Security Setup' },
            ].map((stepItem, index) => {
              const isActive = step >= stepItem.number;
              const isCompleted = step > stepItem.number;
              
              return (
                <div key={stepItem.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      isCompleted ? 'bg-green-500 text-white' :
                      isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {isCompleted ? <CheckCircle className="h-5 w-5" /> : stepItem.number}
                    </div>
                    <span className={`mt-2 text-xs font-medium ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {stepItem.title}
                    </span>
                  </div>
                  {index < 2 && (
                    <div className={`w-16 h-1 mx-4 ${
                      step > stepItem.number ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Your Role *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {roleOptions.map((role) => (
                    <label key={role.value} className="relative">
                      <input
                        type="radio"
                        value={role.value}
                        {...register('role')}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedRole === role.value 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="text-center">
                          <div className="text-3xl mb-2">{role.icon}</div>
                          <div className="font-medium text-gray-900">{role.label}</div>
                          <div className="text-xs text-gray-500 mt-1">{role.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>

              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
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
                    Mobile Number *
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Role-specific fields */}
              {selectedRole === 'doctor' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Medical License Number *
                    </label>
                    <input
                      {...register('licenseNumber')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter license number"
                    />
                    {errors.licenseNumber && (
                      <p className="mt-1 text-sm text-red-600">{errors.licenseNumber.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization *
                    </label>
                    <select
                      {...register('specialization')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select specialization</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="general">General Medicine</option>
                    </select>
                    {errors.specialization && (
                      <p className="mt-1 text-sm text-red-600">{errors.specialization.message}</p>
                    )}
                  </div>
                </div>
              )}

              {selectedRole === 'hospital' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hospital Name *
                    </label>
                    <input
                      {...register('hospitalName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter hospital name"
                    />
                    {errors.hospitalName && (
                      <p className="mt-1 text-sm text-red-600">{errors.hospitalName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hospital Registration ID *
                    </label>
                    <input
                      {...register('hospitalId')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter registration ID"
                    />
                    {errors.hospitalId && (
                      <p className="mt-1 text-sm text-red-600">{errors.hospitalId.message}</p>
                    )}
                  </div>
                </div>
              )}

              {selectedRole === 'insurance' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Company *
                    </label>
                    <select
                      {...register('insuranceCompany')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select company</option>
                      <option value="star-health">Star Health Insurance</option>
                      <option value="hdfc-ergo">HDFC ERGO</option>
                      <option value="icici-lombard">ICICI Lombard</option>
                      <option value="bajaj-allianz">Bajaj Allianz</option>
                    </select>
                    {errors.insuranceCompany && (
                      <p className="mt-1 text-sm text-red-600">{errors.insuranceCompany.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employee ID *
                    </label>
                    <input
                      {...register('employeeId')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter employee ID"
                    />
                    {errors.employeeId && (
                      <p className="mt-1 text-sm text-red-600">{errors.employeeId.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Password Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('password')}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      {...register('confirmPassword')}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    {...register('terms')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="text-center space-y-6">
              <div>
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Account Created Successfully!</h3>
                <p className="text-gray-600">
                  We've sent a verification email to your registered email address. 
                  Please check your inbox and click the verification link.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
                <ol className="text-sm text-blue-800 space-y-1 text-left">
                  <li>1. Check your email for verification link</li>
                  <li>2. Click the link to verify your email</li>
                  <li>3. Set up two-factor authentication for security</li>
                  <li>4. Complete your profile setup</li>
                </ol>
              </div>

              <button
                onClick={handleSetupTwoFA}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Continue to Security Setup
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <div>
                <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Set Up Two-Factor Authentication</h3>
                <p className="text-gray-600">
                  Secure your account with an additional layer of protection using an authenticator app.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <QrCode className="h-32 w-32 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-600 mt-2">
                    Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter 6-digit code from your authenticator app
                    </label>
                    <input
                      type="text"
                      value={twoFAToken}
                      onChange={(e) => setTwoFAToken(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
                      placeholder="000000"
                      maxLength={6}
                    />
                  </div>

                  <button
                    onClick={handleVerifyTwoFA}
                    disabled={isLoading || twoFAToken.length !== 6}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? 'Verifying...' : 'Complete Setup'}
                  </button>

                  <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full text-gray-600 hover:text-gray-500 text-sm"
                  >
                    Skip for now (not recommended)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sign In Link */}
          {step === 1 && (
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;