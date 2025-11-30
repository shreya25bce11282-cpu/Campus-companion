import { Home, BarChart3, Users, Calendar, BookOpen, Phone } from 'lucide-react';
import type { Screen } from '../src/types';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'dashboard' as Screen, icon: Home, label: 'Home' },
    { id: 'mood' as Screen, icon: BarChart3, label: 'Mood' },
    { id: 'peer' as Screen, icon: Users, label: 'Peers' },
    { id: 'counseling' as Screen, icon: Calendar, label: 'Counseling' },
    { id: 'resources' as Screen, icon: BookOpen, label: 'Resources' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          <div className="flex items-center gap-2 text-purple-600">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
              CC
            </div>
            <span className="text-xl">Campus Companion</span>
          </div>
          <button 
            onClick={() => onNavigate('emergency')}
            className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            SOS
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-5 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-colors
                    ${isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-500 hover:text-purple-500 hover:bg-purple-50'}`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
