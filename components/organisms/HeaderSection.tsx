import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';

interface HeaderSectionProps {
  title: string;
  color?: string;
  subtitle?: string;
  titleBold?: boolean;
  subtitleBold?: boolean;
  align?: 'left' | 'center' | 'right';
  alignMobile?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  color,
  subtitle,
  titleBold = true,
  subtitleBold = false,
  align = 'left',
  alignMobile = 'center',
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
      <Title text={title} bold={titleBold} align={align} alignMobile={alignMobile} className={color ? `text-${color}` : ''} />
      {subtitle && (
        <Subtitle text={subtitle} bold={subtitleBold} align={align} alignMobile={alignMobile} className={color ? `text-${color}` : ''} />
      )}
    </div>
  );
};

export default HeaderSection;
