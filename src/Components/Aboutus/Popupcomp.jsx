// src/components/Popupcomp.js
import React from 'react';
import { motion } from 'framer-motion';

const Popupcomp = ({ image, logos, closePopup, title = 'Title goes here', links = [] }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-white p-8 rounded-xl shadow-lg relative max-w-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.25,
          ease: [0.5, 0.5, 0.58, 1],
        }}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>

        {/* Image */}
        <img src={image} alt="Popup" className="mb-4 w-full h-auto rounded-md" />

        {/* Logos with Separate Hyperlinks */}
        <div className="flex justify-center space-x-6 mt-4">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={links[index]} // Link for each logo
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt={`Logo ${index + 1}`} className="w-12 h-12 rounded-md" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Popupcomp;
