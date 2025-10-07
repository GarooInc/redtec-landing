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
      className={`text-lg md:text-xl lg:text-2xl ${bold ? 'font-semibold' : 'font-normal'}  md:${alignmentClasses[align]} ${className} ${alignmentClasses[alignMobile]}`}
    >
      {text}
    </p>
  );
};

export default Subtitle;
