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

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    //ServiceCard
    <div className="min-w-[330px] flex-shrink-0 snap-start p-2">
      <div className=" rounded overflow-hidden transform transition-all duration-300 ">
        <div className={`relative h-96 ${service.bgColor} hover:scale-105 `} style={{height: '30rem'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-1 mt-5 min-h-[100px] flex flex-col justify-between">
          <h3 className="bottom-4 left-4 text-3xl text-black">{service.title}</h3>
          <a
            href={service.link}
            className="items-center gap-2 text-[#005F6A] hover:text-teal-800 font-extrabold transition-colors duration-200"
          >
            Start here
          </a>
        </div>
      </div>
    </div>
  );
}

//Updated ServiceCard with images.
export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="min-w-[300px] sm:min-w-[330px] flex-shrink-0 snap-start p-4">
      <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div
          className={`relative ${service.bgColor} aspect-w-3 aspect-h-4`}
          style={{ backgroundImage: `url(${service.bgImage || ''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            aria-hidden="true"
          />
        </div>
        <div className="p-4 mt-5 flex flex-col justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-black">{service.title}</h3>
          <a
            href={service.link}
            className="mt-4 text-[#005F6A] hover:text-teal-800 font-extrabold transition-colors duration-200"
            aria-label={`Learn more about ${service.title}`}
          >
            Start here
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
      <div className="space-y-20">
          {blog.map((blog) => (
              <div
                  key={blog.id}
                  className={`flex flex-col sm:flex-row items-center gap-28 ${
                      blog.id === 2 ? "sm:flex-row-reverse" : ""
                  }`}
              >
                  {/* Image Replacement: Colored Background */}
                  <div
                      className={`relative flex-shrink-0 sm:w-1/2 h-64 rounded ${blog.bgColor}`}
                      style={{ height: '26rem'}}
                  >
                      <button
                          className="absolute bottom-4 rounded-full font-extrabold left-4 bg-white text-black text-xs px-4 py-2 shadow hover:bg-gray-200"
                       >
                          {blog.button}
                      </button>
                  </div>

                  {/* Description */}
                  <div className="sm:w-1/2 p-7">
                      <p className="text-sm font-light text-slate-500 mb-7">{blog.subheading}</p>
                      <h2 className="text-3xl font-normal mb-7">{blog.title}</h2>
                      <p className="text-xl font-light mb-10">{blog.description}</p>
                      <a
                          className="items-center text-[#005F6A] hover:text-teal-800 font-extrabold transition-colors duration-200"
                      >
                          {blog.link}
                      </a>
                  </div>
              </div>
          ))}
      </div>
  );
}

const TrackingForm = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shipmentFound, setShipmentFound] = useState<boolean | null>(null);

  const handleSearch = () => {
    if (trackingId === 'CIN220131001') {
      setShipmentFound(false);
    } else {
      setShipmentFound(true);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTrackingId('');
    setShipmentFound(null);
  };

  return (
    <div>
      {/* Tracking Form (Your original form) */}
      <div className="bg-white p-8 rounded-md shadow-lg flex flex-col">
        {/* ... (rest of your form code) */}
        <button
          className="bg-[#005F6A] text-white px-5 py-3 rounded-full shadow-md hover:bg-[#005F6A]"
          style={{ fontWeight: 'bold' }}
          onClick={handleSearch}
        >
          Track
        </button>
      </div>

      {/* Full-Page Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
          <div className="bg-white w-full h-full md:w-2/3 md:h-auto md:max-h-[90vh] rounded-md p-8 md:p-10 relative"> {/* Adjusted width and height */}
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6 md:mb-8"> {/* Increased margin bottom */}
              <div className="flex items-center">
                <img src="https://www.dbschenker.com/resource/blob/105304/6c8574169542566718d7285a76986566/logo-data.svg" alt="DB Schenker Logo" className="h-8 mr-4" />
                <span className="text-xl font-bold">Schenker Tracking</span>
              </div>
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-900 text-3xl font-bold absolute top-2 right-4 md:top-4 md:right-6"> {/* Improved close button */}
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="md:px-4"> {/* Added horizontal padding on larger screens */}
              {shipmentFound === false && (
                <div className="p-4 border border-red-500 rounded-md bg-red-50 mb-6 md:mb-8">
                  <p className="text-red-700">Shipment not found for: {trackingId}!</p>
                </div>
              )}
              {shipmentFound === true && (
                <div className="p-4 border border-green-500 rounded-md bg-green-50 mb-6 md:mb-8">
                  <p className="text-green-700">Shipment found for: {trackingId}!</p>
                  <div className='mt-5 flex flex-col md:text-lg'> {/* Increased font size on larger screens */}
                    <p>Origin: Nicosia, Cyprus</p>
                    <p>Destination: Germany</p>
                    <p>Status: In transit</p>
                    <p>Expected Delivery Date: 2024-03-15</p>
                    <p>Current Location: Somewhere in Italy</p>
                  </div>
                </div>
              )}

              {/* Reference Number Display */}
              <div className="mb-6 md:mb-8">
                <label htmlFor="trackingId" className="block text-gray-700 font-bold mb-2 md:text-lg">
                  Reference Number:
                </label>
                <input
                  type="text"
                  id="trackingId"
                  className="w-full border border-gray-300 rounded-md p-3 md:p-4 focus:outline-none focus:ring focus:ring-blue-300 bg-gray-100 md:text-lg"
                  value={trackingId}
                  disabled
                />
              </div>
            </div>

            {/* Footer (Optional) */}
            <div className="border-t pt-4 mt-6 md:mt-8 text-gray-600 text-sm md:text-base">
              {/* Add footer information here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

