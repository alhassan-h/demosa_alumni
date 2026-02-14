import { User, Calendar, MessageSquare, Image, Briefcase, TrendingUp, Users, Heart } from 'lucide-react';

interface DashboardProps {
  currentUser: any;
  onNavigate: (page: string) => void;
}

export function Dashboard({ currentUser, onNavigate }: DashboardProps) {
  const quickStats = [
    { label: 'Unread Messages', value: '12', icon: MessageSquare, color: 'bg-blue-500', page: 'forums' },
    { label: 'Upcoming Events', value: '3', icon: Calendar, color: 'bg-green-500', page: 'events' },
    { label: 'New Alumni', value: '45', icon: Users, color: 'bg-purple-500', page: 'news' },
    { label: 'Active Elections', value: '2', icon: TrendingUp, color: 'bg-amber-500', page: 'elections' },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'event',
      title: 'DEMOSA Annual Homecoming 2026',
      description: 'New event starting March 15, 2026',
      time: '2 hours ago',
      icon: Calendar,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 2,
      type: 'forum',
      title: 'Favorite School Memories',
      description: 'Chioma Okafor replied to your comment',
      time: '5 hours ago',
      icon: MessageSquare,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 3,
      type: 'election',
      title: 'Class of 2017 Leadership Elections',
      description: 'Voting is now open',
      time: '1 day ago',
      icon: TrendingUp,
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  const classmates = [
    {
      name: 'Chioma Okafor',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      role: 'Class Admin',
    },
    {
      name: 'Ibrahim Mohammed',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      role: 'Member',
    },
    {
      name: 'Fatima Abdullahi',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      role: 'Member',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0a1f44] via-[#1a3a6b] to-[#0a1f44] rounded-2xl p-10 mb-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold mb-3">Welcome back, {currentUser.name}!</h1>
              <p className="text-blue-200 text-lg">
                Class of {currentUser.graduationYear} • {currentUser.occupation}
              </p>
            </div>
            <div className="flex items-center space-x-6">
              {currentUser.profilePhoto ? (
                <img
                  src={currentUser.profilePhoto}
                  alt={currentUser.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-2xl"
                />
              ) : (
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <User className="w-12 h-12 text-[#0a1f44]" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                onClick={() => onNavigate(stat.page)}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all cursor-pointer border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-[#0a1f44]">{stat.value}</span>
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">Recent Activity</h2>
              <div className="space-y-5">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={activity.id}
                      className="flex items-start p-5 hover:bg-gray-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-gray-200"
                    >
                      <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#0a1f44] mb-2 text-lg">{activity.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => onNavigate('news')}
                className="w-full mt-6 py-3 text-[#2563eb] hover:text-blue-700 font-bold text-sm hover:bg-blue-50 rounded-lg transition-all"
              >
                View All Activities
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-md p-8 mt-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-5">
                <button
                  onClick={() => onNavigate('news')}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#2563eb] hover:bg-blue-50 transition-all"
                >
                  <MessageSquare className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
                  <span className="text-sm font-bold text-gray-700 block">Post Update</span>
                </button>
                <button
                  onClick={() => onNavigate('albums')}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#2563eb] hover:bg-blue-50 transition-all"
                >
                  <Image className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
                  <span className="text-sm font-bold text-gray-700 block">Upload Photos</span>
                </button>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#2563eb] hover:bg-blue-50 transition-all"
                >
                  <Briefcase className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
                  <span className="text-sm font-bold text-gray-700 block">Post Job</span>
                </button>
                <button
                  onClick={() => onNavigate('donate')}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:border-[#2563eb] hover:bg-blue-50 transition-all"
                >
                  <Heart className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
                  <span className="text-sm font-bold text-gray-700 block">Donate</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Your Class */}
            <div className="bg-white rounded-2xl shadow-md p-7 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-6">
                Class of {currentUser.graduationYear}
              </h2>
              <div className="space-y-4">
                {classmates.map((classmate, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-all">
                    <img
                      src={classmate.photo}
                      alt={classmate.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#0a1f44] truncate">
                        {classmate.name}
                      </p>
                      <p className="text-xs text-gray-500">{classmate.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('news')}
                className="w-full mt-6 py-3 bg-[#0a1f44] text-white rounded-xl hover:bg-[#1a3a6b] transition-all text-sm font-bold shadow-md"
              >
                View All Classmates
              </button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-md p-7 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-6">Upcoming Events</h2>
              <div className="space-y-5">
                <div className="border-l-4 border-[#2563eb] pl-5 py-2">
                  <p className="text-sm font-bold text-[#0a1f44] mb-1">Annual Homecoming</p>
                  <p className="text-xs text-gray-600">March 15, 2026</p>
                </div>
                <div className="border-l-4 border-green-500 pl-5 py-2">
                  <p className="text-sm font-bold text-[#0a1f44] mb-1">Networking Mixer</p>
                  <p className="text-xs text-gray-600">February 20, 2026</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('events')}
                className="w-full mt-6 py-3 text-[#2563eb] hover:text-blue-700 font-bold text-sm hover:bg-blue-50 rounded-lg transition-all"
              >
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}