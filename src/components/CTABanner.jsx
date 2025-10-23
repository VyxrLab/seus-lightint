import React from 'react'

const CTABanner = () => {
  return (
    <section 
      className="relative bg-black h-screen flex items-center rounded-b-4xl overflow-hidden"
      style={{
        backgroundImage: 'url("ctabg.jpg")', // Placeholder for the background image
        backgroundSize: 'cover',
        backgroundPosition: 'botttom',
      }}
    >
      {/* Overlay to darken background and make text pop */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-white ml-8 md:ml-[35%] lg:ml-[45%] p-4 text-center sm:text-left">
        <h2 className="text-6xl font-bold font-inter">
          Explore our <i className="font-playfair">Sale</i>
        </h2>
        <p className="text-2xl font-inter font-semibold my-6">
          40% OFF ON OUTDOOR PRODUCTS
        </p>
        <button className="bg-yellow-600 text-white font-semibold py-1.5 px-12 rounded hover:bg-yellow-700 transition-colors duration-300">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default CTABanner;