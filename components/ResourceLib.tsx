import { Navigation } from './Navigation';
import { BookOpen, Video, Headphones, FileText, Search, Heart, Brain, Users, Clock } from 'lucide-react';
import type { Screen } from '../src/types';

interface ResourceLibraryProps {
  onNavigate: (screen: Screen) => void;
}

export function ResourceLibrary({ onNavigate }: ResourceLibraryProps) {
  const categories = [
    { name: 'Homesickness', icon: Heart, count: 12, color: 'bg-pink-100 text-pink-600' },
    { name: 'Exam Anxiety', icon: Brain, count: 18, color: 'bg-purple-100 text-purple-600' },
    { name: 'Social Skills', icon: Users, count: 15, color: 'bg-blue-100 text-blue-600' },
    { name: 'Time Management', icon: Clock, count: 10, color: 'bg-green-100 text-green-600' },
  ];

  const featuredResources = [
    {
      title: 'Managing Homesickness: A Guide for Freshers',
      type: 'Article',
      icon: FileText,
      duration: '8 min read',
      category: 'Homesickness',
      color: 'text-pink-600',
      description: 'Practical strategies to cope with missing home while building your new life on campus.',
    },
    {
      title: 'Guided Meditation for Exam Stress',
      type: 'Audio',
      icon: Headphones,
      duration: '15 min',
      category: 'Exam Anxiety',
      color: 'text-purple-600',
      description: 'Calm your mind and reduce anxiety before important exams.',
    },
    {
      title: 'Making Friends in Hostel Life',
      type: 'Video',
      icon: Video,
      duration: '12 min',
      category: 'Social Skills',
      color: 'text-blue-600',
      description: 'Tips and techniques to connect with hostel-mates and build lasting friendships.',
    },
  ];

  const popularGuides = [
    {
      title: 'First Week Survival Guide',
      reads: '2.3k',
      rating: 4.9,
    },
    {
      title: 'Dealing with Academic Pressure',
      reads: '1.8k',
      rating: 4.8,
    },
    {
      title: 'Self-Care Routine for Students',
      reads: '1.5k',
      rating: 4.7,
    },
    {
      title: 'Understanding Depression & Anxiety',
      reads: '3.1k',
      rating: 5.0,
    },
    {
      title: 'Building Healthy Sleep Habits',
      reads: '1.2k',
      rating: 4.6,
    },
  ];

  const quickTools = [
    {
      title: '5-Minute Breathing Exercise',
      description: 'Quick stress relief technique',
      color: 'bg-blue-500',
    },
    {
      title: 'Gratitude Journal Prompt',
      description: 'Daily positivity practice',
      color: 'bg-green-500',
    },
    {
      title: 'Energy Boost Workout',
      description: '10-minute hostel room exercise',
      color: 'bg-orange-500',
    },
    {
      title: 'Focus & Concentration Music',
      description: 'Study playlist',
      color: 'bg-purple-500',
    },
  ];

  const workshops = [
    {
      title: 'Stress Management Workshop',
      date: 'Dec 5, 2025',
      time: '4:00 PM',
      spots: 12,
      registered: false,
    },
    {
      title: 'Time Management for Students',
      date: 'Dec 8, 2025',
      time: '3:00 PM',
      spots: 8,
      registered: true,
    },
    {
      title: 'Building Resilience',
      date: 'Dec 12, 2025',
      time: '5:00 PM',
      spots: 15,
      registered: false,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navigation currentScreen="resources" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <h1 className="text-3xl mb-6">Resource Library</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, videos, guides..."
              className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-purple-300"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Browse by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <button key={idx} className={`${category.color} rounded-xl p-4 hover:opacity-80 transition-opacity`}>
                  <Icon className="w-8 h-8 mb-2" />
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm opacity-80">{category.count} resources</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Featured for You</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredResources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-purple-300 transition-colors cursor-pointer">
                  <div className={`w-12 h-12 ${resource.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${resource.color}`} />
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{resource.type} · {resource.duration}</div>
                  <h3 className="text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <div className="text-sm text-purple-600">Read more →</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Tools */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Quick Wellness Tools</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {quickTools.map((tool, idx) => (
              <button key={idx} className={`${tool.color} text-white rounded-xl p-6 hover:opacity-90 transition-opacity text-left`}>
                <h3 className="mb-2">{tool.title}</h3>
                <p className="text-sm opacity-90">{tool.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Guides */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl mb-4">Most Popular</h2>
            <div className="space-y-3">
              {popularGuides.map((guide, idx) => (
                <button key={idx} className="w-full text-left bg-gray-50 hover:bg-purple-50 rounded-lg p-3 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-900">{guide.title}</h3>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      ★ {guide.rating}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{guide.reads} reads</div>
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Workshops */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white shadow-sm">
            <h2 className="text-2xl mb-4">Upcoming Workshops</h2>
            <div className="space-y-3">
              {workshops.map((workshop, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="mb-2">{workshop.title}</h3>
                  <div className="text-sm opacity-90 mb-3">
                    {workshop.date} at {workshop.time}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">{workshop.spots} spots left</div>
                    <button className={`${workshop.registered ? 'bg-white/20' : 'bg-white text-purple-600'} px-4 py-1 rounded-lg text-sm`}>
                      {workshop.registered ? 'Registered ✓' : 'Register'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reading Lists */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Curated Reading Lists</h2>
            <button className="text-purple-600 text-sm">View All →</button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <BookOpen className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="text-gray-900 mb-1">First Month Essentials</h3>
              <p className="text-sm text-gray-600 mb-2">Everything you need for smooth transition</p>
              <div className="text-sm text-purple-600">8 articles</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <BookOpen className="w-8 h-8 text-blue-500 mb-2" />
              <h3 className="text-gray-900 mb-1">Exam Season Toolkit</h3>
              <p className="text-sm text-gray-600 mb-2">Strategies for managing exam pressure</p>
              <div className="text-sm text-blue-600">12 articles</div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <BookOpen className="w-8 h-8 text-green-500 mb-2" />
              <h3 className="text-gray-900 mb-1">Mental Health Basics</h3>
              <p className="text-sm text-gray-600 mb-2">Understanding and caring for your mind</p>
              <div className="text-sm text-green-600">10 articles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
