"use client"
import Link from 'next/link';
import React from 'react';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useDarkMode } from '@/components/utils/DarkModeContext'; // Import the dark mode context

const Join: React.FC = () => {
  const { darkMode } = useDarkMode(); // Access the dark mode state

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 -mt-30 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      <h1 className={`text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
        Join Keploy API Community
      </h1>
      <p className="text-lg sm:text-xl mb-8 leading-snug sm:leading-normal text-center">
        Meet students, mentors, and educators around the world excited about APIs and technology.
      </p>
      <div className="flex justify-center">
        <div className={`border rounded-full overflow-hidden p-2.5 border-opacity-40 relative transition-all group ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-primary-400 bg-primary-300'}`}>
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-gray-100 opacity-60 transition-transform duration-1000 ease-out group-hover:translate-x-[-420%]" />
          <Link
            href="https://keploy.slack.com/join/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw#/shared-invite/email"
            target="_blank"
            className="btn-sm py-3 text-gray-200 rounded-md overflow-hidden p-2.5 border-opacity-40 relative transition-all group"
            rel="noopener noreferrer"
          >
            <span>Join Slack</span>
            <OpenInNewIcon className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 h-5 w-5" />
          </Link>
        </div>
      </div>
      <hr className={`mt-10 mb-10 ${darkMode ? 'border-gray-600' : 'border-primary-400'} border-opacity-60`} />
    </div>
  );
};

export default Join;
