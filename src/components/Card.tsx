"use client";
import React from 'react';
import { useDarkMode } from '@/components/utils/DarkModeContext'; // Import the dark mode context

interface CardProps {
  title: string;
  description: string;
  perks: string;
  gifUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, perks, gifUrl }) => {
  const { darkMode } = useDarkMode(); // Access the dark mode state

  return (
    <div className={`rounded-lg border shadow-lg p-6 mb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-primary-400'}`}>
      {gifUrl && (
        <span className="mb-4">
          <img src={gifUrl} alt="GIF" width="100" height="100" />
        </span>
      )}
      <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
        {title}
      </h2>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {description}
      </p>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {perks}
      </p>
    </div>
  );
};

export default Card;
