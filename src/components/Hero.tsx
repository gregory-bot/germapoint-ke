import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SearchBar from './SearchBar'; // Ensure you have the SearchBar component

const videos = [
  "https://res.cloudinary.com/dgvx2tbcy/video/upload/v1733931844/1._lu7yst.mp4",
  "https://res.cloudinary.com/dgvx2tbcy/video/upload/v1733931848/2._lhigdy.mp4",
  "https://res.cloudinary.com/dgvx2tbcy/video/upload/v1733931840/3._enhdbm.mp4"
];

const Hero: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Videos */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Search Bar */}
      <div className="absolute top-4 left-0 right-0 z-20 px-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white">
        <h2 className="text-5xl font-bold mb-4 animate-fade-in-down" style={{ fontFamily: 'Courier New, monospace' }}>
          <TypeAnimation
            sequence={[
              "Welcome to German Point", // Text to display
              2000, // Delay before deletion
              "", // Empty string for deletion
              30, // Deletion speed (slower for realism)
            ]}
            speed={80} // Typing speed (slower for realism)
            deletionSpeed={30} // Deletion speed (slower for realism)
            repeat={Infinity} // Repeat indefinitely
          />
        </h2>
        <p className="text-xl mb-8 animate-fade-in-up" style={{ fontFamily: 'Courier New, monospace' }}>
          Experience authentic German cuisine with a modern twist
        </p>
        <a
          href="#menu"
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-black-700 transition duration-300 animate-pulse"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;