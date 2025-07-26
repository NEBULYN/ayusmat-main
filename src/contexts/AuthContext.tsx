import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'patient' | 'doctor' | 'hospital' | 'insurance';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  isVerified: boolean;
  profileComplete: boolean;
  uhid?: string; // For patients
  licenseNumber?: string; // For doctors
  hospitalId?: string; // For hospital staff
  insuranceCompany?: string; // For insurance providers
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
  sendOTP: (email: string) => Promise<void>;
  verifyOTP: (email: string, otp: string) => Promise<void>;
  setupTwoFA: () => Promise<string>; // Returns QR code URL
  verifyTwoFA: (token: string) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

interface SignupData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  phone: string;
  licenseNumber?: string;
  hospitalName?: string;
  insuranceCompany?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('ayusmat_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on role
      const mockUser: User = {
        id: `${role}_${Date.now()}`,
        email,
        name: role === 'patient' ? 'John Doe' : 
              role === 'doctor' ? 'Dr. Sarah Smith' :
              role === 'hospital' ? 'Hospital Admin' : 'Insurance Manager',
        role,
        isVerified: true,
        profileComplete: true,
        uhid: role === 'patient' ? 'UHID123456789' : undefined,
        licenseNumber: role === 'doctor' ? 'MED12345' : undefined,
        hospitalId: role === 'hospital' ? 'HOSP001' : undefined,
        insuranceCompany: role === 'insurance' ? 'Star Health Insurance' : undefined,
      };
      
      setUser(mockUser);
      localStorage.setItem('ayusmat_user', JSON.stringify(mockUser));
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: SignupData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser: User = {
        id: `${userData.role}_${Date.now()}`,
        email: userData.email,
        name: userData.name,
        role: userData.role,
        phone: userData.phone,
        isVerified: false,
        profileComplete: false,
        uhid: userData.role === 'patient' ? `UHID${Date.now()}` : undefined,
        licenseNumber: userData.licenseNumber,
        insuranceCompany: userData.insuranceCompany,
      };
      
      setUser(newUser);
      localStorage.setItem('ayusmat_user', JSON.stringify(newUser));
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ayusmat_user');
  };

  const sendOTP = async (email: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Simulate OTP sent
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTP = async (email: string, otp: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (user) {
        const updatedUser = { ...user, isVerified: true };
        setUser(updatedUser);
        localStorage.setItem('ayusmat_user', JSON.stringify(updatedUser));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const setupTwoFA = async (): Promise<string> => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
    } finally {
      setIsLoading(false);
    }
  };

  const verifyTwoFA = async (token: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return token.length === 6;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    sendOTP,
    verifyOTP,
    setupTwoFA,
    verifyTwoFA,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};