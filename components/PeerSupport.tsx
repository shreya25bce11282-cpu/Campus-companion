import { Navigation } from './Navigation';
import { Users, MessageCircle, Lock, TrendingUp, Heart, BookOpen } from 'lucide-react';
import type { Screen } from '../src/types';

interface PeerSupportProps {
  onNavigate: (screen: Screen) => void;
}

export function PeerSupport({ onNavigate }: PeerSupportProps) {
  const myCircles = [
    {
      name: 'First Semester Stress',
      members: 24,
      online: 12,
      lastActivity: '5 min ago',
      color: 'bg-purple-500',
      unread: 3,
    },
    {
      name: 'Homesickness Support',
      members: 18,
      online: 8,
      lastActivity: '1 hour ago',
      color: 'bg-blue-500',
      unread: 0,
    },
    {
      name: 'Girls Hostel - Block A',
      members: 32,
      online: 15,
      lastActivity: '10 min ago',
      color: 'bg-pink-500',
      unread: 7,
    },
  ];

  const discoverCircles = [
    {
      name: 'Exam Anxiety Warriors',
      members: 45,
      description: 'Safe space to discuss exam stress and share study strategies',
      color: 'bg-orange-500',
      category: 'Academic',
    },
    {
      name: 'International Students Connect',
      members: 28,
      description: 'For students far from home navigating cultural adjustments',
      color: 'bg-green-500',
      category: 'Social',
    },
    {
      name: 'Night Owls Study Group',
      members: 19,
      description: 'Late-night study support and motivation',
      color: 'bg-indigo-500',
      category: 'Academic',
    },
    {
      name: 'Fitness & Wellness',
      members: 36,
      description: 'Stay active, reduce stress, and support each other',
      color: 'bg-teal-500',
      category: 'Wellness',
    },
  ];

  const buddyMatches = [
    {
      name: 'Rahul M.',
      year: '1st Year, Engineering',
      similarity: '85% match',
      interests: ['Missing home', 'Exam stress', 'Making friends'],
      avatar: 'RM',
    },
    {
      name: 'Anjali K.',
      year: '1st Year, Commerce',
      similarity: '82% match',
      interests: ['Time management', 'Hostel life', 'Study tips'],
      avatar: 'AK',
    },
  ];

  const challenges = [
    {
      title: '30 Days of Gratitude',
      participants: 156,
      daysLeft: 12,
      icon: Heart,
      color: 'bg-pink-100 text-pink-600',
    },
    {
      title: 'Study Together Challenge',
      participants: 89,
      daysLeft: 5,
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Daily Wellness Streak',
      participants: 203,
      daysLeft: 20,
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600',
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navigation currentScreen="peer" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <h1 className="text-3xl mb-6">Peer Support</h1>

        {/* My Circles */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">My Circles</h2>
          <div className="space-y-3">
            {myCircles.map((circle, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-purple-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`${circle.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-gray-900">{circle.name}</h3>
                        {circle.unread > 0 && (
                          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            {circle.unread}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        {circle.members} members · {circle.online} online · {circle.lastActivity}
                      </div>
                    </div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buddy System */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white mb-4">
            <h2 className="text-2xl mb-2">Buddy System</h2>
            <p className="opacity-90">AI-matched peers facing similar challenges. Start a conversation!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {buddyMatches.map((buddy, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white">
                    {buddy.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900">{buddy.name}</h3>
                    <div className="text-sm text-gray-600">{buddy.year}</div>
                    <div className="text-sm text-purple-600 mt-1">{buddy.similarity}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {buddy.interests.map((interest, intIdx) => (
                    <span key={intIdx} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-purple-500 text-white rounded-lg py-2 hover:bg-purple-600 transition-colors">
                  Send Message
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Gamified Challenges */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Active Challenges</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className={`w-12 h-12 ${challenge.color} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{challenge.title}</h3>
                  <div className="text-sm text-gray-600 mb-3">
                    {challenge.participants} participants
                  </div>
                  <div className="text-sm text-purple-600 mb-3">
                    {challenge.daysLeft} days remaining
                  </div>
                  <button className="w-full bg-purple-50 text-purple-600 rounded-lg py-2 hover:bg-purple-100 transition-colors">
                    Join Challenge
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Discover More Circles */}
        <div>
          <h2 className="text-xl mb-4">Discover More Circles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {discoverCircles.map((circle, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`${circle.color} w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-gray-900">{circle.name}</h3>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                        {circle.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{circle.description}</p>
                    <div className="text-sm text-gray-500">{circle.members} members</div>
                  </div>
                </div>
                <button className="w-full bg-purple-500 text-white rounded-lg py-2 hover:bg-purple-600 transition-colors">
                  Join Circle
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Anonymous Vent Space */}
        <div className="mt-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-3">
            <Lock className="w-8 h-8 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl mb-2">Anonymous Vent Space</h2>
              <p className="opacity-90 mb-4">
                Share what's bothering you without revealing your identity. Sometimes you just need to let it out.
              </p>
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                Share Anonymously
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
