"use client";
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { useDarkMode } from '@/components/utils/DarkModeContext';

const Testimonial: React.FC = () => {
  const { darkMode } = useDarkMode();

  const testimonials = [
    {
      name: "Sanskriti Gupta",
      role: "Web Development",
      content: "Keploy community is surely one of the most amazing communities I have encountered yet, no cap 🧢! The mentor support was really good. I am really thankful to Nishant Mishra, Ankit Kumar, Animesh Pathak & Hardik (all our mentors and the keploy team) for your enriching Guidance. ✨✨",
      imageUrl: "./images/sanskriti.avif",
      link: "https://sanskritigupta.hashnode.dev/my-keploy-fellowship-experience23#heading-how-i-got-to-know-about-this-opportunity-and-why-i-applied"
    },
    {
      name: "Sukriti Maurya",
      role: "Backend Developer and UX/UI Designer",
      content: "This fellowship was an amazing learning experience for me and I am grateful for this opportunity.",
      imageUrl: "./images/sukriti.avif",
      link: "https://sukritim.hashnode.dev/my-keploy-fellowship-experience#heading-6-api-testing-with-keploy"
    },
    {
      name: "Harsh Rastogi",
      role: "Student at CU",
      content: "From this fellowship, my way of learning did take a new turn, as I got into reading the documents and applying them to my projects.",
      imageUrl: "./images/harsh.avif",
      link: "https://keploy.hashnode.dev/my-keploy-api-fellowship-journey"
    },
    {
      name: "Arunima Chaudhuri",
      role: "Member & Contributor @Layer5",
      content: "I got to know about this opportunity from LinkedIn. It has been a wonderful journey of learning about APIs so far. I am thankful to all my mentors for sharing their knowledge and insights with us during this program. 🤩",
      imageUrl: "./images/arunima.avif",
      link: "https://arunima.hashnode.dev/my-keploy-api-fellowship-experience"
    },
    {
      name: "Neel Shah",
      role: "Data Science Intern",
      content: "The Keployio API Fellowship was an amazing learning experience. I now have a better understanding of the fundamentals of API development, as well as the latest trends and technologies. Throughout the program, we received mentorship from experienced API developers. They provided invaluable advice and tips for creating robust APIs that are secure and perform well. We also had the opportunity to explore the latest API trends and technologies, such as GraphQL and gRPC.",
      imageUrl: "./images/neel.jpg",
      link: "https://medium.com/@shahneel2409/keploy-fellowship-helped-me-a-lot-3674800d11b8"
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
