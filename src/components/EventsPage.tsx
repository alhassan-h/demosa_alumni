import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Plus } from 'lucide-react';
import { mockEvents } from '../data/mockData';
import { Event } from '../types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PageContainer } from './shared/PageContainer';
import { EmptyState } from './shared/EmptyState';

interface EventsPageProps {
  currentUser: any;
}

export function EventsPage({ currentUser }: EventsPageProps) {
  const [events] = useState<Event[]>(mockEvents);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const handleRegister = (eventId: string) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter((id) => id !== eventId));
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

  const isEventFull = (event: Event) => {
    return event.maxAttendees && event.attendees.length >= event.maxAttendees;
  };

  return (
    <div className="min-h-screen bg-grey-50">
      <PageContainer className="py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">Events</h1>
          <p className="text-gray-600">Join us at upcoming alumni gatherings and reunions</p>
        </div>

        {/* Create Event Button */}
        <div className="mb-6">
          <Button variant="accent" className="h-auto px-6 py-3 rounded-lg font-semibold">
            <Plus className="w-5 h-5 mr-2" />
            Create Event
          </Button>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => {
            const eventDate = new Date(event.date);
            const isRegistered = registeredEvents.includes(event.id);
            const isFull = isEventFull(event);

            return (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow py-0 gap-0">
                <div className="md:flex">
                  {/* Image */}
                  {event.imageUrl && (
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-navy mb-2">{event.title}</h2>
                      {event.yearGroup && (
                        <Badge variant="info" className="mb-3">Class of {event.yearGroup}</Badge>
                      )}
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span className="font-semibold">
                          {eventDate.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span>
                          {eventDate.toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span>
                          {event.attendees.length} attending
                          {event.maxAttendees && ` / ${event.maxAttendees} max`}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={() => handleRegister(event.id)}
                        disabled={isFull && !isRegistered}
                        className={`h-auto px-6 py-3 ${
                          isRegistered
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : isFull
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-accent hover:bg-accent-dark text-white'
                        }`}
                      >
                        {isRegistered ? 'Registered ✓' : isFull ? 'Event Full' : 'Register'}
                      </Button>
                      <div className="flex items-center text-sm text-gray-600">
                        <span>Organized by {event.organizer.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {events.length === 0 && (
          <EmptyState
            icon={Calendar}
            title="No upcoming events"
            description="Check back soon for new events!"
          />
        )}
      </PageContainer>
    </div>
  );
}
