import { Menu, X, User, LogOut, Home, Newspaper, Vote, MessageSquare, Image, Calendar, Briefcase, Users, Heart, ChevronDown, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface HeaderProps {
  isAuthenticated: boolean;
  currentUser?: any;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Header({ isAuthenticated, currentUser, onNavigate, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNav = [
    { name: 'Home', page: 'landing', icon: Home },
    { name: 'News', page: 'news', icon: Newspaper },
    { name: 'Elections', page: 'elections', icon: Vote },
    { name: 'Forums', page: 'forums', icon: MessageSquare },
    { name: 'Albums', page: 'albums', icon: Image },
    { name: 'Events', page: 'events', icon: Calendar },
  ];

  const utilityNav = [
    { name: 'Jobs', page: 'jobs', icon: Briefcase },
    { name: 'Mentorship', page: 'mentorship', icon: Users },
    { name: 'Donate', page: 'donate', icon: Heart },
  ];

  const navigation = [...primaryNav, ...utilityNav];

  return (
    <div className="sticky top-0 z-50">
      {/* Utility Bar */}
      <div className="hidden lg:block bg-grey-100 border-b border-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs">
            <span className="flex items-center text-grey-600">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Ahmadu Bello University, Main Campus, Zaria
            </span>
            <nav className="flex items-center space-x-5">
              {utilityNav.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.page)}
                  className="text-grey-600 hover:text-navy font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <header className="bg-navy text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4 shadow-md overflow-hidden p-1.5 shrink-0">
              <img src="/logos/demosa-logo.png" alt="DEMOSA logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight mb-0 text-white">DEMOSA</h1>
              <p className="text-xs text-blue-200">Demonstration Secondary School Old Students Association</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => onNavigate(item.page)}
                  className="text-white hover:bg-navy-light hover:text-white px-3 py-2.5 h-auto text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Button>
              );
            })}
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated && currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-navy-light hover:text-white h-auto px-4 py-2.5"
                  >
                    <Avatar className="w-9 h-9 border-2 border-white mr-3">
                      <AvatarImage src={currentUser.profilePhoto} alt={currentUser.name} />
                      <AvatarFallback className="bg-blue-300 text-blue-700">
                        <User className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{currentUser.name}</span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>
                    <p className="text-sm font-semibold text-navy">{currentUser.name}</p>
                    <p className="text-xs text-muted-foreground font-normal mt-1">Class of {currentUser.graduationYear}</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onNavigate('profile')}>
                    <User className="w-4 h-4 mr-2" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('dashboard')}>
                    <Home className="w-4 h-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive" onClick={onLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => onNavigate('login')}
                  className="text-white hover:bg-navy-light hover:text-white px-5 py-2.5 h-auto text-sm font-medium"
                >
                  Login
                </Button>
                <Button
                  variant="accent"
                  onClick={() => onNavigate('register')}
                  className="px-5 py-2.5 h-auto text-sm"
                >
                  Register
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:bg-navy-light hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-5 border-t border-navy-light mt-2 pt-5">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => {
                      onNavigate(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start text-white hover:bg-navy-light hover:text-white px-4 py-3 h-auto text-sm font-medium"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Button>
                );
              })}
            </nav>

            <div className="mt-5 pt-5 border-t border-navy-light">
              {isAuthenticated && currentUser ? (
                <div className="space-y-2">
                  <div className="px-4 py-3 bg-navy-light rounded-lg">
                    <p className="text-sm font-semibold">{currentUser.name}</p>
                    <p className="text-xs text-blue-200 mt-1">Class of {currentUser.graduationYear}</p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onNavigate('profile');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start text-white hover:bg-navy-light hover:text-white px-4 py-3 h-auto text-sm font-medium"
                  >
                    <User className="w-5 h-5 mr-3" />
                    My Profile
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start text-white hover:bg-navy-light hover:text-white px-4 py-3 h-auto text-sm font-medium"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Button
                    onClick={() => {
                      onNavigate('login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-navy-light hover:bg-navy-light/80 text-white h-auto py-3 text-sm font-medium"
                  >
                    Login
                  </Button>
                  <Button
                    variant="accent"
                    onClick={() => {
                      onNavigate('register');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full h-auto py-3 text-sm"
                  >
                    Register
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      </header>
    </div>
  );
}
