"use client";
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { useDarkMode } from '@/components/utils/DarkModeContext';

const Testimonial: React.FC = () => {
  const { darkMode } = useDarkMode();

  const testimonials = [
    {
      name: "Sanskriti Harmukh",
      role: "GitHub Campus Expert",
      content: "If you are someone who is looking forward to stepping into the domain of DevRel and is eager to learn its goals in an open-source organization, then we have a space created for you called Keploy's DevRel Cohort, to boost up your learning and enhance your way of approaching a solution to a problem being a DevRel.",
      imageUrl: "https://devrel.keploy.io/images/testimonials/sanskriti.jpg" 
    },
    {
      name: "Animesh Pathak",
      role: "Gold MLSA",
      content: "My experience of DevRel Cohort 1.0 will forever resonate in my heart. I am able to improve my skills. All in all, the virtual atmosphere is simply uplifting and I am enjoying this work with such a great and impressive team!",
      imageUrl: "https://devrel.keploy.io/images/testimonials/animesh.jpg" 
    },
    {
      name: "Jyotirmoy Roy",
      role: "IRLamigo",
      content: "Participating in Keploy's DevRel Cohort as a mentee was an exceptional journey that enriched my knowledge and skills about the DevRel role in an open-source company. The program helped me to effectively communicate with diverse stakeholders and understand the accountability of a DevRel. I'm grateful for the mentors' constant support and constructive feedback that aided me in making progress.",
      imageUrl: "https://devrel.keploy.io/images/testimonials/roy.jpg" 
    },
    {
      name: "Diganta Kr Banik",
      role: "Web Developer",
      content: "DevRel was something new to me. I had a great experience during the cohort as a mentee and learned a lot during the contribution period. If you want to experience what a DevRel is, this program is a really great opportunity to understand the roles and responsibilities of a DevRel.",
      imageUrl: "https://avatars.githubusercontent.com/u/65999534?v=4"
    },
    {
      name: "Shashwat Gupta",
      role: "Backend Developer",
      content: "Keploy's DevRel Cohort has been a game-changer. Immersed in Developer Relations within open-source, I learned effective communication and the key role DevRel plays. Expert mentorship and collaborative peers enriched the journey. For those curious about DevRel's role in open-source, this program is an ideal gateway to explore and learn.",
      imageUrl: "https://devrel.keploy.io/images/testimonials/shashwat.jpg" 
    },
    {
      name: "Arindam Majumder",
      role: "DevRel @getpieces",
      content: "It was a great learning experience and got to explore many aspects of DevRel. If you want to experience what a DevRel is, this program is a really great opportunity to understand the roles and responsibilities and how to navigate them.",
      imageUrl: "https://arindam-majumder.vercel.app/static/media/HeroImage.4740728022c691f81573.jpg"
    },
  ];

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-12 -mt-30 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
        <p className={`text-md sm:text-xl md:text-xl lg:text-lg font-medium leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>COMMUNITY❣️</p>
      <h1 className={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-4 md:mt-4 lg:mt-5 text-center ${darkMode ? 'text-gray-200' : 'text-primary-400'}`}>
      Look at what the previous folks have to say!
      </h1>
      <hr className={`mt-20 mb-10 w-1/2 place-self-center ${darkMode ? 'border-gray-600' : 'border-primary-400'} border-opacity-60`} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-eve">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <hr className={`mt-10 mb-10 ${darkMode ? 'border-gray-600' : 'border-primary-400'} border-opacity-60`} />
    </div>
  );
};

export default Testimonial;
