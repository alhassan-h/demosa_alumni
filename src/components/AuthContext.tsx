import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  graduationYear: string;
  role: 'member' | 'admin' | 'yearGroupAdmin';
  profileImage?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      graduationYear: '2017',
      role: 'member',
      profileImage: undefined,
    };
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const register = async (userData: Partial<User> & { password: string }) => {
    // Mock registration - replace with actual API call
    const newUser: User = {
      id: Math.random().toString(36),
      name: userData.name || '',
      email: userData.email || '',
      graduationYear: userData.graduationYear || '',
      role: 'member',
      profileImage: userData.profileImage,
    };
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
