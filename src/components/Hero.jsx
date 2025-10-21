// src/components/Hero.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Floating glow orbs for techy vibe */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-16 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-300" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold font-montserrat leading-tight"
        >
          Powering the Future of <br />
          <span className="text-cyan-400">Smart Electronics</span>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto font-inter"
        >
          Discover high-performance gadgets designed to simplify your life —
          from powerful laptops to next-gen smart devices.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row gap-4 mt-10 justify-center"
        >
          <Link
            to="/shop"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition duration-200"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition duration-200"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Gradient bottom overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
