import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/herobg.jpg",
    headingTop: "Modern",
    headingBottom: "Chandeliers",
    description:
      "Shop modern light fixtures: chandeliers, pendants, ceiling lights and wall sconces with clean profiles and steady, dimmable output. Adjustable drops, multiple finishes, and smart-ready options.",
  },
  {
    image: "/herobg2.png",
    headingTop: "Staircase",
    headingBottom: "Chandeliers",
    description:
      "Explore contemporary lighting — chandeliers, pendants, sconces, and ceiling fixtures with sleek lines, dimmable glow, and versatile finishes. Smart-ready, height-adjustable, and designed for every space.",
  },
  {
    image: "/herobg3.png",
    headingTop: "Wooden",
    headingBottom: "Chandeliers",
    description:
      "Shop modern light fixtures: chandeliers, pendants, ceiling lights and wall sconces with clean profiles and steady, dimmable output. Adjustable drops, multiple finishes, and smart-ready options.",
  },
  {
    image: "/herobg4.png",
    headingTop: "Exclusive",
    headingBottom: "Wall Lights",
    description:
      "Shop modern light fixtures: chandeliers, pendants, ceiling lights and wall sconces with clean profiles and steady, dimmable output. Adjustable drops, multiple finishes, and smart-ready options.",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out
      setFade(false);

      setTimeout(() => {
        // Switch to next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        // Fade-in again
        setFade(true);
      }, 300); // short fade-out time
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[730px] overflow-hidden">
      {/* Background crossfade */}
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1000ms] ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      ))}

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12">
        <div
          className={`max-w-5xl text-left transition-all duration-700 ${
            fade
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          {/* Headings */}
          <h1 className="text-4xl md:text-7xl font-semibold text-white leading-tight">
            <span className="font-[Inter] tracking-[-0.02em]">
              {slide.headingTop}
            </span>
            <br />
            <i className="font-[Playfair_Display] font-normal tracking-[-0.04em]">
              {slide.headingBottom}
            </i>
          </h1>

          {/* Description */}
          <p className="font-[Inter] tracking-[-0.03em] mt-4 text-lg md:text-sm text-gray-200 max-w-xs">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            {/* SHOP NOW */}
            <button className="px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 bg-[#B88C1D] hover:bg-gradient-to-b hover:from-[#EBA900] hover:to-[#B88C1D] hover:opacity-90 hover:scale-105">
              SHOP NOW
            </button>

            {/* BROWSE ALL */}
            <button className="px-6 py-3 text-white font-semibold rounded-lg border border-white/50 backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
              BROWSE ALL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
