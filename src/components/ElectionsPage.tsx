import { useState } from 'react';
import { Vote, Calendar, Clock, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { mockElections } from '../data/mockData';
import { Election, Candidate } from '../types';

interface ElectionsPageProps {
  currentUser: any;
}

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (selectedElection) {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <button
            onClick={() => setSelectedElection(null)}
            className="mb-6 text-[#1e40af] hover:text-blue-700 font-semibold flex items-center"
          >
            ← Back to Elections
          </button>

          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#1e293b] mb-2">{selectedElection.title}</h1>
                <p className="text-gray-600 mb-4">{selectedElection.description}</p>
                {selectedElection.yearGroup && (
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Class of {selectedElection.yearGroup}
                  </span>
                )}
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(selectedElection.status)}`}>
                {selectedElection.status.toUpperCase()}
              </span>
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
                    <h3 className="text-xl font-bold text-[#1e293b] mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-6">{position.description}</p>

                    <div className="space-y-4">
                      {position.candidates.map((candidate) => (
                        <label
                          key={candidate.id}
                          className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            votes[position.id] === candidate.id
                              ? 'border-[#1e40af] bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={position.id}
                            value={candidate.id}
                            checked={votes[position.id] === candidate.id}
                            onChange={() => handleVote(position.id, candidate.id)}
                            className="mt-1 mr-4"
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
                                <h4 className="font-bold text-[#1e293b]">{candidate.user.name}</h4>
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

                <button
                  onClick={submitBallot}
                  disabled={Object.keys(votes).length !== selectedElection.positions.length}
                  className="w-full bg-[#1e40af] hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Vote className="w-5 h-5 mr-2" />
                  Submit Ballot
                </button>
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">Elections</h1>
          <p className="text-gray-600">Vote for leadership positions in DEMOSA and your class</p>
        </div>

        {/* Elections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {elections.map((election) => (
            <div
              key={election.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#1e293b] mb-2">{election.title}</h2>
                    <p className="text-gray-600 mb-3">{election.description}</p>
                    {election.yearGroup && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        Class of {election.yearGroup}
                      </span>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${getStatusColor(election.status)}`}>
                    {election.status.toUpperCase()}
                  </span>
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

                <button
                  onClick={() => setSelectedElection(election)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    election.status === 'active'
                      ? 'bg-[#1e40af] hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {election.status === 'active' ? (
                    <>
                      <Vote className="inline-block w-5 h-5 mr-2" />
                      Vote Now
                    </>
                  ) : election.status === 'upcoming' ? (
                    'View Details'
                  ) : (
                    'View Results'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {elections.length === 0 && (
          <div className="text-center py-20">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No elections at this time</h3>
            <p className="text-gray-500">Check back later for upcoming elections</p>
          </div>
        )}
      </div>
    </div>
  );
}
