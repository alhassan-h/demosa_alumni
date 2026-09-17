import { useState } from 'react';
import { Image, Calendar, User, Lock, Globe, ChevronRight, Plus } from 'lucide-react';
import { mockAlbums } from '../data/mockData';
import { Album } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';
import { EmptyState } from './shared/EmptyState';

interface AlbumsPageProps {
  currentUser: any;
}

export function AlbumsPage({ currentUser }: AlbumsPageProps) {
  const [albums] = useState<Album[]>(mockAlbums);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  if (selectedAlbum) {
    return (
      <div className="min-h-screen bg-grey-50">
        <PageContainer className="py-8">
          <Button
            variant="link"
            onClick={() => setSelectedAlbum(null)}
            className="mb-6 px-0 text-accent hover:text-accent-dark font-semibold"
          >
            ← Back to Albums
          </Button>

          {/* Album Header */}
          <Card className="p-6 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-navy mb-2">{selectedAlbum.title}</h1>
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
          </Card>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedAlbum.photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-shadow py-0 gap-0">
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
              </Card>
            ))}
          </div>
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-grey-50">
      <PageContainer className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Photo Albums</h1>
          <p className="text-gray-600">Preserve and share memories from your time at DSS</p>
        </div>

        {/* Create Album Button */}
        <div className="mb-6">
          <Button variant="accent" className="h-auto px-6 py-3 rounded-lg font-semibold">
            <Plus className="w-5 h-5 mr-2" />
            Create New Album
          </Button>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Card
              key={album.id}
              onClick={() => setSelectedAlbum(album)}
              className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group py-0 gap-0"
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
                  <h3 className="text-xl font-bold text-navy group-hover:text-accent">
                    {album.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{album.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{album.photos.length} photo{album.photos.length !== 1 ? 's' : ''}</span>
                  {album.yearGroup && <Badge variant="info">Class of {album.yearGroup}</Badge>}
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
            </Card>
          ))}
        </div>

        {albums.length === 0 && (
          <EmptyState
            icon={Image}
            title="No albums yet"
            description="Create an album to start sharing memories!"
          />
        )}
      </PageContainer>
    </div>
  );
}
