import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectCardProps } from "@/components/ProjectCard";

// This is a mock database of projects
const projectsDatabase: Record<string, ProjectCardProps & { fullDescription?: string; features?: string[]; challenges?: string[]; images?: string[] }> = {
  "share-a-bite": {
    id: "share-a-bite",
    title: "Share a Bite - Food Donation Platform",
    description: "A web-based platform to connect food donors with NGOs using real-time listings.",
    fullDescription: "Share a Bite is a comprehensive food donation platform designed to address food waste and hunger by connecting donors with NGOs. The platform features real-time food listings, location-based pickup coordination using Google Maps API, and role-based dashboards for different user types including donors, volunteers, and NGO representatives.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "JWT"],
    status: "completed",
    github: "https://github.com/DakshinDP/share-bite-community.git",
    demo: "https://share-a-bite-community.vercel.app/",
    features: [
      "Real-time food donation listings with expiration tracking",
      "Location-based food pickup coordination using Google Maps API",
      "JWT authentication with role-based access control",
      "Separate dashboards for donors, volunteers, and NGOs",
      "Donation history and impact metrics for donors",
      "Mobile-responsive design for on-the-go updates"
    ],
    challenges: [
      "Implementing real-time updates for time-sensitive donations",
      "Creating an efficient matching algorithm for donors and NGOs",
      "Ensuring food safety compliance through the platform"
    ]
  },
  "costume-designer-ai": {
    id: "costume-designer-ai",
    title: "Costume Designer AI (Generative AI)",
    description: "An AI model using Diffusion Models/VAEs to create custom costume designs from user inputs.",
    fullDescription: "Costume Designer AI is a generative AI application that creates custom costume designs based on user inputs like era, theme, and fabric preferences. The system uses advanced diffusion models and VAEs trained on over 50,000 historical costume images, and achieved an 85% user satisfaction rating in testing. The application includes text-to-image alignment through CLIP and is deployed as a full-stack web application.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Flask", "React", "CLIP", "Diffusion Models"],
    status: "ongoing",
    github: "https://github.com/DakshinDP/costume-designer-ai",
    features: [
      "Custom costume design generation from text descriptions",
      "Era/theme/fabric input options for design customization",
      "CLIP-based text-to-image alignment for accurate results",
      "85% user satisfaction in usability testing",
      "Flask+React web application for easy access",
      "Image saving and sharing functionality"
    ],
    challenges: [
      "Curating and cleaning 50,000+ historical costume images",
      "Fine-tuning diffusion models for specific costume domains",
      "Balancing creative output with historical accuracy"
    ]
  },
  "robot-teacher": {
    id: "robot-teacher",
    title: "Robot Teacher Development",
    description: "A physical robot designed for educational purposes with AI and ML capabilities.",
    fullDescription: "Robot Teacher is an ongoing project focused on developing a physical robot for educational environments. The robot integrates AI and ML models to provide personalized learning assistance, create interactive lessons, and engage students in meaningful educational interactions. The project combines robotics, education technology, and artificial intelligence to push the boundaries of educational tools.",
    technologies: ["Python", "TensorFlow", "Robotics", "Education Tech", "Embedded Systems"],
    status: "ongoing",
    github: "https://github.com/DakshinDP/robot-teacher",
    features: [
      "Interactive features for engaging student-teacher interactions",
      "AI and ML models for personalized learning assistance",
      "Speech recognition and natural language processing capabilities",
      "Educational content delivery appropriate to different age groups",
      "Progress tracking and adaptive learning algorithms"
    ],
    challenges: [
      "Creating natural and engaging educational interactions",
      "Developing appropriate physical construction for classroom environments",
      "Ensuring privacy and security for student data"
    ]
  },
  "news-app": {
    id: "news-app",
    title: "News Application",
    description: "A news application using Java and JDBC with MySQL database integration.",
    fullDescription: "This News Application is a desktop software solution built using Java with JDBC for MySQL database integration. The application provides users with up-to-date news content with search functionality, personalization through saved articles, and a robust authentication system. Special attention was paid to UI/UX design with smooth scrolling, loading animations, and professional button designs.",
    technologies: ["Java", "JDBC", "MySQL", "UI/UX Design"],
    status: "completed",
    github: "https://github.com/DakshinDP/DP_NEWS.git",
    features: [
      "Keyword search for news articles",
      "User authentication system",
      "News saving functionality for later reading",
      "Optimized scrolling and loading animations",
      "Professional UI design with custom buttons",
      "Category filtering for better content discovery"
    ],
    challenges: [
      "Optimizing database queries for fast news retrieval",
      "Creating a smooth and intuitive user experience",
      "Managing cached content for offline reading"
    ]
  },
  "market-mix-analysis": {
    id: "market-mix-analysis",
    title: "Market Mix Analysis",
    description: "Predictive models for Market Mix Analysis using advanced regression techniques.",
    fullDescription: "The Market Mix Analysis project involved developing predictive models for marketing strategy optimization using advanced regression techniques. The project analyzed sales data trends to identify the most effective marketing channels and tactics, implemented data visualization tools to present insights clearly, and provided actionable recommendations for marketing budget allocation.",
    technologies: ["Python", "Data Analysis", "Regression Models", "Matplotlib"],
    status: "completed",
    github: "https://github.com/trapti19singhal/Market_Mix_Models_Infosys_Internship_Oct2024.git",
    features: [
      "Advanced regression models for marketing channel effectiveness analysis",
      "Sales data trend identification and pattern recognition",
      "Interactive data visualizations using Python and Matplotlib",
      "Marketing strategy optimization recommendations",
      "Channel attribution modeling"
    ],
    challenges: [
      "Cleaning and preparing inconsistent marketing data",
      "Accounting for external market factors in analysis",
      "Creating intuitive visualizations for non-technical stakeholders"
    ]
  },
  "anesthesia-ml": {
    id: "anesthesia-ml",
    title: "Anesthesia ML Prediction",
    description: "A machine learning project for predicting optimal anesthesia dosages based on patient data.",
    fullDescription: "The Anesthesia ML Prediction project focuses on developing machine learning models to predict optimal anesthesia dosages for patients undergoing surgery. By analyzing patient data including demographics, medical history, and physiological metrics, the system aims to improve patient safety and outcomes through more precise anesthesia administration. The project uses neural networks and regression models to continuously improve prediction accuracy.",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "Healthcare"],
    status: "ongoing",
    github: "https://github.com/DakshinDP/anesthesia-ml-prediction",
    features: [
      "Patient-specific anesthesia dosage prediction",
      "Multiple machine learning models including neural networks",
      "Integration with medical health record systems",
      "Real-time monitoring and adjustment suggestions",
      "Safety verification algorithms to prevent errors"
    ],
    challenges: [
      "Working with sensitive patient medical data",
      "Creating models that can explain their reasoning (XAI)",
      "Meeting medical device regulatory requirements",
      "Handling edge cases and patient anomalies"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<(typeof projectsDatabase)[string] | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id && projectsDatabase[id]) {
      setProject(projectsDatabase[id]);
      document.title = `${projectsDatabase[id].title} | Project Details`;
    } else {
      document.title = "Project Not Found";
    }
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold text-portfolio-secondary mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Project Hero */}
        <section className="bg-gradient-to-r from-portfolio-muted to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {project.status && (
                <Badge variant={project.status === 'ongoing' ? 'outline' : 'default'} className="mb-4">
                  {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </Badge>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-secondary mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-portfolio-muted text-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {project.github && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                )}
                
                {project.demo && (
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-secondary mb-4">Project Overview</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg">{project.fullDescription || project.description}</p>
              </div>
            </div>
            
            {/* Features */}
            {project.features && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-portfolio-secondary mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="text-green-500 flex-shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-secondary mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-gray-700 border-gray-300 bg-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Challenges */}
            {project.challenges && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-portfolio-secondary mb-4">Challenges & Solutions</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-semibold text-portfolio-secondary">Challenge {index + 1}:</span> {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200">
              <Button variant="ghost" asChild className="mb-4 sm:mb-0">
                <Link to="/projects">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Back to All Projects
                </Link>
              </Button>
              
              <div className="flex space-x-4">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </Button>
                )}
                
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      View Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
