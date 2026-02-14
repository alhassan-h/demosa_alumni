// Mock data for DEMOSA application - Can be replaced with API calls

import { User, NewsPost, Election, ForumTopic, Album, Event, Job, Candidate, Position } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Adebayo Johnson',
    email: 'adebayo.j@example.com',
    graduationYear: 2017,
    profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    bio: 'Software Engineer at Google',
    occupation: 'Software Engineer',
    location: 'Lagos, Nigeria',
    isAdmin: true,
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Chioma Okafor',
    email: 'chioma.o@example.com',
    graduationYear: 2017,
    profilePhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    bio: 'Medical Doctor specializing in Pediatrics',
    occupation: 'Medical Doctor',
    location: 'Abuja, Nigeria',
    isYearGroupAdmin: true,
    createdAt: '2024-01-16T11:00:00Z',
  },
  {
    id: '3',
    name: 'Ibrahim Mohammed',
    email: 'ibrahim.m@example.com',
    graduationYear: 2015,
    profilePhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    bio: 'Entrepreneur and Business Consultant',
    occupation: 'CEO, TechStart Nigeria',
    location: 'Zaria, Nigeria',
    createdAt: '2024-01-10T09:00:00Z',
  },
  {
    id: '4',
    name: 'Fatima Abdullahi',
    email: 'fatima.a@example.com',
    graduationYear: 2018,
    profilePhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    bio: 'Lawyer and Human Rights Advocate',
    occupation: 'Legal Practitioner',
    location: 'Kaduna, Nigeria',
    createdAt: '2024-01-20T14:00:00Z',
  },
];

// Mock News Posts
export const mockNewsPosts: NewsPost[] = [
  {
    id: '1',
    title: 'DEMOSA Annual Homecoming 2026 - Save the Date!',
    content: 'We are excited to announce the DEMOSA Annual Homecoming scheduled for March 15, 2026. Join us for a weekend of reconnection, celebration, and school pride. Activities include campus tours, gala dinner, sports competitions, and more. Register early to secure your spot!',
    author: mockUsers[0],
    category: 'event',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop',
    createdAt: '2026-01-15T10:00:00Z',
    likes: 234,
    comments: [
      {
        id: 'c1',
        content: 'Looking forward to this! Can\'t wait to see everyone again.',
        author: mockUsers[1],
        createdAt: '2026-01-15T12:00:00Z',
      },
    ],
  },
  {
    id: '2',
    title: 'Class of 2017 - 10 Year Reunion Planning',
    content: 'Class of 2017 members, it\'s almost our 10-year anniversary! We\'re forming a planning committee for our special reunion. If you\'d like to contribute ideas or volunteer, please reach out. Let\'s make it memorable!',
    author: mockUsers[1],
    category: 'announcement',
    yearGroup: 2017,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop',
    createdAt: '2026-01-18T14:30:00Z',
    likes: 89,
    comments: [],
  },
  {
    id: '3',
    title: 'DEMOSA Scholarship Fund Reaches ₦5 Million Milestone',
    content: 'Thanks to the generosity of our alumni community, the DEMOSA Scholarship Fund has reached ₦5 million! These funds will support deserving students at Demonstration Secondary School. Thank you to all contributors for investing in the next generation.',
    author: mockUsers[0],
    category: 'announcement',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop',
    createdAt: '2026-01-12T09:00:00Z',
    likes: 456,
    comments: [],
  },
  {
    id: '4',
    title: 'Career Mentorship Program Launch',
    content: 'We\'re launching a new Career Mentorship Program to connect experienced alumni with recent graduates and young professionals. Whether you\'re looking for guidance or willing to share your expertise, sign up today!',
    author: mockUsers[2],
    category: 'general',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop',
    createdAt: '2026-01-10T16:00:00Z',
    likes: 178,
    comments: [],
  },
];

// Mock Elections
export const mockElections: Election[] = [
  {
    id: '1',
    title: 'DEMOSA National Executive Elections 2026',
    description: 'Vote for the next DEMOSA National Executive Committee members who will serve a 2-year term.',
    startDate: '2026-02-01T00:00:00Z',
    endDate: '2026-02-15T23:59:59Z',
    status: 'upcoming',
    positions: [
      {
        id: 'p1',
        title: 'National President',
        description: 'Lead the DEMOSA executive committee and represent all alumni',
        candidates: [
          {
            id: 'c1',
            user: mockUsers[0],
            manifesto: 'I pledge to strengthen alumni engagement, expand mentorship programs, and increase fundraising for school development.',
          },
          {
            id: 'c2',
            user: mockUsers[2],
            manifesto: 'My vision is to modernize DEMOSA operations, create more networking opportunities, and enhance our digital presence.',
          },
        ],
      },
      {
        id: 'p2',
        title: 'Secretary General',
        description: 'Manage communications and record keeping for DEMOSA',
        candidates: [
          {
            id: 'c3',
            user: mockUsers[1],
            manifesto: 'I will ensure transparent communication, maintain accurate records, and improve member engagement.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Class of 2017 Leadership Elections',
    description: 'Choose your class representatives for the upcoming term.',
    yearGroup: 2017,
    startDate: '2026-01-25T00:00:00Z',
    endDate: '2026-02-05T23:59:59Z',
    status: 'active',
    positions: [
      {
        id: 'p3',
        title: 'Class President',
        description: 'Coordinate class activities and represent Class of 2017',
        candidates: [
          {
            id: 'c4',
            user: mockUsers[1],
            manifesto: 'Let\'s make our 10-year reunion unforgettable and strengthen our class bond!',
          },
        ],
      },
    ],
  },
];

// Mock Forum Topics
export const mockForumTopics: ForumTopic[] = [
  {
    id: '1',
    title: 'Favorite School Memories - Share Your Stories!',
    content: 'What\'s your most memorable moment from your time at Demonstration Secondary School? Let\'s take a trip down memory lane!',
    author: mockUsers[1],
    category: 'General Discussion',
    createdAt: '2026-01-10T10:00:00Z',
    replies: [
      {
        id: 'r1',
        content: 'Inter-house sports day 2016! Our house won after 5 years of trying. The celebration was epic!',
        author: mockUsers[0],
        createdAt: '2026-01-10T11:30:00Z',
      },
      {
        id: 'r2',
        content: 'The cultural day performances were always amazing. I still remember our traditional dance routine.',
        author: mockUsers[3],
        createdAt: '2026-01-10T14:00:00Z',
      },
    ],
    views: 234,
    isPinned: true,
  },
  {
    id: '2',
    title: 'Job Opportunities in Tech - Class of 2017',
    content: 'Anyone hiring software developers? Let\'s help each other out!',
    author: mockUsers[0],
    yearGroup: 2017,
    category: 'Career',
    createdAt: '2026-01-15T09:00:00Z',
    replies: [],
    views: 67,
    isPinned: false,
  },
];

// Mock Albums
export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'Graduation Day 2017',
    description: 'Memories from our graduation ceremony',
    yearGroup: 2017,
    coverPhoto: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
    photos: [
      {
        id: 'ph1',
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
        caption: 'Group photo at the ceremony',
        uploadedBy: mockUsers[1],
        uploadedAt: '2026-01-10T10:00:00Z',
        tags: ['graduation', '2017'],
      },
      {
        id: 'ph2',
        url: 'https://images.unsplash.com/photo-1627556704302-624c803fdf50?w=800&h=600&fit=crop',
        caption: 'Receiving certificates',
        uploadedBy: mockUsers[0],
        uploadedAt: '2026-01-10T11:00:00Z',
        tags: ['graduation', 'ceremony'],
      },
    ],
    createdBy: mockUsers[1],
    createdAt: '2026-01-10T10:00:00Z',
    isPublic: true,
  },
  {
    id: '2',
    title: 'DEMOSA 50th Anniversary Celebration',
    description: 'Golden Jubilee celebrations',
    coverPhoto: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
    photos: [
      {
        id: 'ph3',
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
        caption: 'Anniversary gala dinner',
        uploadedBy: mockUsers[0],
        uploadedAt: '2026-01-05T10:00:00Z',
        tags: ['anniversary', 'gala'],
      },
    ],
    createdBy: mockUsers[0],
    createdAt: '2026-01-05T10:00:00Z',
    isPublic: true,
  },
];

// Mock Events
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'DEMOSA Annual Homecoming 2026',
    description: 'Join us for a weekend of celebration, networking, and reconnection with fellow alumni.',
    date: '2026-03-15T09:00:00Z',
    location: 'Demonstration Secondary School Campus, Zaria',
    organizer: mockUsers[0],
    attendees: [mockUsers[0], mockUsers[1], mockUsers[2]],
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
    maxAttendees: 500,
  },
  {
    id: '2',
    title: 'Class of 2017 - 10 Year Reunion',
    description: 'Celebrate a decade since graduation with your classmates!',
    date: '2027-06-12T18:00:00Z',
    location: 'Transcorp Hilton, Abuja',
    yearGroup: 2017,
    organizer: mockUsers[1],
    attendees: [mockUsers[0], mockUsers[1]],
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=400&fit=crop',
    maxAttendees: 150,
  },
  {
    id: '3',
    title: 'Alumni Networking Mixer - Tech Professionals',
    description: 'Connect with fellow alumni working in the technology sector.',
    date: '2026-02-20T17:00:00Z',
    location: 'Lagos Tech Hub, Victoria Island',
    organizer: mockUsers[0],
    attendees: [mockUsers[0]],
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop',
    maxAttendees: 50,
  },
];

// Mock Jobs
export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechStart Nigeria',
    location: 'Lagos, Nigeria (Hybrid)',
    description: 'We are looking for an experienced software engineer to join our growing team. Requirements: 5+ years experience, proficiency in React, Node.js, and cloud technologies.',
    postedBy: mockUsers[2],
    postedAt: '2026-01-15T10:00:00Z',
    applicationUrl: 'https://example.com/apply',
    isActive: true,
  },
  {
    id: '2',
    title: 'Legal Associate',
    company: 'Abdullahi & Partners',
    location: 'Abuja, Nigeria',
    description: 'Seeking a qualified legal associate with 2-3 years experience in corporate law and litigation.',
    postedBy: mockUsers[3],
    postedAt: '2026-01-18T14:00:00Z',
    applicationUrl: 'https://example.com/apply',
    isActive: true,
  },
];

// Mock current user (for demo purposes)
export const mockCurrentUser: User = mockUsers[0];
