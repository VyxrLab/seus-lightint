import React, { useState } from "react";

const CustomerReviews = () => {
  const [relevant, setRelevant] = useState("Most Relevant");
  const [ratings, setRatings] = useState("All Ratings");
  const [media, setMedia] = useState("With Media");

  const reviews = [
    {
      id: 1,
      stars: 5,
      date: "October 20, 2025",
      name: "Sarah Johnson",
      verified: true,
      review:
        "I purchased five different lights online, and this one truly stands out as the most exceptional of them all. The craftsmanship and design are simply exquisite — the actual product looks even more impressive in person than in the photos. It exudes elegance and sophistication, instantly elevating the atmosphere of my space.",
    },
    {
      id: 2,
      stars: 4,
      date: "October 10, 2025",
      name: "Michael Lee",
      verified: true,
      review:
        "The moment I unboxed it, I was amazed by how much more beautiful it looks in person than in the photos. The design is elegant and timeless, with exquisite attention to detail that speaks of true craftsmanship. It brings such a refined and luxurious ambiance to my home, effortlessly transforming the space.",
    },
    {
      id: 3,
      stars: 5,
      date: "September 30, 2025",
      name: "Ayesha Khan",
      verified: true,
      review:
        "The moment I unboxed it, I was amazed by how much more beautiful it looks in person than in the photos. The design is elegant and timeless, with exquisite attention to detail that speaks of true craftsmanship. It brings such a refined and luxurious ambiance to my home, effortlessly transforming the space.",
    },
  ];

  return (
    <section className="w-full min-h-[650px] bg-white flex flex-col items-center py-12 font-[Inter] overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-bold tracking-[-0.02em] text-black text-center mb-10">
        CUSTOMER REVIEWS
      </h2>

      {/* Content Wrapper */}
      <div className="w-[90%] mx-auto flex justify-between h-[500px]">
        {/* Rating Part */}
        <div className="w-[30%] flex flex-col">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-black">4.9 / 5</span>
            <div className="flex items-center text-yellow-500 text-xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <p className="text-gray-700 text-sm mt-2">Based on 214 reviews.</p>

          <div className="w-[67%] h-[1px] bg-black my-6"></div>

          <div className="w-full h-[200px]">
            <img
              src="/ratingimg.png"
              alt="Customer Review Visual"
              className="w-[276px] h-[167px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Reviews Part */}
        <div className="w-[70%] flex flex-col">
          {/* Filters Row */}
          <div className="flex items-center gap-3 mb-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </span>

              <input
                type="text"
                placeholder="Search reviews..."
                className="w-[70%] pl-10 pr-4 py-2 rounded-full bg-[#B88C1D] text-white placeholder-white outline-none"
              />
            </div>

            {/* Dropdowns */}
            <select
              value={relevant}
              onChange={(e) => setRelevant(e.target.value)}
              className="px-4 py-2 rounded-full bg-[#B88C1D] text-white cursor-pointer outline-none"
            >
              <option>Most Relevant</option>
              <option>Recent</option>
              <option>Rating: H - L</option>
              <option>Rating: L - H</option>
            </select>

            <select
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
              className="px-4 py-2 rounded-full bg-[#B88C1D] text-white cursor-pointer outline-none"
            >
              <option>All Ratings</option>
              <option>5 Stars</option>
              <option>4 Stars</option>
              <option>3 Stars</option>
              <option>2 Stars or Less</option>
            </select>

            <select
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              className="px-4 py-2 rounded-full bg-[#B88C1D] text-white cursor-pointer outline-none"
            >
              <option>With Media</option>
              <option>Without Media</option>
            </select>
          </div>

          <div className="w-full h-[1px] bg-black mb-4"></div>

          {/* Scrollable Reviews List */}
          <div
            className="flex-1 overflow-y-auto pr-3 space-y-6"
            style={{
              maxHeight: "400px",
              scrollbarWidth: "thin",
              scrollbarColor: "#B88C1D transparent",
            }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-yellow-500 text-lg">
                    {"★".repeat(review.stars)}
                  </div>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <p className="text-lg tracking-[-0.02em] font-semibold text-black">
                    {review.name}
                  </p>
                  {review.verified && (
                    <p className="text-xs text-green-700 flex items-center">
                      ✓ Verified Buyer
                    </p>
                  )}
                </div>

                <p className="text-gray-700 tracking-[-0.02em] text-lg mb-3 leading-relaxed">
                  {review.review}
                </p>

                <div className="w-full h-[1px] bg-black mb-3"></div>
                <p className="text-xs tracking-[-0.02em] text-gray-500">Was this review helpful?</p>
              </div>
            ))}
          </div>

          {/* Scrollbar Style */}
          <style>
            {`
              ::-webkit-scrollbar {
                width: 8px;
              }
              ::-webkit-scrollbar-track {
                background: transparent;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #B88C1D;
                border-radius: 10px;
              }
              ::-webkit-scrollbar-thumb:hover {
                background-color: #a17817;
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
