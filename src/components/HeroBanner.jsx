import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="relative w-full md:h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/herobg.jpg')", // Replace with your image
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-left">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-inter font-bold text-white leading-19">
          Modern <br /> <i className="font-playfair font-semibold">Chandeliers</i>
        </h1>

        {/* Description */}
        <p className="mt-4 font-inter font-semibold text-gray-200 max-w-sm">
          Shop modern light fixtures: chandeliers, pendants, ceiling lights and wall sconces with clean profiles and steady, dimmable output. Adjustable drops, multiple finishes, and smart-ready options.  
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {/* SHOP NOW Button */}
          <button className="btn bg-linear-to-b from-amber-300 to-amber-600 hover:bg-none">
            SHOP NOW
          </button>

          {/* BROWSE ALL Button */}
          <button className="btn hover:bg-yellow-600 bg-transparent">
            BROWSE ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
