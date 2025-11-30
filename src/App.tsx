import { useState } from 'react';
import { Landing } from '../components/Landing';
import { Dashboard } from '../components/Dashboard';
import { MoodJournal } from '../components/MoodJournal';
import { PeerSupport } from '../components/PeerSupport';
import { CounselingHub } from '../components/CounselingHub';
import { ResourceLibrary } from '../components/ResourceLib';
import { EmergencySupport } from '../components/EmergencySupport';
import type { Screen } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  if (!isLoggedIn) {
    return <Landing onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {currentScreen === 'dashboard' && <Dashboard onNavigate={navigateTo} />}
      {currentScreen === 'mood' && <MoodJournal onNavigate={navigateTo} />}
      {currentScreen === 'peer' && <PeerSupport onNavigate={navigateTo} />}
      {currentScreen === 'counseling' && <CounselingHub onNavigate={navigateTo} />}
      {currentScreen === 'resources' && <ResourceLibrary onNavigate={navigateTo} />}
      {currentScreen === 'emergency' && <EmergencySupport onNavigate={navigateTo} />}
    </div>
  );
  
}

