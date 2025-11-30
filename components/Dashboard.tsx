import { useState } from 'react';
import { Navigation } from './Navigation';
import { Heart, TrendingUp, Users, Calendar, MessageCircle, Sparkles, Phone } from 'lucide-react';
import type { Screen } from '../src/types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [checkInComplete, setCheckInComplete] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'bot' | 'user', text: string }>>([
    { type: 'bot', text: "Hey there! How's your day going in the hostel? 😊" }
  ]);
  const [inputText, setInputText] = useState('');

  const moods = [
    { emoji: '😊', label: 'Great', color: 'bg-green-100 border-green-300' },
    { emoji: '😌', label: 'Okay', color: 'bg-blue-100 border-blue-300' },
    { emoji: '😐', label: 'Meh', color: 'bg-yellow-100 border-yellow-300' },
    { emoji: '😔', label: 'Down', color: 'bg-orange-100 border-orange-300' },
    { emoji: '😢', label: 'Struggling', color: 'bg-red-100 border-red-300' },
  ];

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setChatMessages([...chatMessages, { type: 'user', text: inputText }]);
      
      setTimeout(() => {
        let response = '';
        if (inputText.toLowerCase().includes('stress') || inputText.toLowerCase().includes('exam')) {
          response = "I hear you. Exam stress is real! Would you like some quick stress-relief techniques or want to connect with peers who get it?";
        } else if (inputText.toLowerCase().includes('home') || inputText.toLowerCase().includes('family')) {
          response = "Missing home is totally normal. Have you called your family today? Or maybe join our 'Homesickness Circle' to talk with others feeling the same?";
        } else if (inputText.toLowerCase().includes('friend') || inputText.toLowerCase().includes('lonely')) {
          response = "I'm here for you. Check out the Hostel Circles in Peer Support - great way to meet people facing similar experiences!";
        } else {
          response = "Thanks for sharing. Remember, it's okay to feel this way. Would you like some coping activities or want to explore our resources?";
        }
        setChatMessages(prev => [...prev, { type: 'bot', text: response }]);
      }, 1000);
      
      setInputText('');
      setCheckInComplete(true);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Navigation currentScreen="dashboard" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Welcome Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Welcome back, Priya! 👋</h1>
          <p className="text-gray-600">Thursday, November 27, 2025</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-purple-500" />
              <span className="text-sm text-gray-600">Check-in Streak</span>
            </div>
            <div className="text-2xl text-purple-600">7 days</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600">Mood Trend</span>
            </div>
            <div className="text-2xl text-blue-600">↑ Better</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">Peer Circles</span>
            </div>
            <div className="text-2xl text-green-600">3 active</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-pink-500" />
              <span className="text-sm text-gray-600">Next Session</span>
            </div>
            <div className="text-sm text-pink-600">Dec 2, 3 PM</div>
          </div>
        </div>

        {/* Daily Check-in */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-2xl">Daily Check-in</h2>
          </div>
          
          {!checkInComplete ? (
            <>
              <p className="mb-4 opacity-90">How are you feeling today?</p>
              <div className="grid grid-cols-5 gap-3 mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => handleMoodSelect(mood.label)}
                    className={`${selectedMood === mood.label ? 'bg-white/30 scale-105' : 'bg-white/10'} 
                      backdrop-blur-sm rounded-xl p-4 border-2 border-white/20 hover:bg-white/20 transition-all`}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <div className="text-sm">{mood.label}</div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
              <p className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                Check-in complete! You're doing great by checking in with yourself.
              </p>
            </div>
          )}

          {/* Chat Interface */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${msg.type === 'user' ? 'bg-white text-purple-600' : 'bg-white/20 text-white'} 
                    rounded-2xl px-4 py-2 max-w-xs`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Share what's on your mind..."
                className="flex-1 bg-white/20 border border-white/30 rounded-full px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:bg-white/30"
              />
              <button
                onClick={handleSendMessage}
                className="bg-white text-purple-600 rounded-full px-6 py-2 hover:bg-purple-50 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-purple-500" />
              Suggested for You
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('peer')}
                className="w-full text-left bg-purple-50 hover:bg-purple-100 rounded-lg p-3 transition-colors"
              >
                <div className="text-purple-900">Join "First Semester Stress" Circle</div>
                <div className="text-sm text-purple-600">12 peers online now</div>
              </button>
              <button 
                onClick={() => onNavigate('resources')}
                className="w-full text-left bg-blue-50 hover:bg-blue-100 rounded-lg p-3 transition-colors"
              >
                <div className="text-blue-900">Read: Managing Homesickness</div>
                <div className="text-sm text-blue-600">5 min read</div>
              </button>
              <button className="w-full text-left bg-green-50 hover:bg-green-100 rounded-lg p-3 transition-colors">
                <div className="text-green-900">Try: 5-Minute Breathing Exercise</div>
                <div className="text-sm text-green-600">Quick stress relief</div>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-sm">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6" />
              Need Immediate Support?
            </h3>
            <p className="mb-4 opacity-90">
              If you're in crisis or need to talk to someone right now, we're here 24/7.
            </p>
            <button 
              onClick={() => onNavigate('emergency')}
              className="w-full bg-white text-red-600 rounded-lg py-3 hover:bg-red-50 transition-colors"
            >
              Access Emergency Support
            </button>
            <div className="mt-4 text-sm opacity-80">
              All conversations are confidential and judgment-free
            </div>
          </div>
        </div>

        {/* Today's Nudge */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-xl mb-2 text-gray-800">Today's Wellness Nudge 🌟</h3>
          <p className="text-gray-700">
            "Take a 10-minute walk with a hostel friend before dinner tonight. Fresh air + connection = instant mood boost!"
          </p>
        </div>
      </div>
    </div>
  );
}
