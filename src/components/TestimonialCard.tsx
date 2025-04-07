"use client";
import React from 'react';
import { useDarkMode } from '@/components/utils/DarkModeContext'; 

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  imageUrl?: string; // Optional image URL
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, imageUrl }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`rounded-lg border shadow-lg p-6 mb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-primary-400'}`}>
      <div className="flex items-center justify-center mb-4">
        {imageUrl ? (
          <img src={imageUrl} alt={`${name}'s profile`} className="rounded-full w-20 h-20 object-cover" />
        ) : (
          <div className={`rounded-full w-20 h-20 flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
            <span className={`text-2xl ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h2 className={`text-2xl font-bold mb-4 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
        {name}
      </h2>
      <p className={`mb-4 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {role}
      </p>
      <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {content}
      </p>
    </div>
  );
};

export default TestimonialCard;
