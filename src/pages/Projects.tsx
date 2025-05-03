import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

// Define all projects
const allProjects: ProjectCardProps[] = [
  {
    id: "share-a-bite",
    title: "Share a Bite - Food Donation Platform",
    description: "A web-based platform to connect food donors with NGOs using real-time listings. Integrated Google Maps API for location-based food pickup coordination and implemented JWT authentication with role-based dashboards for donors, volunteers, and NGOs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "JWT"],
    status: "ongoing",
    github: "https://github.com/DakshinDP/share-bite-community.git",
    demo: "https://share-a-bite-community.vercel.app/"
  },
  {
    id: "costume-designer-ai",
    title: "Costume Designer AI (Generative AI)",
    description: "Developed a generative AI model using Diffusion Models/VAEs to create custom costume designs from user inputs (era/theme/fabric). Trained on 50k+ historical costume images (PyTorch), achieving 85% user satisfaction in tests. Integrated CLIP for text-to-image alignment and deployed as a Flask+React web app.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Flask", "React", "CLIP", "Diffusion Models"],
    status: "completed",
    github: "https://github.com/yourusername/costume-designer-ai",
    demo: "https://costume-ai-demo.example.com"
  },
  {
    id: "robot-teacher",
    title: "Robot Teacher Development",
    description: "Working on a physical robot designed for educational purposes. Integrating AI and ML models for personalized learning assistance and creating interactive features for engaging student-teacher interactions.",
    technologies: ["Python", "TensorFlow", "Robotics", "Education Tech", "Embedded Systems"],
    status: "ongoing",
    github: "https://github.com/yourusername/robot-teacher"
  },
  {
    id: "news-app",
    title: "News Application",
    description: "Designed and developed a news application using Java and JDBC with MySQL database integration. Implemented features like keyword search, news saving, and user authentication. Enhanced UI/UX with optimized scrolling, loading animations, and professional button designs.",
    technologies: ["Java", "JDBC", "MySQL", "UI/UX Design"],
    status: "completed",
    github: "https://github.com/DakshinDP/DP_NEWS.git"
  },
  {
    id: "market-mix-analysis",
    title: "Market Mix Analysis",
    description: "Developed predictive models for Market Mix Analysis using advanced regression techniques. Analyzed sales data trends to optimize marketing strategies and implemented data visualization using Python and Matplotlib to present insights effectively.",
    technologies: ["Python", "Data Analysis", "Regression Models", "Matplotlib"],
    status: "completed",
    github: "https://github.com/trapti19singhal/Market_Mix_Models_Infosys_Internship_Oct2024.git",
    demo: "https://market-mix-demo.example.com"
  },
  {
    id: "anesthesia-ml",
    title: "Anesthesia ML Prediction",
    description: "A machine learning project focusing on predicting optimal anesthesia dosages based on patient data. Leveraging neural networks and regression models to improve accuracy and patient safety in anesthesia administration.",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "Healthcare"],
    status: "ongoing",
    github: "https://github.com/yourusername/anesthesia-ml-prediction"
  }
];

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Your Name";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Projects Hero */}
        <section className="bg-portfolio-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-portfolio-secondary">My Projects</h1>
            <p className="mt-4 text-xl text-center text-gray-600 max-w-3xl mx-auto">
              A collection of my work showcasing my skills in software development, machine learning, and AI technologies.
            </p>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Other Project Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-portfolio-secondary mb-8">More Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Open Source Contributions */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-portfolio-secondary mb-4">Open Source Contributions</h3>
                <p className="text-gray-700 mb-6">
                  I actively contribute to open source projects to collaborate with the community and improve my skills.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Contributed to TensorFlow documentation</li>
                  <li>Fixed bugs in React library components</li>
                  <li>Added features to data visualization tools</li>
                </ul>
                <div className="mt-6">
                  <a 
                    href="https://github.com/DakshinDP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-primary hover:text-portfolio-accent underline"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>
              
              {/* Academic Projects */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-portfolio-secondary mb-4">Academic Projects</h3>
                <p className="text-gray-700 mb-6">
                  Projects completed as part of my academic coursework, showcasing fundamental skills and knowledge.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <span className="font-medium">Data Structures Visualization:</span>
                    {" "}Interactive visualization of common data structures and algorithms
                  </li>
                  <li>
                    <span className="font-medium">Database Management System:</span>
                    {" "}Custom DBMS implementation with basic SQL functionality
                  </li>
                  <li>
                    <span className="font-medium">Operating Systems Simulator:</span>
                    {" "}Simulation of OS processes including scheduling and memory management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
