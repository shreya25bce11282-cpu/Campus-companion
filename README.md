# 🌟 Campus Companion

> A comprehensive mental wellness platform designed specifically for college freshers navigating the challenges of hostel life, academics, and social adjustment.

![Campus Companion](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop)

## 📖 About

**Campus Companion** is a youth-friendly mental health platform that provides personalized support to students during their crucial transition from home to college life. Built with empathy and designed for Gen Z, it combines AI-driven emotional intelligence, peer support networks, and professional counseling resources to create a safe space for freshers.

### 🎯 Why Campus Companion?

Leaving home for the first time brings unique challenges:
- 🏠 **Homesickness** - Missing family and familiar environments
- 📚 **Academic Pressure** - Stress from new educational demands
- 👥 **Social Adjustment** - Difficulty making friends and fitting in
- 🏨 **Hostel Life** - Adapting to communal living and independence
- 🔇 **Limited Awareness** - Not knowing where or how to seek help

Campus Companion addresses all these challenges in one comprehensive platform.

---

## ✨ Key Features

### 🤖 AI-Driven Emotional Intelligence
- **Daily Check-ins**: Conversational AI chatbot that understands student emotions
- **Sentiment Analysis**: Detects patterns of anxiety, sadness, or stress
- **Personalized Toolkit**: Custom recommendations for meditation, study breaks, and coping strategies
- **Mood Dashboard**: Visual analytics to track emotional patterns over time

### 👥 Peer Support Networks
- **Hostel Circles**: Small, moderated groups for safe peer discussions
- **AI Buddy Matching**: Connect with students facing similar challenges
- **Anonymous Vent Spaces**: Share feelings without judgment
- **Gamified Challenges**: 30-day gratitude, study streaks, and wellness activities

### 🏥 Professional Resources
- **Easy Counseling Booking**: Schedule video, in-person, or group sessions
- **Counselor Profiles**: Browse specialists by expertise and availability
- **24/7 Emergency Hotline**: Immediate crisis support access
- **Resource Library**: Guides on homesickness, stress, time management, and more

### 🛡️ Proactive Intervention
- **Risk Detection**: AI identifies concerning emotional patterns
- **Trusted Contact Protocol**: Alert mentors with user consent
- **Adaptive Support**: Increased check-ins during difficult periods
- **Wellness Nudges**: Gentle reminders for self-care activities

---

## 🚀 Tech Stack

**Frontend:**
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📊 Recharts for data visualization
- 🎭 Lucide React for icons
- 🌈 Gradient backgrounds and glassmorphism effects

**Design Philosophy:**
- Mobile-first responsive design
- Youth-friendly UI with vibrant colors
- Conversational and empathetic tone
- Privacy-first architecture

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/campus-companion.git
cd campus-companion
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
npm install lucide-react recharts
npm install -D tailwindcss postcss autoprefixer
```

4. **Initialize Tailwind CSS**
```bash
npx tailwindcss init -p
```

5. **Configure Tailwind** - Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

6. **Update `src/index.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. **Start the development server**
```bash
npm start
```

8. **Open in browser**
```
http://localhost:3000
```

---

## 🎮 Usage

### Getting Started
1. Click **"Start Your Wellness Journey"** on the landing page
2. Complete your daily emotional check-in
3. Chat with the AI companion about your feelings
4. Explore personalized recommendations

### Navigation
- **🏠 Home**: Daily check-ins, mood tracking, and personalized suggestions
- **📊 Mood Journal**: Visualize emotional patterns with interactive charts
- **👥 Peers**: Join circles, find buddies, and participate in challenges
- **📅 Counseling**: Book sessions with professional counselors
- **📚 Resources**: Access articles, videos, and wellness tools
- **🆘 Emergency**: 24/7 crisis support and immediate help

---

## 📂 Project Structure

```
campus-companion/
├── src/
│   ├── components/
│   │   ├── Landing.tsx           # Landing page
│   │   ├── Dashboard.tsx         # Main dashboard with AI chat
│   │   ├── Navigation.tsx        # Top bar and bottom navigation
│   │   ├── MoodJournal.tsx       # Mood tracking and analytics
│   │   ├── PeerSupport.tsx       # Peer circles and buddy system
│   │   ├── CounselingHub.tsx     # Professional counseling booking
│   │   ├── ResourceLibrary.tsx   # Educational content and tools
│   │   └── EmergencySupport.tsx  # Crisis support resources
│   ├── App.tsx                   # Main app component
│   └── index.css                 # Global styles
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎨 Screenshots

<img width="1903" height="915" alt="image" src="https://github.com/user-attachments/assets/d073eae6-1673-41c0-a1cc-c67630b9dac0" />
<img width="759" height="917" alt="image" src="https://github.com/user-attachments/assets/f71bab77-bbe7-4928-beb1-1fcdba8fd891" />
<img width="731" height="924" alt="image" src="https://github.com/user-attachments/assets/e003fcd9-411c-42c7-8b18-6edb9e86a868" />
<img width="507" height="925" alt="image" src="https://github.com/user-attachments/assets/b7a36595-4ead-444c-b801-cbbe0db6700f" />
<img width="545" height="920" alt="image" src="https://github.com/user-attachments/assets/96168deb-743f-480a-bbc1-a34a394e6a2d" />
<img width="524" height="924" alt="image" src="https://github.com/user-attachments/assets/2096a0fa-de62-4c2a-af05-49bf651c4000" />

### Landing Page
Beautiful gradient hero with feature overview and trust indicators.

### Dashboard with AI Chatbot
Interactive daily check-ins with mood selection and conversational AI that responds to stress, homesickness, and loneliness.

### Mood Journal Analytics
Visual mood tracking with area charts showing 2-week patterns and personalized insights.

### Peer Support Network
Join circles, find AI-matched buddies, participate in wellness challenges, and use anonymous vent spaces.

### Counseling Hub
Browse counselor profiles, check availability, and book video/in-person/group sessions.

### Resource Library
Curated articles, videos, quick tools, and upcoming workshops on mental wellness topics.

### Emergency Support
24/7 crisis hotline access, peer mentor chat, quick coping tools, and warning signs checklist.

---

## 🌈 Color Palette

- **Primary Purple**: `#a855f7` - Main brand color
- **Secondary Pink**: `#ec4899` - Accent and highlights
- **Tertiary Blue**: `#3b82f6` - Information and calm
- **Success Green**: `#10b981` - Positive trends
- **Warning Orange**: `#f59e0b` - Caution
- **Error Red**: `#ef4444` - Emergency and alerts

---


## 🔒 Privacy & Security

Campus Companion is designed with privacy as a core principle:
- ✅ All conversations are confidential
- ✅ Anonymous options available for vent spaces
- ✅ User consent required for data sharing
- ✅ Emergency protocols only trigger for immediate safety risks
- ⚠️ **Note**: This is a prototype/demo. For production use, implement proper authentication, encryption, and compliance with mental health data regulations (HIPAA, etc.)

---

## 🚧 Future Enhancements

- [ ] **Backend Integration**: Supabase for real-time data persistence
- [ ] **User Authentication**: Secure login with email/social providers
- [ ] **Real-time Chat**: Live messaging in peer circles
- [ ] **Push Notifications**: Wellness reminders and check-in prompts
- [ ] **Multi-language Support**: Hindi, Tamil, Telugu, and regional languages
- [ ] **Advanced AI**: Improved sentiment analysis and personalized insights
- [ ] **Wearable Integration**: Sync with fitness trackers for holistic wellness
- [ ] **Campus Integration**: Direct integration with university counseling services
- [ ] **Mobile App**: React Native version for iOS and Android
- [ ] **Analytics Dashboard**: For counselors and administrators

---

## 🙏 Acknowledgments

- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Inspiration**: All the students navigating the beautiful chaos of college life

---


## ⚠️ Important Disclaimer

**Campus Companion is a prototype/demonstration project.** It is designed to showcase a mental wellness platform concept for college students. 

- This is **NOT** a replacement for professional mental health services
- For actual mental health support, please contact:
  - **National Mental Health Helpline (India)**: 1800-599-0019
  - **Emergency Services**: 112
  - Your campus counseling center
  - Licensed mental health professionals

If you or someone you know is in crisis, please seek immediate professional help.

---

<div align="center">

### 💜 Built with love for college freshers everywhere

**Made by students, for students**

[⭐ Star this repo](https://github.com/yourusername/campus-companion) if you found it helpful!

</div>
