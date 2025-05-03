
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Portfolio</h3>
            <p className="text-gray-300">
              A showcase of my work and skills in software development, 
              machine learning, and AI technologies.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-300 hover:text-white transition duration-300">Skills</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: hamsadakshin5@gmail.com</li>
              <li className="text-gray-300">LinkedIn: linkedin.com/in/dakshina-prasath</li>
              <li className="text-gray-300">GitHub: github.com/DakshinDP</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {currentYear} Dakshina Prasath M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
