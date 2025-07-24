import React from 'react';
import ServiceCard from './ServiceCard';
import Abu from '../assets/abu-bandit.svg'
import Sec from '../assets/sec-img.svg'
import Third from '../assets/third-img.svg'
import Fourth from '../assets/fourth-img.svg'
import Fifth from '../assets/fifth-img.svg'
import Sixth from '../assets/sixth-img.svg'
const Services = () => {
  const services = [
    {
      number: "01.",
      title: "Personal Fragrance Consultations",
      description: "Discover the perfect scent that reflects your unique personality and lifestyle. Our expert perfumers provide personalized consultations to help you find or create your signature fragrance. Through detailed discussions about your preferences, lifestyle, and desired impression, we guide you toward scents that truly represent who you are.",
      image: Abu
    },
    {
      number: "02.",
      title: "Custom Fragrance Creation",
      description: "Experience the luxury of having a fragrance created exclusively for you. Our master perfumers work closely with you to develop a unique scent using the finest ingredients. From initial concept to final creation, we ensure your custom fragrance is as individual as you are, creating an olfactory masterpiece that reflects your personality.",
      image: Sec
    },
    {
      number: "03.",
      title: "Scented Gift Selection",
      description: "Find the perfect fragrant gift for your loved ones with our curated selection service. Our consultants help you choose meaningful scents that match the recipient's personality and preferences. Whether for special occasions or everyday luxury, we ensure every gift creates a memorable and lasting impression.",
      image: Third
    },
    {
      number: "04.",
      title: "Fragrance Events and Workshops",
      description: "Join our exclusive fragrance workshops and events to deepen your appreciation for the art of perfumery. Learn about scent composition, fragrance families, and the history of perfumery from industry experts. These immersive experiences offer hands-on learning and the opportunity to create your own signature blend.",
      image: Fourth
    },
    {
      number: "05.",
      title: "Eco-friendly Initiatives",
      description: "We are committed to sustainability and environmental responsibility. Our eco-friendly initiatives include sustainable sourcing of ingredients, minimal packaging using recycled materials, and supporting fair trade practices. Experience luxury fragrances while contributing to a more sustainable future for our planet.",
      image: Fifth
    },
    {
      number: "06.",
      title: "Online Shopping Convenience",
      description: "Enjoy the convenience of shopping for premium fragrances from the comfort of your home. Our online platform offers detailed product descriptions, expert recommendations, and virtual consultations. With secure payment options and worldwide shipping, luxury fragrances are just a click away.",
      image: Sixth
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-black to-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            number={service.number}
            title={service.title}
            description={service.description}
            image={service.image}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;