import React from 'react';

// Átomo: Título
interface TitleProps {
  text: string;
  bold?: boolean;
  align?: 'left' | 'center' | 'right';
  alignMobile?: 'left' | 'center' | 'right';
  className?: string;
}

const Title: React.FC<TitleProps> = ({ 
  text, 
  bold = true, 
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
    <h2 
      className={`text-xl md:text-4xl lg:text-5xl whitespace-pre-line ${bold ? 'font-semibold' : 'font-medium'} md:${alignmentClasses[align]} ${className} ${alignmentClasses[alignMobile]}`}
    >
      {text}
    </h2>
  );
};

export default Title;