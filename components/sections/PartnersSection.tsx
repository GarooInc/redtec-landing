'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Logo from '../atoms/Logo';
import Title from '../atoms/Title';

interface PartnersSectionProps {
    logos?: { src: string; alt: string }[];
    title?: string;
    description?: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ logos, title, description }) => {
  // Duplicamos los logos para crear el efecto infinito
  const duplicatedLogos = logos ? [...logos, ...logos] : [];

  return (
    <div className="overflow-hidden">
        {title && <Title text={title} bold={true} align="center" className="mb-4" />}
        <p className='text-center text-gray-500 mb-12 text-sm'>{description}</p>
        
        <div className="relative">
          {/* Gradientes en los bordes para efecto de fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Carousel infinito */}
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -50 * (logos?.length || 0) - 48 * (logos?.length || 0)], // 50% del contenedor + gaps
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Logo src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </motion.div>
        </div>
    </div>
  )
}

export default PartnersSection;