import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { Progress } from "@/components/ui/progress";

// Define all skills with categories
const skillsData = {
  languages: [
    { name: "Python", level: "expert" as const, proficiency: 95 },
    { name: "JavaScript", level: "advanced" as const, proficiency: 85 },
    { name: "TypeScript", level: "intermediate" as const, proficiency: 75 },
    { name: "Java", level: "advanced" as const, proficiency: 80 },
    { name: "C++", level: "intermediate" as const, proficiency: 70 },
    { name: "SQL", level: "advanced" as const, proficiency: 85 },
  ],
  frameworks: [
    { name: "React", level: "advanced" as const, proficiency: 90 },
    { name: "Node.js", level: "intermediate" as const, proficiency: 75 },
    { name: "Express", level: "intermediate" as const, proficiency: 75 },
    { name: "Flask", level: "advanced" as const, proficiency: 85 },
    { name: "Django", level: "beginner" as const, proficiency: 60 },
    { name: "TensorFlow", level: "advanced" as const, proficiency: 85 },
    { name: "PyTorch", level: "intermediate" as const, proficiency: 70 },
  ],
  databases: [
    { name: "MongoDB", level: "intermediate" as const, proficiency: 75 },
    { name: "MySQL", level: "advanced" as const, proficiency: 85 },
    { name: "PostgreSQL", level: "intermediate" as const, proficiency: 70 },
    { name: "SQLite", level: "advanced" as const, proficiency: 80 },
  ],
  tools: [
    { name: "Git", level: "advanced" as const, proficiency: 90 },
    { name: "Docker", level: "intermediate" as const, proficiency: 70 },
    { name: "AWS", level: "beginner" as const, proficiency: 60 },
    { name: "GCP", level: "beginner" as const, proficiency: 55 },
    { name: "Jupyter Notebook", level: "expert" as const, proficiency: 95 },
    { name: "VS Code", level: "expert" as const, proficiency: 90 },
  ],
  concepts: [
    { name: "Data Structures & Algorithms", level: "advanced" as const, proficiency: 85 },
    { name: "Machine Learning", level: "advanced" as const, proficiency: 90 },
    { name: "Deep Learning", level: "intermediate" as const, proficiency: 80 },
    { name: "Computer Vision", level: "intermediate" as const, proficiency: 75 },
    { name: "Natural Language Processing", level: "intermediate" as const, proficiency: 70 },
    { name: "Operating Systems", level: "advanced" as const, proficiency: 80 },
    { name: "Automata Theory", level: "intermediate" as const, proficiency: 75 },
  ]
};

interface SkillSectionProps {
  title: string;
  skills: {
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
    proficiency: number;
  }[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-portfolio-secondary mb-6">{title}</h3>
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-lg font-medium text-gray-800 mr-3">{skill.name}</span>
              <SkillBadge name={skill.level} level={skill.level} />
            </div>
            <span className="text-sm font-medium text-gray-600">{skill.proficiency}%</span>
          </div>
          <Progress value={skill.proficiency} className="h-2" />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  useEffect(() => {
    document.title = "Skills | Your Name";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Skills Hero */}
        <section className="bg-portfolio-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-portfolio-secondary">My Skills</h1>
            <p className="mt-4 text-xl text-center text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels.
            </p>
          </div>
        </section>
        
        {/* Skills Sections */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SkillSection title="Programming Languages" skills={skillsData.languages} />
            <SkillSection title="Frameworks & Libraries" skills={skillsData.frameworks} />
            <SkillSection title="Databases" skills={skillsData.databases} />
            <SkillSection title="Tools & Platforms" skills={skillsData.tools} />
            <SkillSection title="Concepts & Knowledge Areas" skills={skillsData.concepts} />
          </div>
        </section>
        
        {/* Other Skills */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-portfolio-secondary mb-12">Additional Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Soft Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Strong problem-solving abilities</li>
                  <li>Excellent verbal and written communication</li>
                  <li>Team collaboration and leadership</li>
                  <li>Time management and organization</li>
                  <li>Adaptability and quick learning</li>
                  <li>Critical thinking and analytical skills</li>
                  <li>Attention to detail</li>
                </ul>
              </div>
              
              {/* Languages & Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-portfolio-primary mb-6">Languages & Other Skills</h3>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Languages</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>English (Fluent)</li>
                    <li>Hindi (Native)</li>
                    <li>Tamil (Fluent)</li>
                    {/* Add more as needed */}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Design & Other Tools</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Figma</li>
                    <li>Adobe Photoshop</li>
                    <li>Microsoft Office Suite</li>
                    <li>Jira & Confluence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Learning Journey */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-portfolio-secondary mb-6">My Learning Journey</h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies and frameworks.
              Here's what I'm currently learning and planning to explore next.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Currently Learning */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-portfolio-secondary mb-6">Currently Learning</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Advanced Deep Learning architectures</li>
                  <li>Cloud infrastructure and deployment</li>
                  <li>Kubernetes for container orchestration</li>
                  <li>Microservices architecture</li>
                </ul>
              </div>
              
              {/* Future Learning Goals */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-portfolio-secondary mb-6">Future Learning Goals</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Quantum Computing basics</li>
                  <li>Blockchain development</li>
                  <li>Advanced computer vision techniques</li>
                  <li>Reinforcement learning</li>
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

export default Skills;
