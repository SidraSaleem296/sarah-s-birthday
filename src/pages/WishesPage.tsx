import React, { useState, useEffect } from 'react';
import { Heart, Send } from 'lucide-react';

const initialWishes = [
  {
    id: 1,
    name: "Sidra",
    message: "Happy birthday to the my sister, my best friend and one of the best humans of this century ! May your day be as beautiful as you are! 🌸",
    likes: 12
  },
  {
    id: 2,
    name: "Mona",
    message: "Wishing you all the joy and happiness in the world My dear Sister! You're the sunshine of our lives! Have an amazing birthday!  🎉",
    likes: 8
  },
  {
    id: 3,
    name: "Noori",
    message: "Happy birthday to the best sister in this world! May your day be filled with sweet moments and beautiful surprises! 🎂",
    likes: 15
  }
];

function WishesPage() {
  const [wishes, setWishes] = useState(initialWishes);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWish.name.trim() && newWish.message.trim()) {
      setWishes([
        {
          id: wishes.length + 1,
          ...newWish,
          likes: 0
        },
        ...wishes
      ]);
      setNewWish({ name: '', message: '' });
    }
  };

  const handleLike = (id: number) => {
    setWishes(wishes.map(wish =>
      wish.id === id ? { ...wish, likes: wish.likes + 1 } : wish
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fade-in">
        Birthday Wishes from your siblings
      </h1>

      {/* Wish Form */}
      <div className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 transform ${
        showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              value={newWish.name}
              onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-colors duration-200"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Your Wish</label>
            <textarea
              id="message"
              value={newWish.message}
              onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-colors duration-200"
              rows={4}
              placeholder="Write your birthday wish..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Wish
          </button>
        </form>
      </div>

      {/* Wishes List */}
      <div className="max-w-2xl mx-auto space-y-6">
        {wishes.map((wish, index) => (
          <div
            key={wish.id}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg text-gray-800">{wish.name}</h3>
              <button
                onClick={() => handleLike(wish.id)}
                className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors duration-200"
              >
                <Heart size={20} className={wish.likes > 0 ? 'fill-current' : ''} />
                <span>{wish.likes}</span>
              </button>
            </div>
            <p className="text-gray-600">{wish.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishesPage;