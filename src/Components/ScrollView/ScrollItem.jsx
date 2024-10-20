import React from 'react';

const ScrollItem = ({ listerName, contactInfo, unitSize, listingPrice }) => {
  return (
    <div className="bg-white w-full p-4 shadow-lg rounded-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex justify-between">
        {/* Column 1: Lister's name */}
        <div className="w-1/4">
          <h3 className="font-semibold">Name</h3>
          <p>{listerName}</p>
        </div>

        {/* Column 2: Lister's contact info */}
        <div className="w-1/4">
          <h3 className="font-semibold">Contact info</h3>
          <p>{contactInfo}</p>
        </div>

        {/* Column 3: Unit size */}
        <div className="w-1/4">
          <h3 className="font-semibold">Unit size</h3>
          <p>{unitSize}</p>
        </div>

        {/* Column 4: Listing Price */}
        <div className="w-1/4">
          <h3 className="font-semibold">Listing Price</h3>
          <p>{listingPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollItem;
