import { Heart, Star, Coffee, Smile, Sun, Moon, Rainbow, Sparkles } from 'lucide-react';

const friendshipQuotes = [
  {
    id: 1,
    quote: "A best friend is someone who loves you when you forget to love yourself.",
    icon: Heart,
    color: "bg-gradient-to-br from-pink-100 to-rose-200"
  },
  {
    id: 2,
    quote: "Friends are the siblings God never gave us. You're my sister from another mother!",
    icon: Star,
    color: "bg-gradient-to-br from-purple-100 to-indigo-200"
  },
  {
    id: 3,
    quote: "Life is better with a friend like you who understands my crazy side.",
    icon: Smile,
    color: "bg-gradient-to-br from-yellow-100 to-amber-200"
  },
  {
    id: 4,
    quote: "Coffee dates, late-night talks, and endless laughter - that's our friendship!",
    icon: Coffee,
    color: "bg-gradient-to-br from-orange-100 to-red-200"
  },
  {
    id: 5,
    quote: "You're the kind of friend who always knows how to make my day brighter.",
    icon: Sun,
    color: "bg-gradient-to-br from-yellow-100 to-orange-200"
  },
  {
    id: 6,
    quote: "Through good times and bad, you've always been there. That's true friendship.",
    icon: Moon,
    color: "bg-gradient-to-br from-blue-100 to-indigo-200"
  },
  {
    id: 7,
    quote: "Our friendship is like a rainbow - beautiful, rare, and a gift from above.",
    icon: Rainbow,
    color: "bg-gradient-to-br from-green-100 to-emerald-200"
  },
  {
    id: 8,
    quote: "You make every moment special just by being you. Happy birthday, bestie!",
    icon: Sparkles,
    color: "bg-gradient-to-br from-purple-100 to-pink-200"
  }
];

function OnlyForYouPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fade-in">
        Only For You, My Best Friend
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friendshipQuotes.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="perspective-1000 h-64 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setFlippedCard(flippedCard === card.id ? null : card.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                  flippedCard === card.id ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div
                  className={`absolute inset-0 ${card.color} rounded-xl p-6 shadow-lg flex flex-col items-center justify-center backface-hidden`}
                >
                  <Icon className="w-12 h-12 text-gray-800 mb-4 animate-bounce" />
                  <p className="text-gray-700 text-center font-medium">
                    Click to reveal a special message
                  </p>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 bg-white rounded-xl p-6 shadow-lg flex items-center justify-center backface-hidden rotate-y-180"
                >
                  <p className="text-gray-800 text-center text-lg font-medium">
                    {card.quote}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OnlyForYouPage;