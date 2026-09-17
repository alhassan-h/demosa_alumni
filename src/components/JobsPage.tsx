import { useState } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink, Plus } from 'lucide-react';
import { mockJobs } from '../data/mockData';
import { Job } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';
import { EmptyState } from './shared/EmptyState';

interface JobsPageProps {
  currentUser: any;
}

export function JobsPage({ currentUser }: JobsPageProps) {
  const [jobs] = useState<Job[]>(mockJobs);

  return (
    <div className="min-h-screen bg-grey-50">
      <PageContainer size="narrow" className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Job Board</h1>
          <p className="text-gray-600">Career opportunities shared by fellow alumni</p>
        </div>

        {/* Post Job Button */}
        <div className="mb-6">
          <Button variant="accent" className="h-auto px-6 py-3 rounded-lg font-semibold">
            <Plus className="w-5 h-5 mr-2" />
            Post a Job
          </Button>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy mb-2">{job.title}</h2>
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
                <Badge variant={job.isActive ? 'success' : 'outline'} className="whitespace-nowrap ml-4">
                  {job.isActive ? 'Active' : 'Closed'}
                </Badge>
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
                  <Button asChild variant="accent" className="h-auto px-6 py-2 rounded-lg font-semibold">
                    <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {jobs.length === 0 && (
          <EmptyState
            icon={Briefcase}
            title="No job postings yet"
            description="Be the first to share a career opportunity!"
          />
        )}
      </PageContainer>
    </div>
  );
}
