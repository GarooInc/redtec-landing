interface SubtitleProps {
  text: string;
  bold?: boolean;
  align?: 'left' | 'center' | 'right';
  alignMobile?: 'left' | 'center' | 'right';
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ 
  text, 
  bold = false, 
  align = 'left',
  alignMobile = 'center',
  className = ''
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <p 
      className={`text-sm lg:text-lg whitespace-pre-line ${bold ? 'font-semibold' : 'font-normal'}  md:${alignmentClasses[align]} ${className} ${alignmentClasses[alignMobile]}`}
    >
      {text}
    </p>
  );
};

export default Subtitle;
