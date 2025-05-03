
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About | Dakshina Prasath M";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* About Hero */}
        <section className="bg-portfolio-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-portfolio-secondary">About Me</h1>
          </div>
        </section>
        
        {/* Profile Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex items-center gap-12">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white rounded-lg p-2 shadow-xl">
                    <img 
                      src="public\IMG_42461.JPG" 
                      alt="dp" 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-portfolio-secondary mb-4">Dakshina Prasath M</h2>
                <p className="text-xl text-gray-600 mb-6">Software Developer & Machine Learning Engineer</p>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    I am an enthusiastic Computer Science professional with a strong passion for Software Development, 
                    Data Science, and Machine Learning. I value innovation, efficiency, and continuous learning, always striving to 
                    improve my problem-solving skills and create impactful solutions.
                  </p>
                  
                  <p className="mb-4">
                    My career goal is to become an expert in AI and machine learning, leveraging these technologies to develop solutions 
                    in education, automation, and real-world decision-making. Additionally, I'm working on projects like 
                    Anesthesia ML Prediction and Robot Teacher to push the boundaries of technology in meaningful ways.
                  </p>
                  
                  <p>
                    When I'm not coding, I enjoy playing Basketball and am always looking to expand my knowledge through 
                    online courses, technical books, and participating in hackathons and tech communities.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild variant="outline">
                    <a href="public\Dakshina_Prasath_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                  <Button asChild>
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education & Experience */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-portfolio-secondary mb-12">Education & Experience</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Education</h3>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold">Bachelor of Technology in Computer Science Engineering</h4>
                      <span className="text-sm text-gray-500">Aug 2023 - May 2027</span>
                    </div>
                    <p className="text-gray-700">SRM University</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>GPA: 9.0/10</li>
                      <li>Coursework: Data Structures and Algorithms, Machine Learning, Operating Systems, Computer Organization</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-portfolio-primary pl-4 py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold">High School</h4>
                      <span className="text-sm text-gray-500">April 2011 - May 2023</span>
                    </div>
                    <p className="text-gray-700">Space Central School</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>MPCC (Mathematics, Physics, Chemistry, Computer Science)</li>
                      <li>Graduated with 80% aggregate</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Experience</h3>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-portfolio-accent pl-4 py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold">Machine Learning Intern</h4>
                      <span className="text-sm text-gray-500">Oct 2024 - Dec 2024</span>
                    </div>
                    <p className="text-gray-700">Infosys Springboard</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Developed predictive models for Market Mix Analysis using advanced regression techniques</li>
                      <li>Analyzed sales data trends to optimize marketing strategies</li>
                      <li>Implemented data visualization using Python and Matplotlib to present insights effectively</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-portfolio-accent pl-4 py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold">Software Developer</h4>
                      <span className="text-sm text-gray-500">Aug 2024 - Oct 2024</span>
                    </div>
                    <p className="text-gray-700">News App Project</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>Designed and developed a news application using Java and JDBC with MySQL database integration</li>
                      <li>Implemented features like keyword search, news saving, and user authentication</li>
                      <li>Enhanced UI/UX with optimized scrolling, loading animations, and professional button designs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications & Achievements */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-portfolio-secondary mb-12">Certifications & Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-portfolio-secondary mb-4">Oracle Cloud Infrastructure</h3>
                <p className="text-gray-700">2024 Data Certified Foundations Associate</p>
                <p className="text-sm text-gray-500 mt-1">Jan 2025</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-portfolio-secondary mb-4">NPTEL Certification</h3>
                <p className="text-gray-700">Programming in JAVA</p>
                <p className="text-sm text-gray-500 mt-1">2024</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-portfolio-secondary mb-4">Build with India Hackathon</h3>
                <p className="text-gray-700">Finalist</p>
                <p className="text-sm text-gray-500 mt-1">2024</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-portfolio-secondary mb-4">ISRO</h3>
                <p className="text-gray-700">Geospatial Analysis using Google Earth Engine</p>
                <p className="text-sm text-gray-500 mt-1">2024</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-portfolio-secondary mb-4">HackerRank Certification</h3>
                <p className="text-gray-700">Java (Basic), Problem Solving (Intermediate), Python (Basic), SQL (Basic, Advanced)</p>
                <p className="text-sm text-gray-500 mt-1">2023</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
