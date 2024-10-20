import React from 'react';
import ScrollItem from './ScrollItem';

const ScrollView = ({ items }) => {
  return (
    <div className="w-full h-80 mx-auto mt-8 overflow-y-auto overflow-x-auto">
      <div className="flex flex-col space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full px-4 py-2"
            onClick={item.onClick}  // Add the onClick handler to open modal
          >
            <ScrollItem
              listerName={item.listerName}
              contactInfo={item.contactInfo}
              unitSize={item.unitSize}
              listingPrice={item.listingPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollView;
