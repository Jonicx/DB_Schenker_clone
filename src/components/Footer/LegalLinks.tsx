import React from 'react';
import { legalLinks } from './config/legalLinks';

export const LegalLinks: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">
      {legalLinks.map((link) => (
        <a
          key={link.text}
          href={link.href}
          className="text-white font-medium hover:text-gray-200 transition-colors text-xs"
        >
          {link.text}
        </a>
      ))}
    </div> 
  );
};