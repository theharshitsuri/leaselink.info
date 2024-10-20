import React from 'react';
import { Link } from 'react-router-dom';

const WidgetCard = ({ title, subtitle, description, imageUrl, link, linkTo }) => {
  const imageWidthPercentage = '100%';

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-left w-full">
      {linkTo ? (
        <Link to={linkTo}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="mx-auto mb-4 object-cover rounded"
            style={{ width: imageWidthPercentage, height: 'auto', aspectRatio: '3.5 / 2' }}
          />
        </Link>
      ) : (
        <img 
          src={imageUrl} 
          alt={title} 
          className="mx-auto mb-4 object-cover rounded"
          style={{ width: imageWidthPercentage, height: 'auto', aspectRatio: '3.5 / 2' }}
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {link && (
        <p className="text-blue-500 mb-2">
          {link}
        </p>
      )}
      <p className="text-gray-600 mb-2">{subtitle}</p>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}

export default WidgetCard;
