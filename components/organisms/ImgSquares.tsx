import ImgSquare from '../atoms/ImgSquare';
import React from 'react';

interface ImgSquaresProps {
  images: {
    img?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    title?: string;
    description?: string;
  }[];
}

const ImgSquares = ({ images }: ImgSquaresProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {images.map((image, index) => (
        <ImgSquare
          key={index}
          img={image.img}
          alt={image.alt}
          icon={image.icon}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default ImgSquares;
