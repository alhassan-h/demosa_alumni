import { useState } from 'react';
import { Vote, Calendar, Clock, Users } from 'lucide-react';
import { mockElections } from '../data/mockData';
import { Election } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';
import { EmptyState } from './shared/EmptyState';

interface ElectionsPageProps {
  currentUser: any;
}

const statusVariant: Record<Election['status'], 'success' | 'info' | 'outline'> = {
  active: 'success',
  upcoming: 'info',
  completed: 'outline',
};

export function ElectionsPage({ currentUser }: ElectionsPageProps) {
  const [elections] = useState<Election[]>(mockElections);
  const [selectedElection, setSelectedElection] = useState<Election | null>(null);
  const [votes, setVotes] = useState<{ [key: string]: string }>({});

  const handleVote = (positionId: string, candidateId: string) => {
    setVotes({ ...votes, [positionId]: candidateId });
  };

  const submitBallot = () => {
    alert('Your votes have been submitted successfully!');
    setSelectedElection(null);
    setVotes({});
  };

  if (selectedElection) {
    return (
      <div className="min-h-screen bg-grey-50">
        <PageContainer size="narrow" className="py-8">
          {/* Header */}
          <Button
            variant="link"
            onClick={() => setSelectedElection(null)}
            className="mb-6 px-0 text-accent hover:text-accent-dark font-semibold"
          >
            ← Back to Elections
          </Button>

          <Card className="p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-navy mb-2">{selectedElection.title}</h1>
                <p className="text-gray-600 mb-4">{selectedElection.description}</p>
                {selectedElection.yearGroup && (
                  <Badge variant="info">Class of {selectedElection.yearGroup}</Badge>
                )}
              </div>
              <Badge variant={statusVariant[selectedElection.status]} className="text-sm">
                {selectedElection.status.toUpperCase()}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Starts: {new Date(selectedElection.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Ends: {new Date(selectedElection.endDate).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Voting Form */}
            {selectedElection.status === 'active' ? (
              <div className="space-y-8">
                {selectedElection.positions.map((position) => (
                  <div key={position.id} className="border-b pb-8 last:border-b-0">
                    <h3 className="text-xl font-bold text-navy mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-6">{position.description}</p>

                    <div className="space-y-4">
                      {position.candidates.map((candidate) => (
                        <label
                          key={candidate.id}
                          className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            votes[position.id] === candidate.id
                              ? 'border-accent bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={position.id}
                            value={candidate.id}
                            checked={votes[position.id] === candidate.id}
                            onChange={() => handleVote(position.id, candidate.id)}
                            className="mt-1 mr-4 accent-accent"
                          />
                          <div className="flex-1">
                            <div className="flex items-center mb-3">
                              {candidate.user.profilePhoto && (
                                <img
                                  src={candidate.user.profilePhoto}
                                  alt={candidate.user.name}
                                  className="w-12 h-12 rounded-full mr-3"
                                />
                              )}
                              <div>
                                <h4 className="font-bold text-navy">{candidate.user.name}</h4>
                                <p className="text-sm text-gray-600">
                                  {candidate.user.occupation} • Class of {candidate.user.graduationYear}
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{candidate.manifesto}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <Button
                  variant="accent"
                  onClick={submitBallot}
                  disabled={Object.keys(votes).length !== selectedElection.positions.length}
                  className="w-full h-auto py-4 rounded-lg disabled:bg-gray-300"
                >
                  <Vote className="w-5 h-5 mr-2" />
                  Submit Ballot
                </Button>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  {selectedElection.status === 'upcoming'
                    ? 'Voting has not started yet. Check back soon!'
                    : 'This election has concluded. Results will be announced soon.'}
                </p>
              </div>
            )}
          </Card>
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grey-50">
      <PageContainer className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Elections</h1>
          <p className="text-gray-600">Vote for leadership positions in DEMOSA and your class</p>
        </div>

        {/* Elections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {elections.map((election) => (
            <Card key={election.id} className="overflow-hidden hover:shadow-xl transition-shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy mb-2">{election.title}</h2>
                  <p className="text-gray-600 mb-3">{election.description}</p>
                  {election.yearGroup && (
                    <Badge variant="info">Class of {election.yearGroup}</Badge>
                  )}
                </div>
                <Badge variant={statusVariant[election.status]} className="whitespace-nowrap ml-2">
                  {election.status.toUpperCase()}
                </Badge>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Starts: {new Date(election.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Ends: {new Date(election.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{election.positions.length} Position{election.positions.length > 1 ? 's' : ''}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {election.positions.map((position) => (
                  <div key={position.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 font-medium">{position.title}</span>
                    <span className="text-gray-500">{position.candidates.length} candidate{position.candidates.length > 1 ? 's' : ''}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setSelectedElection(election)}
                className={`w-full h-auto py-3 ${
                  election.status === 'active'
                    ? 'bg-accent hover:bg-accent-dark text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {election.status === 'active' ? (
                  <>
                    <Vote className="w-5 h-5 mr-2" />
                    Vote Now
                  </>
                ) : election.status === 'upcoming' ? (
                  'View Details'
                ) : (
                  'View Results'
                )}
              </Button>
            </Card>
          ))}
        </div>

        {elections.length === 0 && (
          <EmptyState
            icon={Vote}
            title="No elections at this time"
            description="Check back later for upcoming elections."
          />
        )}
      </PageContainer>
    </div>
  );
}
