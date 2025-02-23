import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://www.chosic.com/wp-content/uploads/2024/01/happy-birthday-to-you.mp3');
    audioRef.current.loop = true;
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-pink-100 transition-colors duration-200"
      aria-label="Toggle music"
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-pink-500" />
      ) : (
        <VolumeX className="w-6 h-6 text-gray-500" />
      )}
    </button>
  );
}

export default AudioPlayer;