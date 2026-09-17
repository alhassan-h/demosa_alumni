import { ArrowRight, Users, Calendar, GraduationCap, Heart, Trophy, BookOpen, Network } from 'lucide-react';
import { Button } from './ui/button';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const stats = [
    { label: 'Active Alumni', value: '5,000+', icon: Users },
    { label: 'Year Groups', value: '50+', icon: GraduationCap },
    { label: 'Annual Events', value: '20+', icon: Calendar },
    { label: 'Scholarships Given', value: '₦10M+', icon: Heart },
  ];

  const features = [
    {
      title: 'Stay Connected',
      description: 'Network with fellow alumni across graduating years and professional fields.',
      icon: Network,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Engage & Share',
      description: 'Participate in forums, share memories, and stay updated with school news.',
      icon: BookOpen,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Give Back',
      description: 'Support current students through mentorship, scholarships, and donations.',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
    },
    {
      title: 'Celebrate Together',
      description: 'Join reunions, homecoming events, and year-group celebrations.',
      icon: Trophy,
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-4xl">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 p-2 shadow-xl">
              <img src="/logos/dss-abu-logo.png" alt="Demonstration Secondary School, ABU Zaria crest" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Welcome to <span className="text-blue-400">DEMOSA</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-blue-100 font-semibold">
              Demonstration Secondary School Old Students Association
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-200 leading-relaxed max-w-3xl">
              Connecting generations of alumni, preserving our heritage, and building a stronger community.
              Join thousands of fellow Demonstrators worldwide in celebrating excellence and giving back.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                variant="accent"
                onClick={() => onNavigate('register')}
                className="px-10 py-5 h-auto rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 hover:scale-105"
              >
                Join DEMOSA
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('login')}
                className="px-10 py-5 h-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border-2 border-white/50 rounded-xl font-bold text-lg hover:scale-105"
              >
                Member Login
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 shadow-md">
                    <Icon className="w-10 h-10 text-navy" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-navy mb-3">{stat.value}</div>
                  <div className="text-gray-600 font-semibold text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Why Join DEMOSA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of a vibrant community that celebrates our shared heritage and supports each other's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Reconnect with Your Alma Mater?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Join DEMOSA today and be part of a community that's making a difference.
          </p>
          <Button
            variant="accent"
            onClick={() => onNavigate('register')}
            className="px-12 py-5 h-auto rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Recent Updates Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">Latest News</h2>
            <Button
              variant="ghost"
              onClick={() => onNavigate('news')}
              className="text-accent hover:text-accent-dark hover:bg-blue-50 font-semibold px-5 py-3 h-auto"
            >
              View All
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="h-56 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-7">
                  <div className="text-sm text-accent font-bold mb-3 uppercase tracking-wide">Announcement</div>
                  <h3 className="text-2xl font-bold text-navy mb-4 leading-tight">
                    DEMOSA Annual Homecoming 2026
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Join us for a weekend of celebration and reconnection...
                  </p>
                  <button
                    onClick={() => onNavigate('news')}
                    className="text-accent hover:text-accent-dark font-semibold flex items-center text-sm hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
