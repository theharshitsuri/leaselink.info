import React from 'react';
import Widgets from '../../widgets/Widgets';
import Navbar from '../../Navbar/Navigation';


const Landing = () => {
  return (
    <div className="flex">
      {/* Main content */}
      <div className="flex-1">
        <Navbar />
        <Widgets />
      </div>
    </div>
  );
};

export default Landing;
