import { Navigation } from './Navigation';
import { Phone, MessageCircle, Shield, AlertCircle, Heart, Users } from 'lucide-react';
import type { Screen } from '../src/types';

interface EmergencySupportProps {
  onNavigate: (screen: Screen) => void;
}

export function EmergencySupport({ onNavigate }: EmergencySupportProps) {
  const emergencyContacts = [
    {
      name: 'Campus Crisis Hotline',
      number: '1800-XXX-XXXX',
      availability: '24/7',
      type: 'Call',
      description: 'Immediate crisis support from trained counselors',
    },
    {
      name: 'National Mental Health Helpline',
      number: '1800-599-0019',
      availability: '24/7',
      type: 'Call/SMS',
      description: 'NIMHANS operated helpline for mental health emergencies',
    },
    {
      name: 'Campus Security',
      number: '1800-XXX-XXXX',
      availability: '24/7',
      type: 'Call',
      description: 'For immediate safety concerns on campus',
    },
  ];

  const trustedPeers = [
    {
      name: 'Sarah M.',
      role: 'Peer Mentor - 3rd Year',
      availability: 'Online now',
      specialty: 'Homesickness & Anxiety',
    },
    {
      name: 'Arjun P.',
      role: 'Peer Mentor - 2nd Year',
      availability: 'Online now',
      specialty: 'Academic Stress',
    },
  ];

  const quickCopingTools = [
    {
      title: '5-4-3-2-1 Grounding Technique',
      duration: '2 min',
      description: 'Quick anxiety relief exercise',
    },
    {
      title: 'Deep Breathing Exercise',
      duration: '3 min',
      description: 'Calm panic and racing thoughts',
    },
    {
      title: 'Crisis Coping Statements',
      duration: '1 min',
      description: 'Affirmations for difficult moments',
    },
  ];

  const warningSignsChecklist = [
    'Persistent feelings of hopelessness or worthlessness',
    'Thoughts of self-harm or suicide',
    'Extreme mood swings or emotional outbursts',
    'Withdrawing from friends and activities',
    'Changes in sleep or eating patterns',
    'Difficulty concentrating or making decisions',
    'Increased substance use',
    'Physical symptoms without clear cause',
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navigation currentScreen="emergency" onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Emergency Header */}
        <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-start gap-4">
            <Shield className="w-12 h-12 flex-shrink-0" />
            <div>
              <h1 className="text-3xl mb-2">Emergency Support</h1>
              <p className="text-lg opacity-90">
                You're not alone. Help is available 24/7. If you're in immediate danger, please call emergency services (112) or campus security.
              </p>
            </div>
          </div>
        </div>

        {/* Immediate Action */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-red-200 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h2 className="text-xl text-gray-900">Need Help Right Now?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-red-600 text-white rounded-xl p-6 hover:bg-red-700 transition-colors text-left">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="text-xl mb-2">Call Crisis Hotline</h3>
              <div className="text-2xl mb-2">1800-XXX-XXXX</div>
              <p className="text-sm opacity-90">Connect with a trained counselor immediately</p>
            </button>
            <button className="bg-orange-600 text-white rounded-xl p-6 hover:bg-orange-700 transition-colors text-left">
              <MessageCircle className="w-8 h-8 mb-3" />
              <h3 className="text-xl mb-2">Chat with Counselor</h3>
              <div className="text-lg mb-2">Available 24/7</div>
              <p className="text-sm opacity-90">Text-based support if you prefer not to call</p>
            </button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Emergency Contacts</h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl text-gray-900 mb-2">{contact.name}</h3>
                    <p className="text-gray-600 mb-3">{contact.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {contact.type}
                      </span>
                      <span>•</span>
                      <span className="text-green-600">{contact.availability}</span>
                    </div>
                  </div>
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors ml-4">
                    <div className="text-sm mb-1">Call Now</div>
                    <div className="font-mono">{contact.number}</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Peer Support */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white mb-4">
            <h2 className="text-2xl mb-2 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Talk to a Peer Mentor
            </h2>
            <p className="opacity-90">
              Sometimes it helps to talk to someone who's been through similar experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {trustedPeers.map((peer, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white">
                    {peer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900">{peer.name}</h3>
                    <div className="text-sm text-gray-600">{peer.role}</div>
                    <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {peer.availability}
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm mb-4 inline-block">
                  {peer.specialty}
                </div>
                <button className="w-full bg-purple-500 text-white rounded-lg py-2 hover:bg-purple-600 transition-colors">
                  Start Chat
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Coping Tools */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Quick Coping Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickCopingTools.map((tool, idx) => (
              <button key={idx} className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition-colors text-left border border-blue-200">
                <Heart className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                <div className="text-sm text-blue-600">{tool.duration}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Warning Signs Checklist */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <h2 className="text-xl mb-4 text-gray-900">Warning Signs to Watch For</h2>
          <p className="text-gray-700 mb-4">
            If you or someone you know is experiencing several of these signs, it's important to seek help:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {warningSignsChecklist.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white rounded-lg p-4 border border-yellow-300">
            <p className="text-gray-800">
              <strong>Remember:</strong> Seeking help is a sign of strength, not weakness. Mental health challenges are common among students, and support is available.
            </p>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-purple-600 flex-shrink-0" />
            <div>
              <h3 className="text-gray-900 mb-2">Your Privacy & Safety</h3>
              <p className="text-sm text-gray-600">
                All crisis conversations are confidential. We will only share information if there's an immediate risk to your safety or the safety of others. Your well-being is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
