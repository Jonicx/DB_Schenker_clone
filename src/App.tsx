import React from 'react';
import Header from './components/Header';
import ServicesCarousel from './components/ServicesCarousel';
import ArticleCarousel from './components/ArticleCarousel';
import BlogCarousel from './components/BlogCarousel';
import Jobs from './components/Jobs';
import './style/styles.css';
import TagCarousel from './components/TagCarousel';
import { Footer } from './components/Footer/Footer';
import HeroSection from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="mx-auto pb-16">
          <HeroSection/>
        </div>
        {/* Additional Content - Added margin top to account for overlapping forms */}
        <div className="mx-auto pb-16" style={{margin:'4rem', marginRight: '0px', marginLeft: '4rem', paddingTop: '14rem'}}>
          <ServicesCarousel/>
        </div>
        <div className=" mx-auto pb-16" style={{margin:'0rem', marginRight: '0rem', marginLeft: '0rem', maxWidth: '100%'}}>
          <ArticleCarousel/>
        </div>
        <div className="max-w-7xl mx-auto pb-16">
          <BlogCarousel/>
        </div>
        <div className=" mx-auto pb-16">
          <Jobs/>
        </div>
        <div className="mx-auto">
          <TagCarousel/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
export default App;
