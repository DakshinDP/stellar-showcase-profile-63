
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

const featuredProjects = [
  {
    id: "share-a-bite",
    title: "Share a Bite - Food Donation Platform",
    description: "A web-based platform connecting food donors with NGOs using real-time listings, Google Maps API, and JWT authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
    status: "completed" as const,
    github: "https://github.com/DakshinDP/share-bite-community.git",
    demo: "https://share-a-bite-community.vercel.app/"
  },
  {
    id: "guess-mate",
    title: "Guess Mate - Number Guessing Game",
    description: "An interactive number guessing game built with React featuring multiple difficulty levels, score tracking, and responsive design.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    status: "completed" as const,
    github: "https://github.com/DakshinDP/guess-who-genius-mind",
    demo: "https://guess-mate-chi.vercel.app/"
  },
  {
    id: "binary-calculator",
    title: "Binary Calculator",
    description: "A comprehensive binary calculator that performs arithmetic operations on binary numbers with real-time conversion and validation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Binary Logic"],
    status: "completed" as const,
    github: "https://github.com/DakshinDP/Binary-Calculator",
    demo: "https://10calculator.vercel.app/"
  },
  {
    id: "typzzz",
    title: "Typzzz - Typing Speed Calculator",
    description: "A modern typing speed test application with real-time WPM calculation, accuracy tracking, and performance analytics.",
    technologies: ["React", "JavaScript", "CSS3", "Performance Analytics"],
    status: "completed" as const,
    github: "https://github.com/DakshinDP/Typing-Speed-Calculator",
    demo: "https://typzzz.vercel.app/"
  },
  {
    id: "plagiometer",
    title: "Plagiometer - Plagiarism Detector",
    description: "An AI-powered plagiarism detection tool that analyzes text similarity and provides detailed reports with percentage matches.",
    technologies: ["Python", "NLP", "Machine Learning", "Text Analysis"],
    status: "completed" as const,
    github: "https://github.com/DakshinDP/PlagioMeter_Plagiarism-Detector",
    demo: "https://plagiometer.vercel.app/"
  },
  {
    id: "costume-designer-ai",
    title: "Costume Designer AI",
    description: "An AI model using Diffusion Models/VAEs to create custom costume designs based on user inputs, achieving 85% user satisfaction.",
    technologies: ["Python", "PyTorch", "Flask", "React"],
    status: "ongoing" as const,
    github: "https://github.com/DakshinDP/costume-designer-ai"
  }
];

const coreSkills = [
  { name: "Machine Learning", level: "advanced" as const },
  { name: "Python", level: "expert" as const },
  { name: "React", level: "advanced" as const },
  { name: "Node.js", level: "intermediate" as const },
  { name: "TensorFlow", level: "advanced" as const },
  { name: "PyTorch", level: "intermediate" as const },
];

const Index = () => {
  useEffect(() => {
    document.title = "Dakshina Prasath M | Software Developer & ML Engineer";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section Preview */}
        <section className="py-16 bg-background transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 transition-colors duration-300">About Me</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-300">
                I'm a software developer and machine learning engineer passionate about creating impactful solutions.
              </p>
            </div>
            
            <div className="bg-muted rounded-xl p-8 shadow-sm transition-colors duration-300">
              <p className="text-muted-foreground mb-6 transition-colors duration-300">
                I specialize in developing AI-powered applications and data science solutions with expertise in machine learning and software development. 
                My background in Computer Science coupled with hands-on experience in various projects has equipped me with the skills to tackle complex problems
                and create innovative solutions.
              </p>
              
              <div className="text-center mt-6">
                <Button asChild>
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="py-16 bg-muted transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 transition-colors duration-300">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-300">
                Here are some of my recent projects that showcase my skills and expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Skills Preview Section */}
        <section className="py-16 bg-background transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 transition-colors duration-300">My Skills</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto transition-colors duration-300">
                A glimpse of my technical expertise and core competencies.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {coreSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-blue-50 dark:bg-blue-950/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-foreground transition-colors duration-300">Languages</h3>
                  <p className="text-muted-foreground transition-colors duration-300">Python, JavaScript, TypeScript, Java, C/C++, SQL</p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 dark:bg-purple-950/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-foreground transition-colors duration-300">Frameworks</h3>
                  <p className="text-muted-foreground transition-colors duration-300">React, Node.js, Express, Flask, Django, TensorFlow, PyTorch</p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 dark:bg-green-950/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-foreground transition-colors duration-300">Tools & Platforms</h3>
                  <p className="text-muted-foreground transition-colors duration-300">Git, Docker, AWS, GCP, MongoDB, MySQL, PostgreSQL</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link to="/skills">View All Skills</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-muted">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
