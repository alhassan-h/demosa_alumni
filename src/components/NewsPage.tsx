import { useState } from 'react';
import { Heart, MessageSquare, Share2, Calendar, Filter, Plus } from 'lucide-react';
import { mockNewsPosts } from '../data/mockData';
import { NewsPost } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';

interface NewsPageProps {
  currentUser: any;
}

const categoryVariant: Record<NewsPost['category'], 'success' | 'info' | 'outline'> = {
  event: 'success',
  announcement: 'info',
  general: 'outline',
};

export function NewsPage({ currentUser }: NewsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'demosa' | 'myClass'>('all');
  const [posts, setPosts] = useState<NewsPost[]>(mockNewsPosts);

  const filteredPosts = posts.filter((post) => {
    if (selectedFilter === 'demosa') return !post.yearGroup;
    if (selectedFilter === 'myClass') return post.yearGroup === currentUser.graduationYear;
    return true;
  });

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const filters: { key: typeof selectedFilter; label: string }[] = [
    { key: 'all', label: 'All News' },
    { key: 'demosa', label: 'DEMOSA News' },
    { key: 'myClass', label: `Class of ${currentUser.graduationYear}` },
  ];

  return (
    <div className="min-h-screen bg-grey-50">
      <PageContainer size="narrow" className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">News & Updates</h1>
          <p className="text-gray-600">Stay connected with the latest from DEMOSA and your class</p>
        </div>

        {/* Filter Tabs */}
        <Card className="p-4 mb-6">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? 'default' : 'secondary'}
                onClick={() => setSelectedFilter(filter.key)}
                className={`h-auto px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap ${
                  selectedFilter === filter.key ? 'bg-navy hover:bg-navy-light' : ''
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </Card>

        {/* News Feed */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow py-0 gap-0">
              {/* Image */}
              {post.imageUrl && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {post.author.profilePhoto && (
                      <img
                        src={post.author.profilePhoto}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-navy">{post.author.name}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        {post.yearGroup && (
                          <>
                            <span>•</span>
                            <span>Class of {post.yearGroup}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <Badge variant={categoryVariant[post.category]}>{post.category.toUpperCase()}</Badge>
                </div>

                {/* Title & Content */}
                <h2 className="text-2xl font-bold text-navy mb-3">{post.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>

                {/* Actions */}
                <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-semibold">{post.comments.length}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Create Post Button */}
        {currentUser.isAdmin || currentUser.isYearGroupAdmin ? (
          <div className="fixed bottom-8 right-8">
            <Button variant="destructive" className="h-auto px-6 py-4 rounded-full shadow-2xl font-semibold">
              <Plus className="w-5 h-5" />
              Create Post
            </Button>
          </div>
        ) : null}
      </PageContainer>
    </div>
  );
}
