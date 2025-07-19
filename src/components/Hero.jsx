import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          At Liquid Luxe, we are dedicated to creating unforgettable olfactory experiences. Our expertise spans from personal fragrance consultations to bespoke scent creation, ensuring that every interaction leaves a lasting impression. We pride ourselves on our commitment to quality, sustainability, and innovation, making every experience with us both meaningful and memorable.
        </p>
      </div>
    </section>
  );
};

export default Hero;