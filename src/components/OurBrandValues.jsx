import React from "react";

const OurBrandValues = () => {
  return (
    <section className="w-full h-[720px] bg-white flex flex-col items-center justify-start py-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-bold text-black font-[Inter] tracking-[-0.02em] text-center mb-10">
        OUR BRAND VALUES
      </h2>

      {/* Single Image */}
      <div className="w-[90%] h-[370px] flex justify-center items-center mb-10">
        <img
          src="/OBVIMG.png" // Replace with your own image
          alt="Our Brand Values"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Description Text */}
      <div className="w-[90%] text-center mx-auto">
        <p className="text-gray-700 text-base md:text-xl font-semibold font-[Inter] tracking-[-0.02em] leading-relaxed">
          Light defines how we see and how we feel. Our mission is to transform that everyday element into art pieces that move with you, change with your mood, and complement the beauty of your surroundings.  We merge timeless aesthetics with smart functionality, ensuring every fixture delivers both elegance and performance.  It’s not just about brightness, it’s about balance, emotion, and the subtle art of living beautifully under perfect light.
        </p>
      </div>
    </section>
  );
};

export default OurBrandValues;
