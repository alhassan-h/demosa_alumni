import { useState } from 'react';
import { Award, Search } from 'lucide-react';
import { mockMentorshipRequests } from '../data/mockData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';

interface MentorshipPageProps {
  currentUser: any;
}

export function MentorshipPage({ currentUser }: MentorshipPageProps) {
  const [activeTab, setActiveTab] = useState<'find' | 'become'>('find');

  const activeMentors = mockMentorshipRequests.filter(
    (request) => request.status === 'matched' && request.mentor
  );

  return (
    <div className="min-h-screen bg-grey-50">
      <PageContainer size="narrow" className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Mentorship Program</h1>
          <p className="text-gray-600">Connect with experienced alumni for career guidance</p>
        </div>

        {/* Tabs */}
        <Card className="p-2 mb-8 flex-row space-x-2">
          <Button
            variant={activeTab === 'find' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('find')}
            className={`flex-1 h-auto py-3 rounded-lg font-semibold ${activeTab === 'find' ? 'bg-navy hover:bg-navy-light' : ''}`}
          >
            Find a Mentor
          </Button>
          <Button
            variant={activeTab === 'become' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('become')}
            className={`flex-1 h-auto py-3 rounded-lg font-semibold ${activeTab === 'become' ? 'bg-navy hover:bg-navy-light' : ''}`}
          >
            Become a Mentor
          </Button>
        </Card>

        {activeTab === 'find' ? (
          <div>
            {/* Search */}
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-bold text-navy mb-4">Find Your Mentor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expertise Area
                  </label>
                  <select className="w-full px-4 py-3 border border-input rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none bg-input-background">
                    <option>Select an area...</option>
                    <option>Software Engineering</option>
                    <option>Medicine</option>
                    <option>Law</option>
                    <option>Business</option>
                    <option>Education</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Graduation Year
                  </label>
                  <select className="w-full px-4 py-3 border border-input rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none bg-input-background">
                    <option>Any year</option>
                    <option>Before 2000</option>
                    <option>2000-2010</option>
                    <option>2010-2020</option>
                  </select>
                </div>
              </div>
              <Button variant="accent" className="w-full md:w-auto h-auto px-6 py-3 rounded-lg font-semibold">
                <Search className="w-5 h-5 mr-2" />
                Search Mentors
              </Button>
            </Card>

            {/* Available Mentors */}
            <div className="space-y-4">
              {activeMentors.map((request) => (
                <Card key={request.id} className="p-6">
                  <div className="flex items-start">
                    <img
                      src={request.mentor!.profilePhoto}
                      alt={request.mentor!.name}
                      className="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover border-2 border-gray-200"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-1">{request.mentor!.name}</h3>
                      <p className="text-gray-600 mb-3">
                        {request.mentor!.occupation} • Class of {request.mentor!.graduationYear}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="info">{request.expertise}</Badge>
                        <Badge variant="success">Career Development</Badge>
                      </div>
                      <p className="text-gray-700 mb-4">{request.mentor!.bio}</p>
                      <Button variant="accent" className="h-auto px-6 py-2 rounded-lg font-semibold">
                        Request Mentorship
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <Card className="p-8">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-warning mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-navy mb-2">Share Your Experience</h2>
              <p className="text-gray-600">
                Help the next generation of Demonstrators succeed in their careers
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Areas of Expertise
                </label>
                <select className="w-full px-4 py-3 border border-input rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none bg-input-background">
                  <option>Select your primary expertise...</option>
                  <option>Software Engineering</option>
                  <option>Medicine</option>
                  <option>Law</option>
                  <option>Business</option>
                  <option>Education</option>
                  <option>Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select className="w-full px-4 py-3 border border-input rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none bg-input-background">
                  <option>Select...</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  About Your Mentorship
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-input rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none resize-none bg-input-background"
                  rows={5}
                  placeholder="Tell mentees what you can help them with..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Availability
                </label>
                <select className="w-full px-4 py-3 border border-input rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none bg-input-background">
                  <option>Select your availability...</option>
                  <option>1-2 hours per month</option>
                  <option>2-4 hours per month</option>
                  <option>4+ hours per month</option>
                </select>
              </div>

              <Button type="submit" className="w-full h-auto py-4 rounded-lg bg-navy hover:bg-navy-light text-white font-semibold">
                Register as a Mentor
              </Button>
            </form>
          </Card>
        )}
      </PageContainer>
    </div>
  );
}
