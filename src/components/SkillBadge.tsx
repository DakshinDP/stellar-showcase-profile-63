
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  className?: string;
}

const SkillBadge = ({ name, level = 'intermediate', className }: SkillBadgeProps) => {
  const getLevelColor = () => {
    switch (level) {
      case 'beginner':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'intermediate':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'advanced':
        return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'expert':
        return 'bg-amber-50 text-amber-600 border-amber-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border',
        getLevelColor(),
        className
      )}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
