'use client'

// Sección: Hero con imagen, título, subtítulo, descripción y botones
import React from 'react';
import { motion, Variants } from 'framer-motion';
import HeaderSection from '../organisms/HeaderSection';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  titleBold?: boolean;
  subtitleBold?: boolean;
  align?: 'left' | 'center' | 'right';
  alignMobile?: 'left' | 'center' | 'right';
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  imageWidth?: string;
  buttons?: React.ReactNode;
  extraContent?: React.ReactNode;
  disableShift?: boolean;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  titleBold = true,
  subtitleBold = false,
  align = 'left',
  alignMobile = 'center',
  imageUrl,
  imagePosition = 'right',
  imageWidth,
  buttons,
  extraContent,
  disableShift = false,
  className = ''
}) => {
  const contentOrder = imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1';
  const imageOrder = imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2';

  const shiftClass = disableShift ? 'translate-x-0' : (imagePosition === 'right' ? 'translate-x-4 md:translate-x-0' : '-translate-x-4 md:translate-x-0');
  const imageClass = imageWidth
    ? `md:w-[${imageWidth}] w-full h-auto rounded-lg transform ${shiftClass} ${imagePosition === 'left' ? 'md:p-0 pr-6' : 'md:p-0 pl-6'}`
    : `w-full h-auto rounded-lg transform ${shiftClass}`;

  const alignmentClasses = {
    left: 'md:text-left',
    center: 'md:text-center',
    right: 'md:text-right'
  };

  const alignmentMobileClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const buttonAlignmentClasses = {
    left: 'md:justify-start',
    center: 'md:justify-center',
    right: 'md:justify-end'
  };

  const buttonAlignmentMobileClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  // Variantes de animación para la imagen
  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: imagePosition === 'right' ? 50 : -50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  };

  // Variantes de animación para el contenido
  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
        staggerChildren: 0.2
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${className}`}>
      {imageUrl && (
        <motion.div 
          className={`${imageOrder}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <motion.img
            src={imageUrl}
            alt={title}
            className={imageClass}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      {/* Contenido de texto */}
      <motion.div 
        className={`${contentOrder} space-y-6`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={contentVariants}
      >
        <motion.div variants={childVariants}>
          <HeaderSection
            title={title}
            subtitle={subtitle}
            titleBold={titleBold}
            subtitleBold={subtitleBold}
            align={align}
            alignMobile={alignMobile}
            spacing="md"
          />
        </motion.div>

        {description && (
          <motion.p 
            className={`text-base md:text-lg text-gray-600  ${alignmentClasses[align]} ${alignmentMobileClasses[alignMobile]} ${alignMobile === 'center' ? '' : 'whitespace-pre-line'}`}
            variants={childVariants}
          >
            {description}
          </motion.p>
        )}

        {buttons && (
          <motion.div 
            className={`${buttonAlignmentClasses[align]} flex gap-4 ${buttonAlignmentMobileClasses[alignMobile]}`}
            variants={childVariants}
          >
            {buttons}
          </motion.div>
        )}

        {extraContent && (
          <motion.div variants={childVariants}>
            {extraContent}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSection;