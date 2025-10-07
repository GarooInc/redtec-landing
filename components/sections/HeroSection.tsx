// Sección: Hero con imagen, título, subtítulo, descripción y botones
import HeaderSection from '../organisms/HeaderSection';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  titleBold?: boolean;
  subtitleBold?: boolean;
  align?: 'left' | 'center' | 'right';
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  buttons?: React.ReactNode;
  extraContent?: React.ReactNode;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  titleBold = true,
  subtitleBold = false,
  align = 'left',
  imageUrl,
  imagePosition = 'right',
  buttons,
  extraContent,
  className = ''
}) => {
  const contentOrder = imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1';
  const imageOrder = imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2';

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${className}`}>
      {/* Contenido de texto */}
      <div className={`${contentOrder} space-y-6`}>
        <HeaderSection
          title={title}
          subtitle={subtitle}
          titleBold={titleBold}
          subtitleBold={subtitleBold}
          align={align}
          spacing="md"
        />
        
        {description && (
          <p className={`text-base md:text-lg text-gray-600 whitespace-pre-line ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
            {description}
          </p>
        )}

        {buttons && (
          <div className={`flex gap-4 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
            {buttons}
          </div>
        )}

        {extraContent && (
          <div>
            {extraContent}
          </div>
        )}
      </div>

      {/* Imagen */}
      {imageUrl && (
        <div className={`${imageOrder}`}>
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
