import React, { useState } from 'react';

interface AccordionItemProps {
  title?: string;
  icon?: React.ReactNode;
  content?: string;
  isOpen?: boolean;
  index: number;
  onToggle: (index: number) => void;
}

const AccordionItem = ({ title, content, icon, isOpen, index, onToggle }: AccordionItemProps) => {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-neutral text-white rounded-box">
      <input 
        type="radio" 
        name="my-accordion-2" 
        checked={isOpen}
        onChange={() => onToggle(index)}
      />
      <div className="collapse-title font-semibold">
        <div className={`flex justify-start items-center w-full gap-2 ${isOpen ? 'border-b border-base-300 p-2 rounded-md' : ''}`}>
          {icon && <span className="mr-2">{icon}</span>}
          <span>{title}</span>
        </div>
      </div>
      <div className="collapse-content text-sm pt-2">{content}</div>
    </div>
  );
};

export default AccordionItem;