import React, { useState } from 'react';
import { Heart, Star, ShoppingCart, Tag } from 'lucide-react';

// --- MOCK DATA ---
// Using placeholder images that visually represent the product types for compliance.
const mockProducts = [
  {
    id: 1,
    name: 'Ceiling Fan',
    rating: 4.5,
    reviews: 16,
    discount: '40% OFF',
    price: 328,
    imageUrl: '/fan.png',
    tags: ['indoor', 'dining room', 'bed room'],
    colors: ['#000000', '#D4AC00'],
  },
  {
    id: 2,
    name: 'Glass Flower Pendant Lights',
    rating: 4.8,
    reviews: 90,
    discount: '40% OFF',
    price: 728,
    imageUrl: '/flowerbulb.png',
    tags: ['indoor', 'dining room', 'living room', 'bed room'],
    colors: ['#000000', '#D4AC00'],
  },
  {
    id: 3,
    name: 'Aqua Blue Glass Chandelier',
    rating: 4.7,
    reviews: 75,
    discount: '40% OFF',
    price: 278,
    imageUrl: 'aqua.png',
    tags: ['indoor', 'dining room', 'living room', 'bed room'],
    colors: ['#000000', '#D4AC00'],
  },
  {
    id: 4,
    name: 'Room Light',
    rating: 4.2,
    reviews: 59,
    discount: '40% OFF',
    price: 278,
    imageUrl: 'chandelier.png',
    tags: ['indoor', 'dining room', 'bed room'],
    colors: ['#000000', '#D4AC00'],
  },
  {
    id: 5,
    name: 'Long Chandelier',
    rating: 4.0,
    reviews: 52,
    discount: '40% OFF',
    price: 1199.9,
    imageUrl: 'chandelier1.png',
    tags: ['indoor', 'dining room', 'living room'],
    colors: ['#000000', '#D4AC00'],
  },
  {
    id: 6,
    name: 'Outdoor Wall Light',
    rating: 3.9,
    reviews: 7,
    discount: '40% OFF',
    price: 328,
    imageUrl: 'bulb.png',
    tags: ['outdoor', 'wall light'],
    colors: ['#000000', '#D4AC00'],
  },
];

// --- UTILITY COMPONENTS ---

/**
 * Renders a row of stars and the review count.
 * @param {number} rating - The numerical rating.
 * @param {number} reviews - The number of reviews.
 */
const StarRating = ({ rating, reviews }) => {
  // Simple function to map rating to star count (using 5 for max)
  const fullStars = Math.floor(rating);
  const starsArray = Array(5).fill(null).map((_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 transition-colors duration-300 ${
        i < fullStars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
      }`}
    />
  ));

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">{starsArray}</div>
      <span className="text-sm font-semibold text-gray-500">({reviews})</span>
    </div>
  );
};

// --- CORE PRODUCT CARD COMPONENT ---

/**
 * Renders a single, beautifully designed product card.
 * @param {Object} product - Product data object.
 */
const ProductCard = ({ product }) => {
  const { name, rating, reviews, discount, price, imageUrl, tags, colors } = product;
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="flex flex-col rounded-lg border w-full min-h-125">
      
    {/* --- Image and Badges Container --- */}
      <div className="relative p-4 flex items-center justify-center">

        {/* Absolute Top Left (Rating) */}
        <div className="absolute top-3 left-4">
          <StarRating rating={rating} reviews={reviews} />
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-4 bg-[#FF0000] text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
          {discount}
        </div>
        
      </div>

    {/* Image - Using placeholder with styling */}
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto max-h-64 object-contain transition-transform duration-500 hover:rotate-2 hover:scale-[1.05] ease-in-out"
          onError={(e) => e.target.src = 'https://placehold.co/300x300/E5E7EB/A1A1AA?text=Product'} // Simple fallback
        />

      {/* --- Content Area --- */}
      <div className="px-4 flex flex-col justify-between gap-4">
        
        {/* Tags and Heart */}
        <div className="flex justify-between items-center text-xs">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-0.5 border rounded-full flex items-center transition-colors duration-300 bg-gray-200 hover:bg-gray-300">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors duration-300" />
        </div>

        {/* Color Options and Price */}
        <div className="flex flex-col justify-between">
            <div className="text-2xl font-inter font-semibold leading-6 tracking-tighter flex justify-between items-end">
                <strong>Modern <span className='font-playfair'>{name}</span></strong>
                <p className="text-gray-500 text-lg">From</p>
            </div>

            <div className='flex justify-between items-center font-semibold font-inter mt-3'>
                <div className="flex space-x-2">
                    {colors.map((color, index) => (
                        <div
                        key={index}
                        className={`w-7 h-6 rounded-lg cursor-pointer transition-all duration-300 ${
                            selectedColor === color ? 'border-gray-900 ring-2 ring-offset-1 ring-gray-400' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        ></div>
                    ))}
                </div>
                <p className="text-orange-600 text-xl">
                    JUST ${price.toFixed(price % 1 === 0 ? 0 : 1)}
                </p>
            </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="mt-3 w-full py-3 bg-[#B88C1D] text-white font-semibold rounded-lg
           uppercase transition-all duration-300 ease-in-out hover:bg-yellow-700"
          onClick={() => console.log(`Added ${name} to cart`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// --- MAIN APPLICATION COMPONENT ---

const BestSeller = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans">
      
      {/* --- Header Section (Matching Image Text) --- */}
      <div className="text-center mb-10 mt-4">
        <h1 className="text-6xl font-inter font-semibold text-black tracking-tighter">
          BEST SELLERS
        </h1>
        <p className="text-2xl mt-4 font-semibold font-inter">
          The best off the shelf
        </p>
      </div>

      {/* --- Product Grid --- */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Simple Footer/Spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default BestSeller;
