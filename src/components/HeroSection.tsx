
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-portfolio-muted py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-secondary leading-tight">
              Hi, I'm <span className="text-gradient">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Software Developer & Machine Learning Engineer
            </p>
            <p className="text-gray-600 mb-8 text-lg max-w-xl">
              I specialize in developing AI-powered applications and data science solutions. 
              With expertise in machine learning and web development, I create impactful technologies 
              that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-full blur opacity-20"></div>
            <div className="relative bg-white rounded-full p-2 shadow-xl">
              <img 
                src="/public/placeholder.svg" 
                alt="Your Name" 
                className="w-full h-full rounded-full object-cover aspect-square"
              />
              {/* Add a note for replacing placeholder later */}
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-portfolio-secondary shadow-lg">
                Replace with your photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
