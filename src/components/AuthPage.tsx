import { useState } from 'react';
import { User, Mail, Lock, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { IconInput } from './shared/IconInput';

interface AuthPageProps {
  mode: 'login' | 'register';
  onLogin: (user: any) => void;
  onNavigate: (page: string) => void;
}

export function AuthPage({ mode, onLogin, onNavigate }: AuthPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    graduationYear: '',
    occupation: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock authentication - replace with actual API call
    const mockUser = {
      id: '1',
      name: formData.name || 'Demo User',
      email: formData.email,
      graduationYear: parseInt(formData.graduationYear) || 2017,
      profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      bio: 'DEMOSA Member',
      occupation: formData.occupation || 'Professional',
      location: formData.location || 'Nigeria',
      isAdmin: false,
      createdAt: new Date().toISOString(),
    };

    onLogin(mockUser);
    onNavigate('dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 60 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg p-2">
              <img src="/logos/demosa-logo.png" alt="DEMOSA logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-4xl font-bold text-navy mb-3">
              {mode === 'login' ? 'Welcome Back!' : 'Join DEMOSA'}
            </h2>
            <p className="text-gray-600 text-base">
              {mode === 'login'
                ? 'Sign in to access your alumni account'
                : 'Create your account and connect with fellow alumni'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name
                </label>
                <IconInput
                  icon={User}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-12"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Email Address
              </label>
              <IconInput
                icon={Mail}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="h-12"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <IconInput
                icon={Lock}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="h-12"
                required
              />
            </div>

            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <IconInput
                    icon={Lock}
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Graduation Year
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <select
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className="w-full h-12 pl-11 pr-4 border border-input rounded-md focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none transition appearance-none bg-input-background text-base"
                      required
                    >
                      <option value="">Select your graduation year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          Class of {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Occupation (Optional)
                  </label>
                  <IconInput
                    icon={Briefcase}
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="Your current occupation"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Location (Optional)
                  </label>
                  <IconInput
                    icon={MapPin}
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Country"
                    className="h-12"
                  />
                </div>
              </>
            )}

            <Button type="submit" className="w-full h-auto py-4 rounded-xl bg-navy hover:bg-navy-light text-white font-bold shadow-lg hover:shadow-xl mt-6">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => onNavigate(mode === 'login' ? 'register' : 'login')}
                className="text-accent hover:text-accent-dark font-bold"
              >
                {mode === 'login' ? 'Register here' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
