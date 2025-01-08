import React from 'react';
import { Globe } from 'lucide-react';
import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';
import { LegalLinks } from './LegalLinks';
import { serviceLinks, businessLinks, companyLinks } from './config/navigationLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#005f6a]" style={{ paddingTop: '6rem', paddingBottom: '5px' }}>
      <div className="container mx-auto">
        <div className="mb-12">
          {/* <img  
            src="/schenker-logo.png" 
            alt="SCHENKER" 
            className="h-8"
          /> */}
          <div className="flex items-center space-x-12">
            <h1 className="text-2xl text-white font-bold">SCHENKER</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterColumn title="Service" links={serviceLinks} />
          <FooterColumn title="Business" links={businessLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <SocialLinks />
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <LegalLinks />
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-200 transition-colors flex items-center font-medium gap-1">
              <span className="text-xs">Global</span>
              <Globe 
              strokeWidth={1.5}
              className="w-5 h-5" />
            </button>
            <button className="text-white font-medium hover:text-gray-200 transition-colors text-xs">
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};