import { useState } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink, Plus } from 'lucide-react';
import { mockJobs } from '../data/mockData';
import { Job } from '../types';

interface JobsPageProps {
  currentUser: any;
}

export function JobsPage({ currentUser }: JobsPageProps) {
  const [jobs] = useState<Job[]>(mockJobs);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">Job Board</h1>
          <p className="text-gray-600">Career opportunities shared by fellow alumni</p>
        </div>

        {/* Post Job Button */}
        <div className="mb-6">
          <button className="px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Post a Job
          </button>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#1e293b] mb-2">{job.title}</h2>
                  <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{job.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold whitespace-nowrap ml-4">
                  Active
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <span>Posted by {job.postedBy.name}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(job.postedAt).toLocaleDateString()}</span>
                </div>
                {job.applicationUrl && (
                  <a
                    href={job.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center transition-colors"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {jobs.length === 0 && (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No job postings yet</h3>
            <p className="text-gray-500 mb-6">Be the first to share a career opportunity!</p>
          </div>
        )}
      </div>
    </div>
  );
}
