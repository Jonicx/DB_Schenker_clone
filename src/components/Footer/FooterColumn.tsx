import React from 'react';

interface FooterColumnProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
} 

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4 space-y-4">
      <h3 className="text-white/70 font-medium text-base">{title}</h3>
      <ul className="flex flex-col gap-3 space-y-3">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href} className="text-white font-medium hover:text-gray-200 hover:underline transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};