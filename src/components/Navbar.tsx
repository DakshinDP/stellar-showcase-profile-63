
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg font-bold text-portfolio-secondary">Portfolio</Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:space-x-10">
            <Link to="/" className="text-gray-700 hover:text-portfolio-primary transition duration-300">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-portfolio-primary transition duration-300">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-portfolio-primary transition duration-300">Projects</Link>
            <Link to="/skills" className="text-gray-700 hover:text-portfolio-primary transition duration-300">Skills</Link>
            <Link to="/contact" className="text-gray-700 hover:text-portfolio-primary transition duration-300">Contact</Link>
          </nav>

          <div className="hidden md:flex">
            <Button asChild variant="outline">
              <Link to="/contact" className="text-portfolio-primary">Get In Touch</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-portfolio-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              to="/skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-primary hover:bg-gray-50"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
