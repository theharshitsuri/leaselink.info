import React from 'react';

const ListingCard = ({ image, title }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl mr-8">
      {/* Image container with dynamic height/width */}
      <div className="relative w-full h-64 max-h-96">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ListingCard;
