import { useState } from 'react';
import { Image, Calendar, User, Lock, Globe, ChevronRight } from 'lucide-react';
import { mockAlbums } from '../data/mockData';
import { Album } from '../types';

interface AlbumsPageProps {
  currentUser: any;
}

export function AlbumsPage({ currentUser }: AlbumsPageProps) {
  const [albums] = useState<Album[]>(mockAlbums);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  if (selectedAlbum) {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedAlbum(null)}
            className="mb-6 text-[#1e40af] hover:text-blue-700 font-semibold flex items-center"
          >
            ← Back to Albums
          </button>

          {/* Album Header */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-[#1e293b] mb-2">{selectedAlbum.title}</h1>
                <p className="text-gray-600 mb-4">{selectedAlbum.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{selectedAlbum.createdBy.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(selectedAlbum.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    {selectedAlbum.isPublic ? (
                      <>
                        <Globe className="w-4 h-4 mr-1" />
                        <span>Public</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-1" />
                        <span>Private</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedAlbum.photos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={photo.url}
                  alt={photo.caption || 'Photo'}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  {photo.caption && (
                    <p className="text-gray-700 mb-2">{photo.caption}</p>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{photo.uploadedBy.name}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(photo.uploadedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">Photo Albums</h1>
          <p className="text-gray-600">Preserve and share memories from your time at DSS</p>
        </div>

        {/* Create Album Button */}
        <div className="mb-6">
          <button className="px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center transition-colors">
            <Image className="w-5 h-5 mr-2" />
            Create New Album
          </button>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              onClick={() => setSelectedAlbum(album)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              {/* Cover Photo */}
              <div className="h-48 overflow-hidden bg-gray-200">
                {album.coverPhoto ? (
                  <img
                    src={album.coverPhoto}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Album Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#1e293b] group-hover:text-[#1e40af]">
                    {album.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1e40af] transition-colors" />
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{album.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{album.photos.length} photo{album.photos.length !== 1 ? 's' : ''}</span>
                  {album.yearGroup && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      Class of {album.yearGroup}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-center text-xs text-gray-500">
                  {album.isPublic ? (
                    <>
                      <Globe className="w-3 h-3 mr-1" />
                      <span>Public</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3 mr-1" />
                      <span>Private</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {albums.length === 0 && (
          <div className="text-center py-20">
            <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No albums yet</h3>
            <p className="text-gray-500 mb-6">Create an album to start sharing memories!</p>
          </div>
        )}
      </div>
    </div>
  );
}
