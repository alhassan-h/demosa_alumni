// Type definitions for DEMOSA application

export interface User {
  id: string;
  name: string;
  email: string;
  graduationYear: number;
  profilePhoto?: string;
  bio?: string;
  occupation?: string;
  location?: string;
  isAdmin?: boolean;
  isYearGroupAdmin?: boolean;
  createdAt: string;
}

export interface NewsPost {
  id: string;
  title: string;
  content: string;
  author: User;
  category: 'general' | 'event' | 'announcement';
  yearGroup?: number; // If null, it's a main DEMOSA post
  imageUrl?: string;
  createdAt: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

export interface Election {
  id: string;
  title: string;
  description: string;
  yearGroup?: number; // If null, it's a main DEMOSA election
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'completed';
  positions: Position[];
}

export interface Position {
  id: string;
  title: string;
  description: string;
  candidates: Candidate[];
}

export interface Candidate {
  id: string;
  user: User;
  manifesto: string;
  votes?: number; // Only visible after election ends
}

export interface ForumTopic {
  id: string;
  title: string;
  content: string;
  author: User;
  yearGroup?: number;
  category: string;
  createdAt: string;
  replies: ForumReply[];
  views: number;
  isPinned: boolean;
}

export interface ForumReply {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  yearGroup?: number;
  coverPhoto?: string;
  photos: Photo[];
  createdBy: User;
  createdAt: string;
  isPublic: boolean;
}

export interface Photo {
  id: string;
  url: string;
  caption?: string;
  uploadedBy: User;
  uploadedAt: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  yearGroup?: number;
  organizer: User;
  attendees: User[];
  imageUrl?: string;
  maxAttendees?: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  postedBy: User;
  postedAt: string;
  applicationUrl?: string;
  isActive: boolean;
}

export interface MentorshipRequest {
  id: string;
  mentee: User;
  expertise: string;
  description: string;
  status: 'pending' | 'matched' | 'completed';
  mentor?: User;
}

export interface Donation {
  id: string;
  donor: User;
  amount: number;
  purpose: string;
  isAnonymous: boolean;
  date: string;
}
