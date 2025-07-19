import React from 'react';

const ServiceCard = ({ number, title, description, image, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 mb-16 lg:mb-24`}>
      {/* Content */}
      <div className="flex-1 text-white">
        <div className="text-6xl md:text-7xl font-bold text-orange-500 mb-4 opacity-80">
          {number}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          {title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-lg shadow-2xl group">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;