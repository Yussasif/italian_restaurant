// useSound.js
import { useEffect, useRef } from "react";

const useSound = (src, volume = 1) => {
  // Use a Ref instead of State to avoid unnecessary re-renders
  // and to persist the audio object across the component lifecycle.
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    const audio = new Audio(src);
    audio.volume = volume;
    audioRef.current = audio;

    // Cleanup: Stop sound and clear memory when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, volume]);

  const play = () => {
    if (audioRef.current) {
      // CRITICAL: Reset sound to start.
      // Without this, clicking while the sound is playing will do nothing.
      audioRef.current.currentTime = 0;

      // play() returns a promise in modern browsers
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  };

  return play;
};

export default useSound;
