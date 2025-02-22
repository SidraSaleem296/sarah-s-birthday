import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const wishesLetters = [
  {
    id: 1,
    wish: "Allah Tumhare naseeb ache kre habibi ❤️",
    color: "bg-pink-100"
  },
  {
    id: 2,
    wish: "May Allah bless you with happiness and success in every step of your life 🌟",
    color: "bg-purple-100"
  },
  {
    id: 3,
    wish: "May we be togather in Jannah as well🤲",
    color: "bg-blue-100"
  },
  {
    id: 4,
    wish: "May your life be as sweet as your heart, dear sister 🎀",
    color: "bg-rose-100"
  },
  {
    id: 5,
    wish: "Habibi, I hope we are sisters and besties forever. 🌸",
    color: "bg-yellow-100"
  },
  {
    id: 6,
    wish: "May you see the world through the eyes of wonder, and live with the curiosity of a child. 🌺",
    color: "bg-green-100"
  },
  {
    id: 7,
    wish: "May your heart always find the courage to bloom, even in the harshest of winters ✨",
    color: "bg-indigo-100"
  },
  {
    id: 8,
    wish: "May your dreams be as vast as the ocean, and your spirit as unyielding as the tide.",
    color: "bg-orange-100"
  }
];

function WishesLetterPage() {
  const [selectedWish, setSelectedWish] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fade-in">
        Birthday Wishes Letters
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishesLetters.map((letter, index) => (
          <div
            key={letter.id}
            className={`${letter.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedWish(letter.id)}
          >
            <div className="flex items-center justify-center h-32">
              <MessageCircle className="w-12 h-12 text-pink-500 animate-pulse" />
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600">Click to reveal the wish</p>
            </div>
          </div>
        ))}
      </div>

      {/* Wish Modal */}
      {selectedWish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-scale-up">
            <div className="text-center">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
              <p className="text-xl text-gray-800 mb-6">
                {wishesLetters.find(w => w.id === selectedWish)?.wish}
              </p>
              <button
                onClick={() => setSelectedWish(null)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WishesLetterPage;