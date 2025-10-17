import React from 'react';

interface TitleProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ 
  title = "Welcome to Louisa's Website",
  subtitle = "This is a simple website built with React and Tailwind CSS.",
  className = ""
}) => {
  return (
    <div className={`text-center ${className}`}>
      <p 
        className="sm:text-[80px] text-[40px] font-bold shadow-dance-text"
      >{title}</p>
      <p className="text-black mt-2 text-lg">{subtitle}</p>
    </div>
  );
};

export default Title;