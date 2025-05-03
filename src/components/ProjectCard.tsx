
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status?: 'ongoing' | 'completed';
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  image, 
  technologies, 
  github, 
  demo, 
  status 
}: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        {status && (
          <div className="mb-2">
            <Badge variant={status === 'ongoing' ? 'outline' : 'default'} className="mr-2">
              {status === 'ongoing' ? 'Ongoing' : 'Completed'}
            </Badge>
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-portfolio-secondary">{title}</CardTitle>
      </CardHeader>
      
      {image && (
        <div className="px-6">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}
      
      <CardContent className="py-4 flex-grow">
        <CardDescription className="text-gray-700 mb-4">
          {description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-portfolio-muted text-gray-700">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 flex gap-2">
        {github && (
          <Button variant="outline" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        )}
        {demo && (
          <Button size="sm" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/projects/${id}`}>
            Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
