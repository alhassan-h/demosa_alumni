import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Plus } from 'lucide-react';
import { mockEvents } from '../data/mockData';
import { Event } from '../types';

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
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-2">Events</h1>
          <p className="text-gray-600">Join us at upcoming alumni gatherings and reunions</p>
        </div>

        {/* Create Event Button */}
        <div className="mb-6">
          <button className="px-6 py-3 bg-[#1e40af] hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Create Event
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => {
            const eventDate = new Date(event.date);
            const isRegistered = registeredEvents.includes(event.id);
            const isFull = isEventFull(event);

            return (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
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
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#1e293b] mb-2">{event.title}</h2>
                        {event.yearGroup && (
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                            Class of {event.yearGroup}
                          </span>
                        )}
                      </div>
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
                      <button
                        onClick={() => handleRegister(event.id)}
                        disabled={isFull && !isRegistered}
                        className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                          isRegistered
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : isFull
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#1e40af] hover:bg-blue-700 text-white'
                        }`}
                      >
                        {isRegistered ? 'Registered ✓' : isFull ? 'Event Full' : 'Register'}
                      </button>
                      <div className="flex items-center text-sm text-gray-600">
                        <span>Organized by {event.organizer.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {events.length === 0 && (
          <div className="text-center py-20">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No upcoming events</h3>
            <p className="text-gray-500 mb-6">Check back soon for new events!</p>
          </div>
        )}
      </div>
    </div>
  );
}
