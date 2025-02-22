import React, { useState } from 'react';
import { X } from 'lucide-react';

const flowerGallery = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
    title: 'Spring Bouquet'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=800&q=80',
    title: 'Pink Roses'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?auto=format&fit=crop&w=800&q=80',
    title: 'Wildflowers'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80',
    title: 'Tulips'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=800&q=80',
    title: 'Garden Roses'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=80',
    title: 'Sunflowers'
  }
];

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fade-in">
        Floral Gallery
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flowerGallery.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 animate-fade-in">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={flowerGallery.find(img => img.id === selectedImage)?.url}
              alt={flowerGallery.find(img => img.id === selectedImage)?.title}
              className="w-full h-auto rounded-lg shadow-2xl animate-scale-up"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;