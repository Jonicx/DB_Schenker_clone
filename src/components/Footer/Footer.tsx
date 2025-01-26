import React from 'react';
import { Globe } from 'lucide-react';
import { FooterColumn } from './FooterColumn';
import { SocialLinks } from './SocialLinks';
import { LegalLinks } from './LegalLinks';
import { serviceLinks, businessLinks, companyLinks } from './config/navigationLinks';
import dbSchenkerLogoFooter from "../../Assets/DB-Schenker-logo-footer.svg";
import { useNavigate } from 'react-router-dom';



export const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#005f6a] pt-24 pb-2">
      <div className="container mx-auto p-4">
        <div className="mb-12">
          <img   
            src={dbSchenkerLogoFooter}
            alt="SCHENKER"
            className="h-7 cursor-pointer"
            onClick={() => navigate('/')} // Navigate to the homepage on click
          />
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