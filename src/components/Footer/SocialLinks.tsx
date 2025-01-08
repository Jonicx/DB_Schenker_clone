import React from 'react';
import { socialLinks } from './config/socialLinks';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 space-y-4">
      <h3 className="text-white/70 font-medium text-base">Follow Us</h3>
      <div className="flex gap-4">
        {socialLinks.map(({ platform, href, Icon }) => (
          <a
            key={platform}
            href={href}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label={`Follow us on ${platform}`}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div> 
  );
};