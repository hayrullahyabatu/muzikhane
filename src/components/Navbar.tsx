import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setIsSubmenuOpen(false);
  };

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-burgundy shadow-lg' : 'bg-transparent'
      } ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://i.hizliresim.com/y3ci1z2.png" 
              alt="Müzikhane Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <button onClick={() => scrollToSection('about')} className="text-primary-100 hover:text-white transition-colors">
              Hakkımızda
            </button>
            
            {/* Eğitimlerimiz Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-primary-100 hover:text-white transition-colors flex items-center gap-1"
              >
                Eğitimlerimiz
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-burgundy rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <button 
                    onClick={() => scrollToSection('studio')}
                    className="block w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-burgundy-dark transition-colors"
                  >
                    Stüdyo
                  </button>
                  <button 
                    onClick={() => scrollToSection('prep')}
                    className="block w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-burgundy-dark transition-colors"
                  >
                    Müzik Okulları
                  </button>
                  <button 
                    onClick={() => scrollToSection('children')}
                    className="block w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-burgundy-dark transition-colors"
                  >
                    Çocuklara Özel
                  </button>
                  <button 
                    onClick={() => scrollToSection('adults')}
                    className="block w-full text-left px-4 py-2 text-primary-100 hover:text-white hover:bg-burgundy-dark transition-colors"
                  >
                    Yetişkinlere Özel
                  </button>
                </div>
              </div>
            </div>

            {/* Panel Button with Special Effects */}
            <a 
              href="https://muzikhane.netlify.app/giris"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg before:absolute before:inset-0 before:bg-white before:opacity-20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12"
            >
              Panel
            </a>

            {/* Cafe Button with Special Effects */}
            <a 
              href="https://muzikhanecafe.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg before:absolute before:inset-0 before:bg-white before:opacity-20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12"
            >
              Cafe
            </a>

            {/* Event Button with Special Effects */}
            <a 
              href="https://muzikhanevent.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg before:absolute before:inset-0 before:bg-white before:opacity-20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12"
              style={{ backgroundColor: '#00ff5e' }}
            >
              Event
            </a>
            <a 
              href="https://wa.me/905345671010" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-100 text-burgundy hover:bg-white px-4 py-2 rounded-full font-medium transition-all hover:shadow-lg"
            >
              İletişim
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-primary-100 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-burgundy-dark bg-opacity-95 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '64px' }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-primary-100 hover:text-white py-3 text-lg font-medium transition-colors text-center"
              >
                Hakkımızda
              </button>
              
              {/* Mobile Eğitimlerimiz Section */}
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="w-full text-primary-100 hover:text-white py-3 text-lg font-medium transition-colors text-center"
                >
                  Eğitimlerimiz
                </button>
                <div className="pl-4 space-y-2 border-l-2 border-primary-100/20">
                  <button 
                    onClick={() => scrollToSection('studio')}
                    className="w-full text-primary-100 hover:text-white py-2 text-base transition-colors text-center"
                  >
                    Stüdyo
                  </button>
                  <button 
                    onClick={() => scrollToSection('prep')}
                    className="w-full text-primary-100 hover:text-white py-2 text-base transition-colors text-center"
                  >
                    Müzik Okulları
                  </button>
                  <button 
                    onClick={() => scrollToSection('children')}
                    className="w-full text-primary-100 hover:text-white py-2 text-base transition-colors text-center"
                  >
                    Çocuklara Özel
                  </button>
                  <button 
                    onClick={() => scrollToSection('adults')}
                    className="w-full text-primary-100 hover:text-white py-2 text-base transition-colors text-center"
                  >
                    Yetişkinlere Özel
                  </button>
                </div>
              </div>

              {/* Mobile Panel Button */}
              <a 
                href="https://muzikhane.netlify.app/giris"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-3 text-lg font-medium rounded-full transition-all text-center transform hover:scale-105 before:absolute before:inset-0 before:bg-white before:opacity-20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12"
              >
                Panel
              </a>

              {/* Mobile Cafe Button */}
              <a 
                href="https://muzikhanecafe.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 text-white py-3 text-lg font-medium rounded-full transition-all text-center transform hover:scale-105 before:absolute before:inset-0 before:bg-white before:opacity-20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12"
              >
                Cafe
              </a>

              {/* Mobile Event Button */}
              <a 
                href="https://muzikhanevent.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden text-white py-3 text-lg font-medium rounded-full transition-all text-center transform hover:scale-105 before:absolute before:inset-0 before:bg-white before:opacity-20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:skew-x-12"
                style={{ backgroundColor: '#00ff5e' }}
              >
                Event
              </a>
              <a 
                href="https://wa.me/905345671010" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-100 text-burgundy hover:bg-white py-3 text-lg font-medium rounded-full transition-all text-center mt-4"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;