"use client";

import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaSlack } from 'react-icons/fa';
import { useDarkMode } from '@/components/utils/DarkModeContext'; // Import the dark mode context

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const { darkMode } = useDarkMode(); // Access the dark mode state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      <div className="text-center mb-8">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
          Sign-up for the newsletter!
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={`py-3 px-4 border rounded-full mb-4 w-full max-w-md ${darkMode ? 'bg-gray-800 border-gray-600 text-gray-200' : 'border-primary-400 text-gray-700'}`}
          required
        />
        <div className="flex justify-center">
          <div className={`border rounded-full overflow-hidden p-2.5 border-opacity-40 relative transition-all group ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-primary-400 bg-primary-300'}`}>
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-gray-100 opacity-60 transition-transform duration-1000 ease-out group-hover:translate-x-[-420%]" />
            <button
              type="submit"
              className="btn-sm text-gray-200 rounded-md overflow-hidden p-1 border-opacity-40 relative transition-all group"
            >
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </form>

      <div className="text-center mb-8">
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          © Keploy Inc.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <a href="https://twitter.com/Keployio" target="_blank" rel="noopener noreferrer" className={`hover:text-primary-400 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer" className={`hover:text-primary-400 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/keploy" target="_blank" rel="noopener noreferrer" className={`hover:text-primary-400 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FaGithub size={24} />
        </a>
        <a href="https://youtube.com/@keploy" target="_blank" rel="noopener noreferrer" className={`hover:text-primary-400 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FaYoutube size={24} />
        </a>
        <a href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer" className={`hover:text-primary-400 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FaSlack size={24} />
        </a>
      </div>
    </div>
  );
};

export default NewsletterSignup;
