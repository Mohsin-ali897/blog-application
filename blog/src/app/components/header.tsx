'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Blog<span className="text-blue-500">.com</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex md:items-center absolute md:relative bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-lg">
            <li>
              <Link href="/" className="block py-2 px-5 hover:text-blue-500 transition">Home</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-5 hover:text-blue-500 transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-5 hover:text-blue-500 transition">Contact</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-5 hover:text-blue-500 transition">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
