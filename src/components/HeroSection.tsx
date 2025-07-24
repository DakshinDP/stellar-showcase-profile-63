
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-portfolio-muted py-20 overflow-hidden">
      <style>{`
        .libutton {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7px;
          text-align: center;
          outline: none;
          text-decoration: none !important;
          color: #ffffff !important;
          width: 200px;
          height: 32px;
          border-radius: 16px;
          background-color: #0A66C2;
          font-family: "SF Pro Text", Helvetica, sans-serif;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-secondary leading-tight">
              Hi, I'm <span className="text-gradient">Dakshina Prasath M</span>
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
              <a className="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=dakshina-prasath" target="_blank">Follow on LinkedIn</a>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in flex justify-center lg:justify-end">
            <img 
              src="/IMG_42461.JPG" 
              alt="Dakshina Prasath M" 
              className="max-h-[70vh] w-auto object-contain border border-black"
              style={{ alignSelf: 'flex-end' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
