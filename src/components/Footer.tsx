import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy-darker py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm flex items-center">
              Created by <a href="https://www.yabatucreative.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-primary-100 hover:text-white transition-colors">YABATU CREATIVE</a> <Heart className="h-4 w-4 mx-1 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;