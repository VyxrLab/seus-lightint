import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { CgInstagram } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { LiaLinkedinIn } from 'react-icons/lia';

const Footer = () => {
  const sections = [
    {
      title: "Shop",
      links: [
        { name: "Laptops", path: "/category/laptops" },
        { name: "Smartphones", path: "/category/smartphones" },
        { name: "Accessories", path: "/category/accessories" },
        { name: "Audio", path: "/category/audio" },
        { name: "Gaming", path: "/category/gaming" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Customer Service", path: "/support" },
        { name: "FAQs", path: "/faqs" },
        { name: "Warranty Policy", path: "/warranty" },
        { name: "Returns & Refunds", path: "/returns" },
        { name: "Track Order", path: "/track-order" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy" },
      ],
    },
  ];

  return (
    <footer>
      <div className="w-full bg-indigo-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 justify-between items-start md:px-9 px-5 py-12">
          
          {/* Logo Section */}
          <div className="mx-12 md:mx-32 col-span-2 md:col-span-2">
            <img src="/logo.png" alt="Company Logo" className="w-36 mb-4" />
            <p className="text-sm font-inter text-gray-300">
              Your trusted source for cutting-edge electronics, unbeatable deals, and premium support.
            </p>
          </div>

          {/* Inline Links Sections */}
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <h4 className="text-cblue font-bold mb-4 uppercase font-montserrat">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.path}
                      className="hover:text-cblue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {/* <div className="col-span-2 lg:col-span-2 md:max-w-sm">
            <h4 className="text-cblue font-montserrat font-bold mb-4 uppercase">Stay Updated</h4>
            <p className="text-sm font-inter mb-4">
              Get exclusive offers, new arrivals, and tech tips delivered to your inbox.
            </p>
            <form className="flex rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 focus:outline-none bg-gray-700 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="btn py-3 px-6 hover:bg-darkred bg-reddish"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Divider */}
        <hr className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />

        {/* Bottom Footer */}
        <div className="w-full bg-sky-600 text-white py-8 text-center text-xs md:text-base font-montserrat">
          © {new Date().getFullYear()} <strong>ElectroSphere</strong>. All Rights Reserved. 

          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white"><LiaLinkedinIn /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-white"><BsTwitterX /></a>
            <a href="#" className="text-gray-300 hover:text-white"><CgInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white"><GrYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
