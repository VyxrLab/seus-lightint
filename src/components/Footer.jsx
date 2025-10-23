import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-100 -mt-20">
      <div className="max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Shop Column */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Modern Light Fixtures</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Foyer Lighting</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Chandeliers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Staircase Chandelier</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Wall Lights</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Lamps</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Blogs</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Order Tracking</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Customize Your Light</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Chandelier Size Calculator</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Affiliate</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Terms Of Service</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Refund Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-200">Payments</a></li>
            </ul>
          </div>

          {/* Sign Up & Contact Info Column */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Sign Up for email</h4>
            <p className="text-sm mb-4">Sign up to get first dibs on new arrival, sales, exclusive products, events and more!</p>
            <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden mb-8 shadow-sm
             focus-within:ring-2 focus-within:ring-yellow-500 transition-all duration-300">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="grow p-3 text-sm border-none focus:outline-none"
              />
              <button className="bg-transparent text-gray-500 p-3 hover:text-gray-900 transition-colors duration-200">
                Sign up <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                <span>30 N Gould St Ste N, Sheridan, WY 82801</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-500 mr-3" />
                <span>info@seuslighting.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-500 mr-3" />
                <span>346-698-3934</span>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-12 ' />
        {/* Bottom Section: Copyright & Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-lg font-inter mb-4 md:mb-0">© 2025 Modern Chandelier. All rights reserved.</p>
          <img src='/logo-dark.png' className='w-20 object-contain mt-4' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;