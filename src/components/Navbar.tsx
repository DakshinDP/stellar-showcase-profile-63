
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg font-bold text-foreground transition-colors duration-300">Portfolio</Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:space-x-10">
            <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-300">About</Link>
            <Link to="/projects" className="text-foreground hover:text-primary transition-colors duration-300">Projects</Link>
            <Link to="/skills" className="text-foreground hover:text-primary transition-colors duration-300">Skills</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild variant="outline">
              <Link to="/contact" className="text-primary">Get In Touch</Link>
            </Button>
          </div>
          
          {/* Mobile menu button and theme toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              to="/skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-300"
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
