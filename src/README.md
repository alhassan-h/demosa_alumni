# DEMOSA - Demonstration Secondary School Old Students Association

A comprehensive Next.js-based alumni association platform for connecting graduates, organizing events, managing elections, and fostering community engagement.

## Features

### 🏠 Landing Page
- Welcoming hero section with school branding
- Statistics showcase (5,000+ alumni, 50+ year groups)
- Feature highlights and call-to-action sections
- Latest news preview

### 🔐 Authentication System
- User registration with graduation year
- Login/logout functionality
- Profile management
- Year-group based access control

### 📰 News & Updates
- Main DEMOSA news feed
- Year-group specific announcements
- Like, comment, and share functionality
- Filter by category (general, events, announcements)

### 🗳️ Elections & Voting
- Leadership elections for main DEMOSA and year groups
- Secure ballot submission
- Multiple position voting
- Real-time election status tracking

### 💬 Discussion Forums
- General and year-group specific topics
- Threaded discussions
- Reply and engagement features
- Pinned topics for important discussions

### 📸 Photo Albums & Yearbook
- Create and manage photo albums
- Upload and organize memories
- Public/private album settings
- Year-group galleries

### 📅 Events Calendar
- Upcoming reunions and gatherings
- Event registration system
- RSVP tracking with capacity limits
- Event notifications

### 💼 Job Board
- Career opportunities shared by alumni
- Job posting and application
- Filter by location and industry
- Connect with alumni employers

### 👥 Mentorship Program
- Find mentors in your field
- Become a mentor to help others
- Expertise matching system
- Structured mentorship requests

### ❤️ Donation Portal
- Support scholarships and school development
- Multiple donation amounts
- Track fundraising progress
- Anonymous donation option

## Technology Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React Hooks

## Design Philosophy

The application mirrors the official Demonstration Secondary School website design:
- **Primary Color**: Deep Blue (#1e40af) - representing academic excellence
- **Secondary Color**: Red (#dc2626) - for important actions
- **Accent Color**: Gold/Amber (#f59e0b) - highlighting achievements
- **Typography**: Modern sans-serif with serif headings for formal touch

## Project Structure

```
/
├── App.tsx                      # Main application component with routing
├── types/
│   └── index.ts                 # TypeScript type definitions
├── data/
│   └── mockData.ts             # Mock data for development
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── LandingPage.tsx         # Home page
│   ├── AuthPage.tsx            # Login/Register
│   ├── Dashboard.tsx           # User dashboard
│   ├── NewsPage.tsx            # News feed
│   ├── ElectionsPage.tsx       # Voting system
│   ├── ForumsPage.tsx          # Discussion forums
│   ├── AlbumsPage.tsx          # Photo galleries
│   ├── EventsPage.tsx          # Events calendar
│   ├── JobsPage.tsx            # Job board
│   ├── MentorshipPage.tsx      # Mentorship program
│   └── DonatePage.tsx          # Donation portal
└── styles/
    └── globals.css             # Global styles and theme

```

## API Integration Ready

The application currently uses mock data from `/data/mockData.ts`. To connect to a live API:

1. Replace mock data imports with API calls
2. Update the authentication flow in `AuthPage.tsx`
3. Implement real-time updates for elections and forums
4. Add file upload for photos and documents
5. Integrate payment gateway for donations

### Mock Data Structure

All mock data follows TypeScript interfaces defined in `/types/index.ts`:
- Users with graduation years and profiles
- News posts with year-group filtering
- Elections with positions and candidates
- Forum topics with replies
- Photo albums with privacy controls
- Events with RSVP tracking
- Job postings
- And more...

## Key Features for API Integration

When connecting to your backend API, focus on these endpoints:

- `POST /auth/register` - User registration
- `POST /auth/login` - User authentication
- `GET /news` - Fetch news posts
- `POST /news` - Create news post
- `GET /elections` - Fetch elections
- `POST /elections/:id/vote` - Submit ballot
- `GET /forums` - Fetch forum topics
- `POST /forums/:id/reply` - Post reply
- `GET /events` - Fetch events
- `POST /events/:id/register` - RSVP to event
- `POST /donations` - Process donation

## Responsive Design

The application is fully responsive:
- Mobile-first approach
- Collapsible navigation menu
- Grid layouts that adapt to screen size
- Touch-friendly interactions

## Future Enhancements

- Real-time notifications
- Advanced search and filtering
- Direct messaging between alumni
- Video conferencing for virtual events
- Mobile app (React Native)
- Social media integration
- Payment processing for donations
- Email notifications
- Admin panel for management

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive Web App capabilities ready

---

**Built with ❤️ for the Demonstration Secondary School community**

For questions or support, contact: info@demosa.org
