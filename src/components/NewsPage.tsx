import { useState } from 'react';
import { Heart, MessageSquare, Share2, Calendar, Filter } from 'lucide-react';
import { mockNewsPosts } from '../data/mockData';
import { NewsPost } from '../types';

interface NewsPageProps {
  currentUser: any;
}

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

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">News & Updates</h1>
          <p className="text-gray-600">Stay connected with the latest from DEMOSA and your class</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-[#1e40af] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All News
            </button>
            <button
              onClick={() => setSelectedFilter('demosa')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors ${
                selectedFilter === 'demosa'
                  ? 'bg-[#1e40af] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              DEMOSA News
            </button>
            <button
              onClick={() => setSelectedFilter('myClass')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors ${
                selectedFilter === 'myClass'
                  ? 'bg-[#1e40af] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Class of {currentUser.graduationYear}
            </button>
          </div>
        </div>

        {/* News Feed */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
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
                      <p className="font-semibold text-[#1e293b]">{post.author.name}</p>
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
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.category === 'event'
                        ? 'bg-green-100 text-green-700'
                        : post.category === 'announcement'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {post.category.toUpperCase()}
                  </span>
                </div>

                {/* Title & Content */}
                <h2 className="text-2xl font-bold text-[#1e293b] mb-3">{post.title}</h2>
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
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#1e40af] transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-semibold">{post.comments.length}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#1e40af] transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Create Post Button */}
        {currentUser.isAdmin || currentUser.isYearGroupAdmin ? (
          <div className="fixed bottom-8 right-8">
            <button className="bg-[#dc2626] hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl font-semibold flex items-center space-x-2 transition-colors">
              <span className="text-2xl">+</span>
              <span>Create Post</span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
