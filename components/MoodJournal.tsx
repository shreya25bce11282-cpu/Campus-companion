import { Navigation } from './Navigation';
import { TrendingUp, Calendar, Smile, Meh, Frown } from 'lucide-react';
import type { Screen } from '../src/types';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface MoodJournalProps {
  onNavigate: (screen: Screen) => void;
}

export function MoodJournal({ onNavigate }: MoodJournalProps) {
  // Mock mood data for the past 2 weeks
  const moodData = [
    { date: 'Nov 13', mood: 3, label: 'Okay' },
    { date: 'Nov 14', mood: 2, label: 'Down' },
    { date: 'Nov 15', mood: 3, label: 'Okay' },
    { date: 'Nov 16', mood: 4, label: 'Good' },
    { date: 'Nov 17', mood: 3, label: 'Okay' },
    { date: 'Nov 18', mood: 2, label: 'Down' },
    { date: 'Nov 19', mood: 3, label: 'Okay' },
    { date: 'Nov 20', mood: 4, label: 'Good' },
    { date: 'Nov 21', mood: 4, label: 'Good' },
    { date: 'Nov 22', mood: 5, label: 'Great' },
    { date: 'Nov 23', mood: 4, label: 'Good' },
    { date: 'Nov 24', mood: 3, label: 'Okay' },
    { date: 'Nov 25', mood: 4, label: 'Good' },
    { date: 'Nov 26', mood: 4, label: 'Good' },
    { date: 'Nov 27', mood: 5, label: 'Great' },
  ];

  const journalEntries = [
    {
      date: 'November 27, 2025',
      mood: '😊',
      moodLabel: 'Great',
      entry: 'Had a great study session with my hostel friends. Feeling more confident about upcoming exams!',
      activities: ['Studied with friends', 'Called family', 'Exercise'],
    },
    {
      date: 'November 26, 2025',
      mood: '😌',
      moodLabel: 'Good',
      entry: 'Attended the peer support circle. It helped to know others feel homesick too.',
      activities: ['Peer circle', 'Meditation'],
    },
    {
      date: 'November 25, 2025',
      mood: '😌',
      moodLabel: 'Good',
      entry: 'Talked to counselor about managing stress. Got some useful techniques.',
      activities: ['Counseling session', 'Journaling'],
    },
  ];

  const insights = [
    {
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-50',
      title: 'Improving Trend',
      description: 'Your mood has been trending upward over the past week. Keep it up!',
    },
    {
      icon: Smile,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      title: 'Best Days',
      description: 'You feel best on days when you connect with friends and exercise.',
    },
    {
      icon: Calendar,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      title: 'Consistency',
      description: "You've checked in for 7 days straight. Great self-awareness!",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navigation currentScreen="mood" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <h1 className="text-3xl mb-6">Mood Journal</h1>

        {/* Mood Trend Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl mb-4">Your Mood Pattern (Last 2 Weeks)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  stroke="#888"
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  domain={[1, 5]}
                  ticks={[1, 2, 3, 4, 5]}
                  stroke="#888"
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '8px'
                  }}
                  formatter={(value: number, name: string, props: any) => [props.payload.label, 'Mood']}
                />
                <Area 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#a855f7" 
                  strokeWidth={2}
                  fill="url(#colorMood)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Frown className="w-4 h-4 text-red-500" />
              <span>Struggling</span>
            </div>
            <div className="flex items-center gap-2">
              <Meh className="w-4 h-4 text-yellow-500" />
              <span>Okay</span>
            </div>
            <div className="flex items-center gap-2">
              <Smile className="w-4 h-4 text-green-500" />
              <span>Great</span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {insights.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <div key={idx} className={`${insight.bg} rounded-xl p-4 border border-gray-100`}>
                <Icon className={`w-8 h-8 ${insight.color} mb-3`} />
                <h3 className="text-gray-900 mb-2">{insight.title}</h3>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Journal Entries */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl mb-4">Recent Entries</h2>
          <div className="space-y-4">
            {journalEntries.map((entry, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{entry.mood}</span>
                    <div>
                      <div className="text-gray-900">{entry.moodLabel}</div>
                      <div className="text-sm text-gray-500">{entry.date}</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{entry.entry}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.activities.map((activity, actIdx) => (
                    <span key={actIdx} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-3 hover:from-purple-600 hover:to-pink-600 transition-colors">
            View All Entries
          </button>
        </div>
      </div>
    </div>
  );
}
