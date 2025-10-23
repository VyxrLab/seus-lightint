import React, { useState } from "react";

const collectionData = {
  room: {
    image: "/col1.png",
    title: "Shop by Room",
    description:
      "Discover a wide range of designs available in multiple shapes, each model offering more than three elegant color options and advanced multi-directional lighting. Every fixture features customizable color temperatures ranging from 3000K to 4000K, allowing you to create the perfect mood, from warm and cozy to crisp and modern illumination.",
  },
  chandeliers: {
    image: "/col2.png",
    title: "Shop by Chandeliers",
    description:
      "Discover a wide range of chandeliers available in multiple shapes, each model offering more than three elegant color options and advanced multi-directional lighting. Every fixture features customizable color temperatures ranging from 3000K to 4000K, allowing you to create the perfect mood, from warm and cozy to crisp and modern illumination.",
  },
  lighting: {
    image: "/col3.png",
    title: "Shop by Lighting",
    description:
      "Discover a wide range of chandeliers available in multiple shapes, each model offering more than three elegant color options and advanced multi-directional lighting. Every fixture features customizable color temperatures ranging from 3000K to 4000K, allowing you to create the perfect mood, from warm and cozy to crisp and modern illumination",
  },
};

const CollectionSection = () => {
  const [activeTab, setActiveTab] = useState("room");

  const current = collectionData[activeTab];

  return (
    <section
      className="w-full h-[750px] bg-[#FBF7F0] flex flex-col items-center py-12"
      id="collection"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-bold font-[Inter] tracking-[-0.02em] text-black text-center -mt-5">
        COLLECTION
      </h2>
      <p className="text-lg md:text-2xl font-semibold font-[Inter] text-black mt-4 text-center">
        The best off the shelf
      </p>

      {/* Container */}
      <div className="w-[55%] mx-auto mt-10 flex flex-col items-center">
        {/* Tabs */}
        <div className="flex justify-between w-full font-[Inter] tracking-[-0.02em text-black text-base md:text-lg font-medium">
          {["room", "chandeliers", "lighting"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative pb-2 transition-all duration-300 ${
                activeTab === key
                  ? "font-semibold text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {key === "room"
                ? "Shop by Room"
                : key === "chandeliers"
                ? "Shop by Chandeliers"
                : "Shop by Lighting"}
            </button>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-black mt-2 mb-10"></div>

        {/* Content */}
        <div className="w-full flex justify-between items-center h-[400px] relative">
          {/* Left Image Section */}
          <div className="w-[55%] h-full transition-all duration-700 ease-in-out">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover rounded-4xl transition-opacity duration-700"
            />
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-[100%] bg-black mx-6"></div>

          {/* Right Text Section */}
          <div className="w-[30%] flex flex-col justify-center transition-all duration-700 ease-in-out">
            <h3 className="text-2xl font-semibold font-[Inter] tracking-[-0.02em] text-black mb-3">
              {current.title}
            </h3>
            <p className="text-base font-[Inter] tracking-[-0.02em] text-gray-700 mb-6">
              {current.description}
            </p>

            <button className="w-fit px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 bg-[#B88C1D] hover:bg-gradient-to-b hover:from-[#EBA900] hover:to-[#B88C1D] hover:opacity-90 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
