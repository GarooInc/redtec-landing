import Title from '../atoms/TitleBlock';
import Subtitle from '../atoms/SubtitleBlock';

interface HeaderSectionProps {
  title: string;
  subtitle?: string;
  titleBold?: boolean;
  subtitleBold?: boolean;
  align?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  subtitle,
  titleBold = true,
  subtitleBold = false,
  align = 'left',
  spacing = 'md',
  className = ''
}) => {
  const spacingClasses = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6'
  };

  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      <Title text={title} bold={titleBold} align={align} />
      {subtitle && (
        <Subtitle text={subtitle} bold={subtitleBold} align={align} className="text-gray-600" />
      )}
    </div>
  );
};

export default HeaderSection;
