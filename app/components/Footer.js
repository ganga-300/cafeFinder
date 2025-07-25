import React from 'react';

const footerData = {
  copyright: `© ${new Date().getFullYear()} CafeFinder. All rights reserved.`,
  socials: [
    { name: 'Instagram', href: 'https://instagram.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.25 2.25a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" /></svg>
    ) },
    { name: 'Twitter', href: 'https://twitter.com', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.038.637.05.97.05 1.92 0 3.684-.652 5.09-1.75-1.8-.037-3.32-1.22-3.843-2.85.252.037.504.063.77.063.37 0 .74-.05 1.08-.14-1.87-.377-3.28-2.03-3.28-4.02v-.05c.55.305 1.18.49 1.85.514a4.07 4.07 0 01-1.81-3.39c0-.75.2-1.45.55-2.05a11.62 11.62 0 008.42 4.27c-.07-.3-.11-.62-.11-.94a4.07 4.07 0 014.07-4.07c1.17 0 2.23.49 2.97 1.28a8.09 8.09 0 002.58-.98 4.07 4.07 0 01-1.79 2.25 8.13 8.13 0 002.34-.64 8.7 8.7 0 01-2.04 2.11z" /></svg>
    ) },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-gray-900 py-6 mt-8 shadow-inner fixed bottom-0 left-0 z-40 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold">{footerData.copyright}</div>
        <div className="flex space-x-4">
          {footerData.socials.map(social => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 