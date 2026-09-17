import { useState } from 'react';
import { MessageSquare, Eye, Pin, Calendar, Send } from 'lucide-react';
import { mockForumTopics } from '../data/mockData';
import { ForumTopic } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';
import { EmptyState } from './shared/EmptyState';

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
      <div className="min-h-screen bg-grey-50">
        <PageContainer size="narrow" className="py-8">
          <Button
            variant="link"
            onClick={() => setSelectedTopic(null)}
            className="mb-6 px-0 text-accent hover:text-accent-dark font-semibold"
          >
            ← Back to Forums
          </Button>

          {/* Topic */}
          <Card className="p-6 mb-6">
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
                  <h3 className="font-bold text-navy mr-3">{selectedTopic.author.name}</h3>
                  <span className="text-sm text-gray-500">
                    Class of {selectedTopic.author.graduationYear}
                  </span>
                  {selectedTopic.isPinned && (
                    <Pin className="w-4 h-4 text-warning ml-auto" />
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(selectedTopic.createdAt).toLocaleString()}
                </p>
                <h1 className="text-2xl font-bold text-navy mb-4">{selectedTopic.title}</h1>
                <p className="text-gray-700 leading-relaxed">{selectedTopic.content}</p>
              </div>
            </div>
          </Card>

          {/* Replies */}
          <div className="space-y-4 mb-6">
            {selectedTopic.replies.map((reply) => (
              <Card key={reply.id} className="p-6">
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
                      <h4 className="font-bold text-navy mr-3">{reply.author.name}</h4>
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
              </Card>
            ))}
          </div>

          {/* Reply Form */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-navy mb-4">Post a Reply</h3>
            <form onSubmit={handleSubmitReply}>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full px-4 py-3 border border-input rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring outline-none resize-none bg-input-background"
                rows={4}
                required
              />
              <Button type="submit" variant="accent" className="mt-4 h-auto px-6 py-3 rounded-lg font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Post Reply
              </Button>
            </form>
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
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Discussion Forums</h1>
          <p className="text-gray-600">Connect and engage with fellow alumni</p>
        </div>

        {/* Create Topic Button */}
        <div className="mb-6">
          <Button variant="accent" className="h-auto px-6 py-3 rounded-lg font-semibold">
            <MessageSquare className="w-5 h-5 mr-2" />
            Start New Discussion
          </Button>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          {topics.map((topic) => (
            <Card
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="p-6 hover:shadow-xl transition-shadow cursor-pointer"
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
                        <Pin className="w-4 h-4 text-warning mr-2" />
                      )}
                      <h3 className="text-xl font-bold text-navy hover:text-accent">
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
                          <Badge variant="info">Class of {topic.yearGroup}</Badge>
                        </>
                      )}
                      <span>•</span>
                      <Badge variant="outline">{topic.category}</Badge>
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
            </Card>
          ))}
        </div>

        {topics.length === 0 && (
          <EmptyState
            icon={MessageSquare}
            title="No discussions yet"
            description="Be the first to start a conversation!"
            action={{ label: 'Start New Discussion', onClick: () => {} }}
          />
        )}
      </PageContainer>
    </div>
  );
}
