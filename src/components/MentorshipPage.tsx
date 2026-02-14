import { useState } from 'react';
import { Users, BookOpen, Award, Search } from 'lucide-react';

interface MentorshipPageProps {
  currentUser: any;
}

export function MentorshipPage({ currentUser }: MentorshipPageProps) {
  const [activeTab, setActiveTab] = useState<'find' | 'become'>('find');

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">Mentorship Program</h1>
          <p className="text-gray-600">Connect with experienced alumni for career guidance</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md p-2 mb-8 flex space-x-2">
          <button
            onClick={() => setActiveTab('find')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'find'
                ? 'bg-[#1e40af] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Find a Mentor
          </button>
          <button
            onClick={() => setActiveTab('become')}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'become'
                ? 'bg-[#1e40af] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Become a Mentor
          </button>
        </div>

        {activeTab === 'find' ? (
          <div>
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-[#1e293b] mb-4">Find Your Mentor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expertise Area
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none">
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
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none">
                    <option>Any year</option>
                    <option>Before 2000</option>
                    <option>2000-2010</option>
                    <option>2010-2020</option>
                  </select>
                </div>
              </div>
              <button className="w-full md:w-auto px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center transition-colors">
                <Search className="w-5 h-5 mr-2" />
                Search Mentors
              </button>
            </div>

            {/* Available Mentors */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1e293b] mb-1">Adebayo Johnson</h3>
                      <p className="text-gray-600 mb-3">Software Engineer at Google • Class of 2010</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          Software Engineering
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          Career Development
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        I'm passionate about helping young professionals navigate the tech industry and build successful careers.
                      </p>
                      <button className="px-6 py-2 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                        Request Mentorship
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <Award className="w-16 h-16 text-[#f59e0b] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#1e293b] mb-2">Share Your Experience</h2>
              <p className="text-gray-600">
                Help the next generation of Demonstrators succeed in their careers
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Areas of Expertise
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none">
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
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none resize-none"
                  rows={5}
                  placeholder="Tell mentees what you can help them with..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Availability
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none">
                  <option>Select your availability...</option>
                  <option>1-2 hours per month</option>
                  <option>2-4 hours per month</option>
                  <option>4+ hours per month</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e40af] hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Register as a Mentor
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
