import { Navigation } from './Navigation';
import { Calendar, Clock, Video, MapPin, Star, CheckCircle } from 'lucide-react';
import type { Screen } from '../src/types';

interface CounselingHubProps {
  onNavigate: (screen: Screen) => void;
}

export function CounselingHub({ onNavigate }: CounselingHubProps) {
  const upcomingSessions = [
    {
      counselor: 'Dr. Meera Sharma',
      date: 'December 2, 2025',
      time: '3:00 PM - 4:00 PM',
      type: 'Video Session',
      status: 'Confirmed',
    },
  ];

  const counselors = [
    {
      name: 'Dr. Meera Sharma',
      specialty: 'Anxiety & Stress Management',
      experience: '12 years',
      rating: 4.9,
      reviews: 156,
      availability: 'Available today',
      image: 'MS',
      languages: ['English', 'Hindi', 'Marathi'],
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Academic Pressure & Performance',
      experience: '8 years',
      rating: 4.8,
      reviews: 124,
      availability: 'Next available: Tomorrow',
      image: 'RK',
      languages: ['English', 'Hindi', 'Tamil'],
    },
    {
      name: 'Dr. Priya Patel',
      specialty: 'Homesickness & Transition Issues',
      experience: '10 years',
      rating: 5.0,
      reviews: 98,
      availability: 'Available today',
      image: 'PP',
      languages: ['English', 'Hindi', 'Gujarati'],
    },
  ];

  const timeSlots = [
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
    { time: '5:00 PM', available: true },
  ];

  const resources = [
    {
      title: 'Understanding Your First Counseling Session',
      duration: '5 min read',
      type: 'Guide',
    },
    {
      title: 'What to Expect from Campus Counseling',
      duration: '3 min read',
      type: 'FAQ',
    },
    {
      title: 'Preparing for Your Session',
      duration: '4 min read',
      type: 'Tips',
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navigation currentScreen="counseling" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <h1 className="text-3xl mb-6">Counseling Hub</h1>

        {/* Upcoming Sessions */}
        {upcomingSessions.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl mb-4">Upcoming Sessions</h2>
            {upcomingSessions.map((session, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl mb-2">{session.counselor}</h3>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {session.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {session.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {session.type}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {session.status}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                    Join Session
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
                    Reschedule
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Booking */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl mb-4 text-gray-900">Quick Booking - Available Today</h2>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {timeSlots.map((slot, idx) => (
              <button
                key={idx}
                disabled={!slot.available}
                className={`py-3 rounded-lg text-sm transition-colors
                  ${slot.available 
                    ? 'bg-white border border-blue-300 text-blue-900 hover:bg-blue-100' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                {slot.time}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Select a time slot to book with the next available counselor
          </p>
        </div>

        {/* Available Counselors */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Available Counselors</h2>
          <div className="space-y-4">
            {counselors.map((counselor, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    {counselor.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl text-gray-900">{counselor.name}</h3>
                        <p className="text-purple-600">{counselor.specialty}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                          <Star className="w-5 h-5" fill="currentColor" />
                          <span className="text-gray-900">{counselor.rating}</span>
                          <span className="text-gray-500 text-sm">({counselor.reviews})</span>
                        </div>
                        <div className="text-sm text-gray-600">{counselor.experience} experience</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        counselor.availability.includes('today') 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {counselor.availability}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {counselor.languages.map((lang, langIdx) => (
                        <span key={langIdx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                        Book Session
                      </button>
                      <button className="bg-purple-50 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-100 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Types */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Session Types</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <Video className="w-10 h-10 text-purple-500 mb-3" />
              <h3 className="text-gray-900 mb-2">Video Session</h3>
              <p className="text-sm text-gray-600 mb-3">
                Face-to-face counseling from anywhere on campus or hostel
              </p>
              <div className="text-purple-600">45 minutes</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <MapPin className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="text-gray-900 mb-2">In-Person Session</h3>
              <p className="text-sm text-gray-600 mb-3">
                Visit the campus counseling center for private sessions
              </p>
              <div className="text-blue-600">60 minutes</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <Calendar className="w-10 h-10 text-green-500 mb-3" />
              <h3 className="text-gray-900 mb-2">Group Sessions</h3>
              <p className="text-sm text-gray-600 mb-3">
                Join topic-focused group therapy with fellow students
              </p>
              <div className="text-green-600">90 minutes</div>
            </div>
          </div>
        </div>

        {/* Helpful Resources */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl mb-4">First Time Here?</h2>
          <div className="space-y-3">
            {resources.map((resource, idx) => (
              <button key={idx} className="w-full text-left bg-purple-50 hover:bg-purple-100 rounded-lg p-4 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-900 mb-1">{resource.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{resource.type}</span>
                      <span>•</span>
                      <span>{resource.duration}</span>
                    </div>
                  </div>
                  <div className="text-purple-600">→</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
