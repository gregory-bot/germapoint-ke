import React, { useState, useEffect } from 'react';

const videos = [
  "/src/1. .mp4",
  "/src/2. .mp4",
  "/src/3. .mp4"
];

const Hero: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {videos.map((video, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          className={`absolute z-0 w-auto min-w-full min-h-full max-w-none transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white">
        <h2 className="text-5xl font-bold mb-4 animate-fade-in-down">Welcome to German Point</h2>
        <p className="text-xl mb-8 animate-fade-in-up">Experience authentic German cuisine with a modern twist</p>
        <a href="#menu" className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-black-700 transition duration-300 animate-pulse">View Our Menu</a>
      </div>
    </section>
  );
};

export default Hero;