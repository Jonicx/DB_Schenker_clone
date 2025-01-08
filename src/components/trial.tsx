import React, { useState, useEffect } from 'react';
import { Search, Globe, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
          maxWidth: '85rem',
        }}
      >
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-12">
            <h1 className="text-2xl font-bold">SCHENKER</h1>
          </div>

          {/* Navigation Links and Buttons */}
          <div className="flex-grow flex items-center justify-end space-x-6">
            {/* Navigation Links (visible on large screens) */}
            <nav className="hidden xl:flex">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="font-extrabold text-xl">
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
            </nav>

            {/* Mobile Menu Toggle Button (visible on medium and small screens) */}
            <button
              className="xl:hidden p-2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent menu from closing when clicked
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Drawer (visible when menu icon is clicked) */}
            <div
              className={`${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              } fixed left-0 top-0 w-[90vw] h-full bg-white shadow-lg z-50 transition-transform duration-300 menu-drawer`}
            >
              <nav className="flex flex-col justify-between h-full">
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
                <div className="p-4">
                  <button className="flex items-center space-x-1 mb-2">
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
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>

            {/* Login Button */}
            <button
              className="bg-[#005F6A] text-white px-5 py-3 rounded-full hover:bg-[#004D55] flex items-center space-x-2"
              style={{
                boxShadow: '3px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              <User className="w-4 h-4" />
              <span className="font-bold hidden lg:inline">Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// Compare this snippet from src/components/ArticleCard.tsx:
interface Article {
  id: string;
  title: string;
  image: string;
  date: string;
  tags: string[];
  category: string;
}

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md min-w-[300px] max-w-[400px] snap-start">
      <div className="relative">
        {/* Image replaced with gradient background */}
        {/* <img src={article.image} alt={article.title} className="w-full h-48 object-cover" /> */}
        <div className="w-full h-48 bg-gradient-to-r from-teal-500 to-blue-500" />
        
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 max-w-[90%]">
          {article.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-0.5 text-xs bg-white/90 backdrop-blur-sm text-gray-700 rounded-full 
                        truncate max-w-[150px] hover:max-w-none transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{article.date}</span>
          <a 
            href="#" 
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

//ShippingForm.tsx
import { MapPin } from 'lucide-react';

const ShippingForm = () => {
  const [activeTab, setActiveTab] = useState('land');

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-[430px] flex flex-col">
      <div className="flex space-x-6 mb-6 gap-4">
        <button
          className={`pb-2 ${activeTab === 'land' ? ' border-black text-black border-b-[3px]' : ''} font-extrabold text-xl`}
          onClick={() => setActiveTab('land')}
          style={{fontWeight:'extra-bold'}}
        >
          Land
        </button>
        <button
          className={`pb-2 ${activeTab === 'air' ? ' border-black text-black border-b-[3px]'  : ''} font-extrabold text-xl `}
          onClick={() => setActiveTab('air')}
          style={{fontWeight:'extra-bold'}}
        >
          Air
        </button>
        <button
          className={`pb-2 ${activeTab === 'ocean' ? ' border-black text-black border-b-[3px]' : ''} font-extrabold text-xl`}
          onClick={() => setActiveTab('ocean')}
          style={{fontWeight:'extra-bold'}}
        >
          Ocean
        </button>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="space-y-6 flex-grow">
          <div>
            <label className="block text-xl font-bold mb-4">From</label>
            <div className="flex space-x-4">
              <div className="flex-1">
                <select className="w-full p-3 rounded-md bg-white font-light text-gray-400" 
                style={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                }}
                >
                  <option>Select Location</option>
                </select>
              </div>
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Provide City and Zipcode"
                  className="w-full p-3 rounded-md font-light text-gray-400"
                  style={{
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                    }}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xl  font-bold mb-4">To</label>
            <div className="flex space-x-4">
              <div className="flex-1">
                <select className="w-full p-3 border rounded-md bg-white font-light text-gray-400"
                  style={{
                    boxShadow: '3px 4px 10px rgba(0, 0, 0, 0.2)',
                  }}>
                  <option>Select Location</option>
                </select>
              </div>
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Provide City and Zipcode"
                  className="w-full p-3 rounded-md font-light text-gray-400"
                  style={{
                    boxShadow: '3px 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#005F6A] shadow-lg text-white px-4 py-3 rounded-full hover:bg-[#005F6A]" style={{fontWeight:'bold'}}>
            Get a spot offer
          </button>
        </div>
      </div>
    </div>
  );
};

//TrackingForm.tsx

<div className="relative bg-white p-8 rounded-lg shadow-lg h-[430px] flex flex-col">
<h2 className="text-xl font-bold mb-6">Track your shipment</h2>
<input
  type="text"
  placeholder='ID Number'
  className="w-full p-3 rounded-md font-light text-gray-400"
  style={{
    boxShadow: '3px 4px 10px rgba(0, 0, 0, 0.2)',
    }}
/>
<div className=" absolute mt-10 bottom-5 right-8" style={{justifyContent:'flex-end'}}>
  <button className="bg-[#005F6A] text-white px-5 py-3 mb-2 rounded-full shadow-lg hover:bg-[#005F6A] " style={{fontWeight:'bold', justifyContent:'flex-end'}}>
    Track
  </button>
</div>
</div>

