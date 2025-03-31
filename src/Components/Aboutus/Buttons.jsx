// src/components/Buttons.js
import React from 'react';

const Buttons = ({ openPopup }) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => openPopup('Image 1')}
        className="bg-blue-500 text-white py-2 px-4 rounded transform transition-all duration-300 ease-in-out hover:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6)] hover:translate-y-1"
      >
        Harshit Suri
      </button>
    </div>
  );
};

export default Buttons;
