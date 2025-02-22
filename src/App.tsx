import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Image, MessageCircleHeart, Sparkles, Menu, X, Mail, Heart } from 'lucide-react';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import WishesPage from './pages/WishesPage';
import FireworksPage from './pages/FireworksPage';
import WishesLetterPage from './pages/WishesLetterPage';
import OnlyForYouPage from './pages/OnlyForYouPage';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="text-2xl font-bold text-pink-500 flex items-center gap-2">
                <span className="hidden sm:inline">Sarah's Birthday</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink to="/" icon={<Home size={20} />} text="Home" />
                <NavLink to="/gallery" icon={<Image size={20} />} text="Gallery" />
                <NavLink to="/wishes" icon={<MessageCircleHeart size={20} />} text="Wishes" />
                <NavLink to="/wishes-letter" icon={<Mail size={20} />} text="Wishes Letter" />
                <NavLink to="/only-for-you" icon={<Heart size={20} />} text="Only For You" />
                <NavLink to="/fireworks" icon={<Sparkles size={20} />} text="Fireworks" />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <MobileNavLink to="/" icon={<Home size={20} />} text="Home" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/gallery" icon={<Image size={20} />} text="Gallery" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/wishes" icon={<MessageCircleHeart size={20} />} text="Wishes" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/wishes-letter" icon={<Mail size={20} />} text="Wishes Letter" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/only-for-you" icon={<Heart size={20} />} text="Only For You" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/fireworks" icon={<Sparkles size={20} />} text="Fireworks" onClick={() => setIsMenuOpen(false)} />
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/wishes" element={<WishesPage />} />
            <Route path="/wishes-letter" element={<WishesLetterPage />} />
            <Route path="/only-for-you" element={<OnlyForYouPage />} />
            <Route path="/fireworks" element={<FireworksPage />} />
          </Routes>
        </div>

        {/* Audio Player */}
        <AudioPlayer />
      </div>
    </Router>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, text, onClick }: { to: string; icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default App;