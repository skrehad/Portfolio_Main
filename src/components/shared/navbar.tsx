"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDownload } from "react-icons/fa"; // এটা যোগ করো

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Rehad
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 md:items-center">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={
              pathname === "/blog"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-orange-300"
                : "hover:text-gray-500 font-bold"
            }
          >
            Contact
          </Link>

          {/* Resume Download Button for Desktop */}
          <a
            href="https://drive.google.com/uc?export=download&id=1JhxQ8JmxL2UC-jIkeD_QXy39167pvXLx"
            download="Resume.pdf"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2  flex items-center gap-2 border-2 border-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300">
              <FaDownload className="text-[20px]" /> My Resume
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={
              pathname === "/blog"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-orange-300"
                : "block text-white hover:text-gray-400 font-bold"
            }
          >
            Contact
          </Link>

          {/* Resume Download Button for Mobile */}
          <a
            href="https://drive.google.com/uc?export=download&id=1JhxQ8JmxL2UC-jIkeD_QXy39167pvXLx"
            download="Resume.pdf"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-full px-4 py-2 flex justify-center items-center gap-2 border-2 border-gray-300 rounded-lg hover:border-orange-300 hover:text-orange-300 transition-all duration-300">
              <FaDownload className="text-[20px]" /> My Resume
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
