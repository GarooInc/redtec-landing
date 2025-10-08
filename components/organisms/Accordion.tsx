"use client";
import React, { useState } from 'react';
import AccordionItem from '../atoms/AccordionItem';

interface AccordionProps {
  items: {
    title: string;
    content: string;
    icon?: React.ReactNode;
    img?: string;
  }[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(index);
  };

  const activeImage = items[activeIndex]?.img;

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      <div className="w-full lg:w-1/2 space-y-2 md:p-10">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            icon={item.icon}
            isOpen={activeIndex === index}
            index={index}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Imagen dinámica */}
      <div className="w-full lg:w-1/2 flex items-center justify-center md:p-10">
        <div className="md:bg-neutral rounded-lg md:p-6 w-full h-full min-h-[400px] flex items-center justify-center  md:border border-base-300">
          {activeImage ? (
            <img
              src={activeImage}
              alt={items[activeIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300"
            />
          ) : (
            <div className="text-base-content/50">No image available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
