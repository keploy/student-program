"use client"

import React, { useState } from 'react';
import {FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaSlack } from 'react-icons/fa';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-400 font-medium leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4">
          Sign-up for the newsletter!
        </h2>
      </div>
     
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="py-3 px-4 border border-primary-400 rounded-full mb-4 w-full max-w-md text-gray-700"
          required
        />
        <div className="flex justify-center">
          <div className="border border-primary-400 bg-primary-300 rounded-full overflow-hidden p-2.5 border-opacity-40 relative transition-all group">
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-gray-100 opacity-60 transition-transform duration-1000 ease-out group-hover:translate-x-[-420%]" />
            <button
              type="submit"
              className="btn-sm  text-gray-200 rounded-md overflow-hidden p-1 border-opacity-40 relative transition-all group"
            >
              <span>Subscribe</span>
            </button>
          </div>
        </div>

      </form>
      <div className="text-center mb-8">
        <p className="text-gray-700">
           © Keploy Inc.
        </p>
        
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <a href="https://twitter.com/Keployio" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/company/keploy/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/keploy" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-400">
          <FaGithub size={24} />
        </a>
        <a href="https://youtube.com/@keploy" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-400">
          <FaYoutube size={24} />
        </a>
        <a href="https://keploy.slack.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-400">
          <FaSlack size={24} />
        </a>
      </div>
    </div>
  );
};

export default NewsletterSignup;
