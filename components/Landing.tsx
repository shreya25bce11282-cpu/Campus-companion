import { Heart, MessageCircle, Users, BookOpen, Shield } from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

export function Landing({ onLogin }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8" fill="currentColor" />
            <span className="text-2xl">Campus Companion</span>
          </div>
          <button 
            onClick={onLogin}
            className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition-colors"
          >
            Sign In
          </button>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl mb-6">
            You're Not Alone in This Journey
          </h1>
          <p className="text-xl mb-8 opacity-90">
            A safe space for freshers navigating hostel life, academics, and everything in between. 
            Because transitioning to college shouldn't mean doing it alone.
          </p>
          <button 
            onClick={onLogin}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            Start Your Wellness Journey
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <MessageCircle className="w-12 h-12 mb-4" />
            <h3 className="text-xl mb-2">Daily Check-ins</h3>
            <p className="opacity-80">
              Share how you're feeling. Our AI companion understands and supports you.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-xl mb-2">Peer Circles</h3>
            <p className="opacity-80">
              Connect with hostel-mates facing similar challenges. You're not alone.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Heart className="w-12 h-12 mb-4" />
            <h3 className="text-xl mb-2">Professional Support</h3>
            <p className="opacity-80">
              Easy access to campus counselors when you need expert guidance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <BookOpen className="w-12 h-12 mb-4" />
            <h3 className="text-xl mb-2">Resource Library</h3>
            <p className="opacity-80">
              Guides on homesickness, stress, time management, and more.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6" />
            <span>100% Confidential & Secure</span>
          </div>
          <p className="opacity-80">
            Your privacy matters. All conversations are encrypted and anonymous options available.
          </p>
        </div>
      </div>
    </div>
  );
}
