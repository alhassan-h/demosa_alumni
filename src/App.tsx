import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { NewsPage } from './components/NewsPage';
import { ElectionsPage } from './components/ElectionsPage';
import { ForumsPage } from './components/ForumsPage';
import { AlbumsPage } from './components/AlbumsPage';
import { EventsPage } from './components/EventsPage';
import { JobsPage } from './components/JobsPage';
import { MentorshipPage } from './components/MentorshipPage';
import { DonatePage } from './components/DonatePage';
import { mockCurrentUser } from './data/mockData';

type Page =
  | 'landing'
  | 'login'
  | 'register'
  | 'dashboard'
  | 'news'
  | 'elections'
  | 'forums'
  | 'albums'
  | 'events'
  | 'jobs'
  | 'mentorship'
  | 'donate'
  | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const handleNavigate = (page: Page) => {
    // For protected pages, redirect to login if not authenticated
    const protectedPages: Page[] = ['dashboard', 'profile', 'elections'];
    
    if (protectedPages.includes(page) && !isAuthenticated) {
      setCurrentPage('login');
      return;
    }
    
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = (user: any) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      
      case 'login':
        return (
          <AuthPage
            mode="login"
            onLogin={handleLogin}
            onNavigate={handleNavigate}
          />
        );
      
      case 'register':
        return (
          <AuthPage
            mode="register"
            onLogin={handleLogin}
            onNavigate={handleNavigate}
          />
        );
      
      case 'dashboard':
        return (
          <Dashboard
            currentUser={currentUser || mockCurrentUser}
            onNavigate={handleNavigate}
          />
        );
      
      case 'news':
        return (
          <NewsPage currentUser={currentUser || mockCurrentUser} />
        );
      
      case 'elections':
        return (
          <ElectionsPage currentUser={currentUser || mockCurrentUser} />
        );
      
      case 'forums':
        return (
          <ForumsPage currentUser={currentUser || mockCurrentUser} />
        );
      
      case 'albums':
        return (
          <AlbumsPage currentUser={currentUser || mockCurrentUser} />
        );
      
      case 'events':
        return (
          <EventsPage currentUser={currentUser || mockCurrentUser} />
        );
      
      case 'jobs':
        return (
          <JobsPage currentUser={currentUser || mockCurrentUser} />
        );
      
      case 'mentorship':
        return (
          <MentorshipPage currentUser={currentUser || mockCurrentUser} />
        );
      
      case 'donate':
        return <DonatePage />;
      
      case 'profile':
        return (
          <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl w-full mx-4">
              <h1 className="text-3xl font-bold text-[#1e293b] mb-6">Profile Page</h1>
              <p className="text-gray-600 mb-4">
                This is a placeholder for the user profile page. In a full implementation,
                this would show detailed user information and allow editing.
              </p>
              <button
                onClick={() => handleNavigate('dashboard')}
                className="px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        );
      
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}
