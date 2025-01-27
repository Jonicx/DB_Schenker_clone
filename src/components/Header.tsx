import React, { useState, useEffect } from 'react';
import { Search, Globe, User, Menu, X } from 'lucide-react';
import dbSchenkerLogo from "../Assets/DB-Schenker-logo.svg";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavVisible(false); // Hide navbar on scroll down
      } else {
        setIsNavVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const menuDrawer = document.querySelector('.menu-drawer');
      if (isMenuOpen && menuDrawer && !menuDrawer.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <header
      className={`${
        isNavVisible ? 'top-0' : '-top-32'
      } fixed left-0 w-full bg-white z-50 shadow-sm transition-all ease-in-out duration-300`}
    >
      <div
        className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 mx-auto"
        style={{
          maxWidth: '100%',
        }}
      >
        <div className="flex items-center justify-between py-4" style={{ height: '7.5rem' }}>
          {/* Logo Section */}
          <div className="flex items-center space-x-12">
            <img
              src={dbSchenkerLogo}
              alt="DB Schenker Logo"
              className="w-32 lg:w-48 md:w-48 sm:w-40  h-auto course-pointer"
              onClick={() => navigate('/')} // Navigate to the homepage on click
            />
          </div>

          {/* Navigation Links and Buttons */}
          <div className="flex-grow flex items-center justify-end -space-x-2">
            {/* Navigation Links (visible on large screens) */}
            <nav className="hidden xl:flex">
              <ul className="flex -space-x-2">
              <li>
                <a onClick={() => navigate('/business')} className="relative font-[900] text-[1.3rem] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="relative font-[900] text-[1.3rem] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="relative font-[900] text-[1.3rem] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  Insights
                </a>
              </li>
              </ul>
            </nav>

            {/* Mobile Layout for Medium and Small Screens */}
            <div className="flex xl:hidden items-center justify-between">
              {/* Search Button on the Left */}
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5" />
              </button>

              {/* Login Button */}
              <div>
                
              </div>
              <button
                className="bg-[#005F6A] text-white px-4 py-3 rounded-full hover:bg-[#004D55] flex items-center -space-x-4"
                style={{
                  boxShadow: '3px 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              >
                <User className="w-6 h-5" strokeWidth="1.3" />
                <span className="font-bold hidden lg:inline">Login</span>
              </button>

              {/* Mobile Menu Toggle Button on the Right */}
              <button
                className="p-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent menu from closing when clicked
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Drawer (visible when menu icon is clicked) */}
            <div
              className={`${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              } fixed left-0 top-0 w-[90vw] h-full bg-white shadow-lg z-50 transition-transform duration-300 menu-drawer`}
            >
              {/* Close Button Added Here */}
              <button
                className="absolute top-4 right-4 p-2 text-black hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)} // Close the menu
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col justify-between h-[98%]" style={{ padding: '5rem 5rem 0rem 5rem' }}>
                <ul className="flex flex-col space-y-4 p-4">
                  <li>
                    <a href="#" className="font-extrabold text-lg">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-extrabold text-lg">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-extrabold text-lg">
                      Insights
                    </a>
                  </li>
                </ul>
                <div className="flex flex-row space-x-4 p-4 mb-2">
                  <button className="flex items-center -space-x-4">
                    <Globe className="w-5 h-5" strokeWidth="1.3" />
                    <span>Global</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <span>English</span>
                  </button>
                </div>
              </nav>
            </div>

            {/* Search Button */}
            <button className="p-2 hover:bg-gray-100 rounded-full hidden xl:flex">
              <Search className="w-5 h-5" />
            </button>

            {/* Login Button */}
            
            <button
              className="bg-[#005F6A] hidden text-white px-4 py-3 rounded-full hover:bg-[#004D55] xl:flex items-center space-x-1"
            >
              <User className="w-6 h-5" strokeWidth="1.3" />
              <span className="font-bold xl:flex hidden">Login</span>
            </button>

            {/* Global Selector */}
            <button className="hidden xl:flex items-center space-x-2">
              <Globe className="w-5 h-5" strokeWidth="1.3" />
              <span>Global</span>
            </button>
            <button className="hidden xl:flex items-center">
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
