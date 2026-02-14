import { Menu, X, User, LogOut, Home, Newspaper, Vote, MessageSquare, Image, Calendar, Briefcase, Users, Heart } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isAuthenticated: boolean;
  currentUser?: any;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Header({ isAuthenticated, currentUser, onNavigate, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', page: 'landing', icon: Home },
    { name: 'News', page: 'news', icon: Newspaper },
    { name: 'Elections', page: 'elections', icon: Vote },
    { name: 'Forums', page: 'forums', icon: MessageSquare },
    { name: 'Albums', page: 'albums', icon: Image },
    { name: 'Events', page: 'events', icon: Calendar },
    { name: 'Jobs', page: 'jobs', icon: Briefcase },
    { name: 'Mentorship', page: 'mentorship', icon: Users },
    { name: 'Donate', page: 'donate', icon: Heart },
  ];

  return (
    <header className="bg-[#0a1f44] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4 shadow-md">
              <span className="text-[#0a1f44] font-bold text-xl">DSS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight mb-0">DEMOSA</h1>
              <p className="text-xs text-blue-200">Demonstration Secondary School Old Students Association</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.page)}
                  className="flex items-center px-4 py-2.5 rounded-lg hover:bg-[#1a3a6b] transition-colors text-sm font-medium"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated && currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center space-x-3 hover:bg-[#1a3a6b] px-4 py-2.5 rounded-lg transition-colors"
                >
                  {currentUser.profilePhoto ? (
                    <img src={currentUser.profilePhoto} alt={currentUser.name} className="w-9 h-9 rounded-full border-2 border-white" />
                  ) : (
                    <div className="w-9 h-9 bg-blue-300 rounded-full flex items-center justify-center border-2 border-white">
                      <User className="w-5 h-5 text-blue-700" />
                    </div>
                  )}
                  <span className="text-sm font-medium">{currentUser.name}</span>
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 text-gray-800">
                    <div className="px-5 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">{currentUser.name}</p>
                      <p className="text-xs text-gray-600 mt-1">Class of {currentUser.graduationYear}</p>
                    </div>
                    <button
                      onClick={() => {
                        onNavigate('profile');
                        setProfileMenuOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 hover:bg-gray-50 flex items-center text-sm transition-colors"
                    >
                      <User className="w-4 h-4 mr-3" />
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setProfileMenuOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 hover:bg-gray-50 flex items-center text-sm transition-colors"
                    >
                      <Home className="w-4 h-4 mr-3" />
                      Dashboard
                    </button>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={() => {
                        onLogout();
                        setProfileMenuOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 hover:bg-red-50 flex items-center text-sm text-red-600 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onNavigate('login')}
                  className="px-5 py-2.5 hover:bg-[#1a3a6b] rounded-lg transition-colors text-sm font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate('register')}
                  className="px-5 py-2.5 bg-[#2563eb] hover:bg-blue-600 rounded-lg transition-colors text-sm font-semibold shadow-md"
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-[#1a3a6b] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-5 border-t border-blue-800 mt-2 pt-5">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      onNavigate(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-[#1a3a6b] transition-colors text-sm font-medium"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </button>
                );
              })}
            </nav>

            <div className="mt-5 pt-5 border-t border-blue-800">
              {isAuthenticated && currentUser ? (
                <div className="space-y-2">
                  <div className="px-4 py-3 bg-[#1a3a6b] rounded-lg">
                    <p className="text-sm font-semibold">{currentUser.name}</p>
                    <p className="text-xs text-blue-200 mt-1">Class of {currentUser.graduationYear}</p>
                  </div>
                  <button
                    onClick={() => {
                      onNavigate('profile');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-[#1a3a6b] transition-colors text-sm font-medium"
                  >
                    <User className="w-5 h-5 mr-3" />
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-[#1a3a6b] transition-colors text-sm font-medium"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onNavigate('login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-[#1a3a6b] rounded-lg text-sm font-medium"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('register');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-[#2563eb] rounded-lg text-sm font-semibold"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}