import React, { useEffect, useState } from 'react';
import { Cake, Heart, Stars, Music, Gift } from 'lucide-react';

function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const birthday = new Date('2024-02-24');
  const today = new Date();
  const isBirthday = today.getDate() === birthday.getDate() && 
                     today.getMonth() === birthday.getMonth();

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float opacity-50 ${
              showContent ? 'opacity-50' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 4 === 0 ? <Heart className="text-pink-400" size={20} /> :
             i % 4 === 1 ? <Stars className="text-yellow-400" size={20} /> :
             i % 4 === 2 ? <Gift className="text-purple-400" size={20} /> :
             <Music className="text-blue-400" size={20} />}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
        showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80"
              alt="Birthday Celebration"
              className="rounded-2xl shadow-2xl mx-auto mb-8 w-full h-64 object-cover animate-fade-in"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <Cake className="text-pink-500 w-16 h-16 animate-bounce" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              Happy Birthday Sarah Taghreed!
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 animate-fade-in">
              {isBirthday ? (
                "Today is your special day! 🎉"
              ) : (
                "Counting down to your special day on February 24th! 🎉"
              )}
            </p>

            <div className="prose prose-lg max-w-2xl mx-auto text-gray-600 animate-slide-up">
              <p className="mb-4">
                May your day be filled with joy, laughter, and countless beautiful moments.
                You deserve all the happiness in the world!
              </p>
              <p className="mb-4">
                Thank you for being such an amazing friend. Your kindness, strength,
                and beautiful spirit make the world a better place.
              </p>
              <p>
                Wishing you a year ahead filled with adventures, success,
                and all the dreams your heart desires! 🌟
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Heart className="text-pink-500 animate-pulse" size={28} />
            <Stars className="text-yellow-400 animate-bounce" size={28} />
            <Gift className="text-purple-500 animate-pulse" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;