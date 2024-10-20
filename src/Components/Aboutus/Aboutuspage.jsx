// src/components/WebPage.js
import React, { useState } from 'react';
import Buttons from './Buttons';
import PopupBox from './Popupcomp';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../../Navbar/Navigation';
import adarsh from '../../Images/adarsh_headshot.jpg';
import harshit from '../../Images/harshit_headshot.jpg';
import linkedin from '../../Images/linkedinLogo.png';
import github from '../../Images/githubLogo.png';
import harshitlogo from '../../Images/harshitlogo.jpg'; 

const WebPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ image: '', logos: [], title: '', links: [] });

  const openPopup = (type) => {
    if (type === 'Image 1') {
      setPopupContent({
        image: harshit,
        logos: [
          linkedin,
          github,
          harshitlogo,
        ],
        title: 'Harshit Suri',
        links: [
          'https://www.linkedin.com/in/harshitsuri/',
          'https://github.com/theharshitsuri',
          'https://theharshitsuri',
        ],
      });
    } else {
      setPopupContent({
        image: adarsh,
        logos: [
          linkedin,
          github,
        ],
        title: 'Adarsh Kessani',
        links: [
          'https://www.linkedin.com/in/akessani/',
          'https://github.com/adarsh1343',
        ],
      });
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
      <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>
      <div className="w-4/5 h-4/5 bg-white shadow-2xl rounded-lg flex flex-col md:flex-row items-center justify-center md:justify-between p-10">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Lease Link</h2>
          <p className="text-lg">
            We are a pair of passionate developers bringing solutions to your digital world. 
            Learn more about us by interacting with the buttons on the right!
          </p>
        </div>
        {/* Right Side - Buttons, centered vertically on large screens */}
        <div className="w-full md:w-1/2 flex flex-col items-end md:justify-center">
          <Buttons openPopup={openPopup} />
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <PopupBox
            image={popupContent.image}
            logos={popupContent.logos}
            title={popupContent.title}
            links={popupContent.links} // Pass links for logos here
            closePopup={closePopup}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebPage;
