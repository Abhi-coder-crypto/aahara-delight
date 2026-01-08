import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center group flex-shrink-0">
            <div className={`rounded-full overflow-hidden shadow-soft group-hover:shadow-hover transition-all duration-300 ${isScrolled ? 'w-20 h-20' : 'w-28 h-28'}`}>
              <img 
                src={logo} 
                alt="Aahara - Multi Cuisine Restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" size="sm" asChild>
              <a href="#contact">Book a Table</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background rounded-2xl shadow-card p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium text-foreground hover:text-leaf transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" className="w-full mt-4" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Table</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
