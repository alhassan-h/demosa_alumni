import { User, Calendar, MessageSquare, Image, Briefcase, TrendingUp, Users, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';

interface DashboardProps {
  currentUser: any;
  onNavigate: (page: string) => void;
}

export function Dashboard({ currentUser, onNavigate }: DashboardProps) {
  const quickStats = [
    { label: 'Unread Messages', value: '12', icon: MessageSquare, color: 'bg-accent', page: 'forums' },
    { label: 'Upcoming Events', value: '3', icon: Calendar, color: 'bg-success', page: 'events' },
    { label: 'New Alumni', value: '45', icon: Users, color: 'bg-navy-light', page: 'news' },
    { label: 'Active Elections', value: '2', icon: TrendingUp, color: 'bg-warning', page: 'elections' },
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

  const quickActions = [
    { label: 'Post Update', icon: MessageSquare, page: 'news' },
    { label: 'Upload Photos', icon: Image, page: 'albums' },
    { label: 'Post Job', icon: Briefcase, page: 'jobs' },
    { label: 'Donate', icon: Heart, page: 'donate' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageContainer className="py-10">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-navy via-navy-light to-navy rounded-2xl p-10 mb-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold mb-3 text-white">Welcome back, {currentUser.name}!</h1>
              <p className="text-blue-200 text-lg">
                Class of {currentUser.graduationYear} • {currentUser.occupation}
              </p>
            </div>
            <Avatar className="w-24 h-24 border-4 border-white shadow-2xl">
              <AvatarImage src={currentUser.profilePhoto} alt={currentUser.name} />
              <AvatarFallback className="bg-white">
                <User className="w-12 h-12 text-navy" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                onClick={() => onNavigate(stat.page)}
                className="p-7 shadow-md hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-navy">{stat.value}</span>
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-navy mb-8">Recent Activity</h2>
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
                        <h3 className="font-bold text-navy mb-2 text-lg">{activity.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button
                variant="ghost"
                onClick={() => onNavigate('news')}
                className="w-full mt-6 py-3 h-auto text-accent hover:text-accent-dark hover:bg-blue-50 font-bold text-sm"
              >
                View All Activities
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-8 mt-8">
              <h2 className="text-3xl font-bold text-navy mb-8">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-5">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      onClick={() => onNavigate(action.page)}
                      className="p-6 border-2 border-gray-200 rounded-xl hover:border-accent hover:bg-blue-50 transition-all"
                    >
                      <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                      <span className="text-sm font-bold text-gray-700 block">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Your Class */}
            <Card className="p-7">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Class of {currentUser.graduationYear}
              </h2>
              <div className="space-y-4">
                {classmates.map((classmate, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-all">
                    <Avatar className="w-12 h-12 border-2 border-gray-200">
                      <AvatarImage src={classmate.photo} alt={classmate.name} />
                      <AvatarFallback>{classmate.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-navy truncate">
                        {classmate.name}
                      </p>
                      <p className="text-xs text-gray-500">{classmate.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => onNavigate('news')}
                className="w-full mt-6 py-3 h-auto bg-navy hover:bg-navy-light text-white text-sm font-bold"
              >
                View All Classmates
              </Button>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-7">
              <h2 className="text-2xl font-bold text-navy mb-6">Upcoming Events</h2>
              <div className="space-y-5">
                <div className="border-l-4 border-accent pl-5 py-2">
                  <p className="text-sm font-bold text-navy mb-1">Annual Homecoming</p>
                  <p className="text-xs text-gray-600">March 15, 2026</p>
                </div>
                <div className="border-l-4 border-green-500 pl-5 py-2">
                  <p className="text-sm font-bold text-navy mb-1">Networking Mixer</p>
                  <p className="text-xs text-gray-600">February 20, 2026</p>
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={() => onNavigate('events')}
                className="w-full mt-6 py-3 h-auto text-accent hover:text-accent-dark hover:bg-blue-50 font-bold text-sm"
              >
                View All Events
              </Button>
            </Card>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
