import { useState } from 'react';
import { MessageSquare, Eye, Pin, Calendar, Send } from 'lucide-react';
import { mockForumTopics } from '../data/mockData';
import { ForumTopic } from '../types';

interface ForumsPageProps {
  currentUser: any;
}

export function ForumsPage({ currentUser }: ForumsPageProps) {
  const [topics] = useState<ForumTopic[]>(mockForumTopics);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reply posted!');
    setReplyText('');
  };

  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedTopic(null)}
            className="mb-6 text-[#1e40af] hover:text-blue-700 font-semibold flex items-center"
          >
            ← Back to Forums
          </button>

          {/* Topic */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-start mb-4">
              {selectedTopic.author.profilePhoto && (
                <img
                  src={selectedTopic.author.profilePhoto}
                  alt={selectedTopic.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
              )}
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="font-bold text-[#1e293b] mr-3">{selectedTopic.author.name}</h3>
                  <span className="text-sm text-gray-500">
                    Class of {selectedTopic.author.graduationYear}
                  </span>
                  {selectedTopic.isPinned && (
                    <Pin className="w-4 h-4 text-[#f59e0b] ml-auto" />
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(selectedTopic.createdAt).toLocaleString()}
                </p>
                <h1 className="text-2xl font-bold text-[#1e293b] mb-4">{selectedTopic.title}</h1>
                <p className="text-gray-700 leading-relaxed">{selectedTopic.content}</p>
              </div>
            </div>
          </div>

          {/* Replies */}
          <div className="space-y-4 mb-6">
            {selectedTopic.replies.map((reply) => (
              <div key={reply.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start">
                  {reply.author.profilePhoto && (
                    <img
                      src={reply.author.profilePhoto}
                      alt={reply.author.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold text-[#1e293b] mr-3">{reply.author.name}</h4>
                      <span className="text-sm text-gray-500">
                        Class of {reply.author.graduationYear}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(reply.createdAt).toLocaleString()}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{reply.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#1e293b] mb-4">Post a Reply</h3>
            <form onSubmit={handleSubmitReply}>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none resize-none"
                rows={4}
                required
              />
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Post Reply
              </button>
            </form>
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">Discussion Forums</h1>
          <p className="text-gray-600">Connect and engage with fellow alumni</p>
        </div>

        {/* Create Topic Button */}
        <div className="mb-6">
          <button className="px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center transition-colors">
            <MessageSquare className="w-5 h-5 mr-2" />
            Start New Discussion
          </button>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          {topics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start flex-1">
                  {topic.author.profilePhoto && (
                    <img
                      src={topic.author.profilePhoto}
                      alt={topic.author.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {topic.isPinned && (
                        <Pin className="w-4 h-4 text-[#f59e0b] mr-2" />
                      )}
                      <h3 className="text-xl font-bold text-[#1e293b] hover:text-[#1e40af]">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-3 line-clamp-2">{topic.content}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <span className="font-semibold">{topic.author.name}</span>
                      <span>•</span>
                      <span>{new Date(topic.createdAt).toLocaleDateString()}</span>
                      {topic.yearGroup && (
                        <>
                          <span>•</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                            Class of {topic.yearGroup}
                          </span>
                        </>
                      )}
                      <span>•</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                        {topic.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex flex-col items-end space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">{topic.replies.length}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Eye className="w-4 h-4 mr-1" />
                    <span className="text-sm">{topic.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {topics.length === 0 && (
          <div className="text-center py-20">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No discussions yet</h3>
            <p className="text-gray-500 mb-6">Be the first to start a conversation!</p>
            <button className="px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold">
              Start New Discussion
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
