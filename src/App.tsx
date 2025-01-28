import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ServicesCarousel from './components/Services/ServicesCarousel';
import ArticleCarousel from './components/Articles/ArticleCarousel';
import BlogCarousel from './components/Blogs/BlogCarousel';
import Jobs from './components/Jobs/Jobs';
import './style/styles.css';
import TagCarousel from './components/Tags/TagCarousel';
import { Footer } from './components/Footer/Footer';
import HeroSection from './components/Hero/Hero';
import TrackingResult from './components/Tracking/TrackingResults';
import TrackingSearch from './components/Tracking/TrackingSearch';
import TrackingShipmentResults from './components/Tracking/TrackingShipmentResults';
import Business from './components/Business/Business';
import Career from './components/Careers/Careers';

function App() {
  const location = useLocation();
  const isTrackingPage = location.pathname.startsWith('/tracking');

  return (
    <div className="min-h-screen bg-white">
      {!isTrackingPage && <Header />}
      <main className="">
        <Routes>
          <Route path="/" element={
            <>
              <div className="mx-auto pb-16">
                <HeroSection />
              </div>
              {/* Additional Content - Added margin top to account for overlapping forms */}
              <div className="mx-auto pb-16 mt-20 sm:pt-[35%] pt-[105%] lg:pt-[22%] md:pt-[40%] xl:pt-[9rem]" style={{ marginRight: '0px', marginLeft: '1rem' }}>
                <ServicesCarousel />
              </div>
              <div className="mx-auto pb-16" style={{ margin: '0rem', marginRight: '0rem', marginLeft: '0rem', maxWidth: '100%' }}>
                <ArticleCarousel />
              </div>
              <div className="max-w-7xl mx-auto pb-16">
                <BlogCarousel />
              </div>
              <div className="mx-auto pb-16">
                <Jobs />
              </div>
              <div className="mx-auto">
                <TagCarousel />
              </div>
            </>
          } />
          <Route path="/tracking/:trackingId" element={<TrackingResult />} />
          <Route path="/tracking/search" element={<TrackingSearch/>}/>
          <Route path="/tracking/Results/:shipmentId" element={<TrackingShipmentResults/>}/>
          <Route path="/business" element={<Business/>} />
          <Route path="/Careers" element={<Career/>} />
        </Routes>
      </main>
      {!isTrackingPage && <Footer />}
    </div>
  );
} 

export default App;