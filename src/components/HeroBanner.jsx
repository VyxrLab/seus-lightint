import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="relative w-full h-[730px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/herobg.jpg')", // Replace with your image
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-left">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-semibold text-white leading-tight">
         <span className="font-[Inter] tracking-[-0.02em]">Modern</span> <br /> 
          <i className="font-[Playfair_Display] font-normal tracking-[-0.04em]">Chandeliers</i>
        </h1>

        {/* Description */}
        <p className="font-[Inter] tracking-[-0.03em] mt-4 text-lg md:text-sm text-gray-200 max-w-xs">
          Shop modern light fixtures: chandeliers, pendants, ceiling lights and wall sconces with clean profiles and steady, dimmable output. Adjustable drops, multiple finishes, and smart-ready options.  
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          {/* SHOP NOW Button */}
          <button className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 bg-gradient-to-b from-[#EBA900] to-[#B88C1D] hover:opacity-90 hover:scale-105">
            SHOP NOW
          </button>

          {/* BROWSE ALL Button */}
          <button className="px-6 py-3 text-white font-semibold rounded-lg border border-white/50 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300">
            BROWSE ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
