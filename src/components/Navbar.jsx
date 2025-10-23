// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: "Shop All", path: "/shop" },
    {
      name: "Shop By Room",
      dropdown: [
        "Living Room",
        "Dining Room",
        "Kitchen Lighting",
        "Bedroom",
        "Bathroom",
        "Foyer",
        "Staircase",
      ],
    },
    {
      name: "Chandeliers",
      dropdown: [
        "All Chandeliers",
        "Antler Chandeliers",
        "Branch Chandeliers",
        "Bubble Chandeliers",
        "Crystal Chandeliers",
        "Flush Mount Chandeliers",
        "Modern Chandeliers",
        "Sputnik Chandeliers",
        "Staircase Chandeliers",
        "Rustic Chandeliers",
        "Rectangular Chandeliers",
      ],
    },
    {
      name: "Shop By Lighting",
      dropdown: [
        "Ceiling Lights",
        "Ceiling Fans",
        "Pendant Lighting",
        "Wall Lights",
        "Outdoor Lights",
        "LED Strip Lights",
        "Lighting Accessories",
      ],
    },
    {
      name: "Lamps",
      dropdown: ["Floor Lamps", "Table Lamps"],
    },
    { name: "Contact", path: "/contact" },
  ];

  const handleEnter = (menu) => {
    setActiveMenu(menu);
    setIsHovered(true);
  };

  const handleLeave = () => {
    setActiveMenu(null);
    setIsHovered(false);
  };

  return (
    <header
      className="w-full font-inter font-semibold relative z-50 transition-all duration-300"
    >
      {/* --- Top Bar --- */}
      <div className="w-full text-xs text-center py-3 tracking-wide bg-black text-white">
        24/7 E-MAIL CUSTOMER SUPPORT | FREE SHIPPING ON ALL ORDERS
      </div>

      {/* --- Main Navbar --- */}
      <nav onMouseLeave={handleLeave}
        className={`h-full flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 relative ${
          isHovered
            ? "bg-white text-black h-full items-start"
            : "bg-black text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={isHovered ? "/logo-dark.png" : "/logo-light.png"}
            alt="SEUS Lighting"
            className="h-10 w-auto transition-all duration-300"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-8 relative">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => handleEnter(item.name)}
            >
              <div
                className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
                  isHovered
                    ? "text-black hover:text-amber-500"
                    : "text-white hover:text-amber-400"
                }`}
              >
                {item.path ? (
                  <Link to={item.path}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
                {item.dropdown &&
                  (isHovered ? (
                    <BsArrowDown className="text-amber-500" />
                  ) : (
                    <BsArrowRight className="text-sm" />
                  ))}
              </div>

              {/* Dropdown Menu */}
              {item.dropdown && activeMenu === item.name && (
                <div
                  className="mt-6 text-black px-6 grid grid-cols-2 gap-8 w-full h-full"
                >
                  {item.dropdown.map((link, j) => (
                    <Link
                      key={j}
                      to={`/category/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm hover:underline underline-offset-8 transition"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div
          className={`flex items-center space-x-5 text-lg transition-all duration-300 ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className={`text-sm px-3 py-2 rounded-full focus:outline-none focus:ring-1 placeholder-gray-400 transition-all ${
                isHovered
                  ? "bg-gray-100 focus:ring-amber-500 text-black"
                  : "bg-neutral-800 focus:ring-amber-400 text-white"
              }`}
            />
            <FiSearch
              className={`absolute right-3 top-2.5 ${
                isHovered ? "text-gray-500" : "text-gray-400"
              }`}
            />
          </div>

          <Link to="/account" className="hover:text-amber-500">
            <FiUser />
          </Link>
          <Link to="/wishlist" className="hover:text-amber-500 relative">
            <FiHeart />
            <span
              className={`absolute -top-2 -right-3 rounded-full px-1 text-[10px] ${
                isHovered
                  ? "bg-amber-500 text-black"
                  : "bg-amber-400 text-black"
              }`}
            >
              0
            </span>
          </Link>
          <Link to="/cart" className="hover:text-amber-500 relative">
            <FiShoppingCart />
            <span
              className={`absolute -top-2 -right-3 rounded-full px-1 text-[10px] ${
                isHovered
                  ? "bg-amber-500 text-black"
                  : "bg-amber-400 text-black"
              }`}
            >
              0
            </span>
          </Link>
        </div>

      </nav>
    </header>
  );
}
