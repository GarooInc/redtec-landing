// Átomo: Logo individual
interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
};

export default Logo;