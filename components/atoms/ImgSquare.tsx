"use client";
import React from "react";
import { motion } from "framer-motion";

interface ImgSquareProps {
  img?: string;
  alt?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

const ImgSquare = ({ img, alt, icon, title, description }: ImgSquareProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(255,255,255,0.1)' }}
      className="relative w-full md:h-80  lg:h-full bg-base-200 rounded-4xl overflow-hidden flex items-center justify-center"
    >
      {img ? (
        <motion.img
          src={img}
          alt={alt || 'Image'}
          className="w-full h-full object-contain select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        />
      ) : (
        <motion.div className="text-base-content/50">No image available</motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-2 justify-start items-start absolute bottom-0 left-0 p-4 h-40 w-full bg-gradient-to-t from-black/70 to-transparent"
      >
        {icon && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="img-square__icon text-white/90"
          >
            {icon}
          </motion.div>
        )}

        {title && (
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white font-semibold text-lg lg:text-xl"
          >
            {title}
          </motion.h3>
        )}

        {description && (
          <motion.p
            className="text-white"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImgSquare;