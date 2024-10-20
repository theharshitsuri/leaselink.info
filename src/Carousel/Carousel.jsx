import React, { useState, useEffect } from 'react';
import flats from '../Images/Flatsat4200.jpg';
import venue from '../Images/Venue.jpg';
import lark from '../Images/Lark.jpg';

const Carousel = () => {
  const images = [flats, venue, lark];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [autoTimer, setAutoTimer] = useState(null);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide switch every 5 seconds
  useEffect(() => {
    if (!isManual) {
      const interval = setInterval(nextSlide, 5000);
      setAutoTimer(interval);

      return () => clearInterval(interval);
    }
  }, [isManual]);

  // Reset the slideshow to automatic mode after 15 seconds of manual interaction
  useEffect(() => {
    if (isManual) {
      clearTimeout(autoTimer);
      const manualTimer = setTimeout(() => {
        setIsManual(false); // Resume automatic slideshow
      }, 15000);

      return () => clearTimeout(manualTimer);
    }
  }, [isManual]);

  // Handler for manual control
  const handleManualControl = (action) => {
    setIsManual(true); // Stop automatic mode temporarily
    action(); // Perform the action (next/prev)
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slideshow Images */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Left Arrow */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-3 rounded-full focus:outline-none"
        onClick={() => handleManualControl(prevSlide)}
      >
        &#9664; {/* Left Arrow Icon */}
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-3 rounded-full focus:outline-none"
        onClick={() => handleManualControl(nextSlide)}
      >
        &#9654; {/* Right Arrow Icon */}
      </button>
    </div>
  );
};

export default Carousel;
