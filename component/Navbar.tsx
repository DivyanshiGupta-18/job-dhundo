"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Menu, X, Search, Bell, User } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800/95 backdrop-blur-sm fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Briefcase className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">JobHunt</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition duration-200">Home</Link>
            <Link href="Job" className="text-gray-300 hover:text-white transition duration-200">Jobs</Link>
            <Link href="companies" className="text-gray-300 hover:text-white transition duration-200">Companies</Link>
            <Link href="Resources" className="text-gray-300 hover:text-white transition duration-200">Resources</Link>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white transition duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition duration-200">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition duration-200">
              <User className="h-5 w-5" />
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Post a Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, height: "auto" },
            hidden: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">Home</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">Jobs</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">Companies</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition duration-200">Resources</Link>
            <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Post a Job
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;