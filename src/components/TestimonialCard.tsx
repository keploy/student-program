"use client"
import React from 'react';
import { useDarkMode } from '@/components/utils/DarkModeContext'; // Import the dark mode context

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content }) => {
  const { darkMode } = useDarkMode(); // Access the dark mode state

  return (
    <div className={`rounded-lg border shadow-lg p-6 mb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-primary-400'}`}>
      <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
        {name}
      </h2>
      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {role}
      </p>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {content}
      </p>
    </div>
  );
};

export default TestimonialCard;
