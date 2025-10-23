import React, { useState } from "react";

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Top categories (7 boxes)
  const topCategories = [
    { title: "new arrivals", image: "/category1.png" },
    { title: "best sellers", image: "/category2.png" },
    { title: "top rated", image: "/category3.png" },
    { title: "brands we love", image: "/category4.png" },
    { title: "trending", image: "/category5.png" },
    { title: "the re-imagined", image: "/category6.png" },
    { title: "", image: "/category7.png" },
  ];

  // Featured categories for bottom section
  const featuredCategories = [
    { title: "chandeliers", image: "/fc1.png" },
    { title: "hanging lights", image: "/fc2.png" },
    { title: "pendants", image: "/fc3.png" },
    { title: "ceiling fans", image: "/fc4.png" },
    { title: "chandeliers", image: "/fc1.png" },
    { title: "hanging lights", image: "/fc2.png" },
    { title: "pendants", image: "/fc3.png" },
  ];

  const visibleImages = featuredCategories.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex < featuredCategories.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  return (
    <section className="w-full h-[700px] bg-[#FBF7F0] flex flex-col">
      {/* ---------- Upper Section ---------- */}
      <div className="h-[250px] flex flex-col items-center justify-center">
        <h2 className="font-[Inter] tracking-[-0.01em] text-6xl font-bold text-black mt-9 mb-6">CATEGORIES</h2>

        <div className="flex w-full justify-between px-6 md:px-12 gap-4">
          {topCategories.map((cat, index) => (
            <div
              key={index}
              className="flex-1 h-[170px] rounded-lg overflow-hidden relative cursor-pointer group"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Inter] tracking-[-0.02em] text-white font-semibold text-sm md:text-lg">
                  {cat.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Lower Section ---------- */}
      <div className="h-[450px] relative px-6 md:px-12 mt-6">
        <h3 className="font-[Inter] tracking-[-0.02em] text-3xl font-bold text-black mt-3 mb-5 text-center">
          featured <i className="font-[Playfair_Display] tracking-[-0.02em] font-semibold">categories</i>
        </h3>

        <div className="flex items-center relative">
          <div className="flex overflow-hidden w-full gap-4">
            {visibleImages.map((item, index) => (
              <div
                key={index}
                className="min-w-[23%] flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
                <p className="font-[Playfair_Display] tracking-[-0.02em] text-black font-medium italic text-sm md:text-lg mt-3">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* ---------- Arrow Button ---------- */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-7/8 p-2 rounded-full shadow-none transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            {/* Arrow Image Placeholder */}
            <img
              src="/arrow.png"
              alt="Next"
              className="ml-10 w-10 h-10"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
