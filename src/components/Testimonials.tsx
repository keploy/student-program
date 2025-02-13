import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content }) => {
  return (
    <div className="bg-white rounded-lg border border-primary-400 shadow-lg p-6 mb-6">
      <h2 className="text-2xl text-primary-400 font-bold mb-4">{name}</h2>
      <p className="text-gray-700 mb-4">{role}</p>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      name: 'Sanskriti Gupta',
      role: 'Web Development',
      content: 'Keploy community is surely one of the most amazing communities I have encountered yet, no cap 🧢! The mentor support was really good. I am really thankful to Nishant Mishra, Ankit Kumar, Animesh Pathak & Hardik (all our mentors and the Keploy team) for your enriching guidance. ✨✨',
    },
    {
      name: 'Sukriti Maurya',
      role: 'Backend Developer and UX/UI Designer',
      content: 'This fellowship was an amazing learning experience for me and I am grateful for this opportunity.',
    },
    {
      name: 'Neel Shah',
      role: 'Data Science Intern',
      content: 'The Keployio API Fellowship was an amazing learning experience. I now have a better understanding of the fundamentals of API development, as well as the latest trends and technologies.',
    },
    {
      name: 'Harsh Rastogi',
      role: 'Student at CU',
      content: 'From this fellowship, my way of learning did take a new turn, as I got into reading the documents and applying them to my projects.',
    },
    {
      name: 'Arunima Chaudhuri',
      role: 'Member & Contributor @Layer5',
      content: 'I got to know about this opportunity from LinkedIn. It has been a wonderful journey of learning about APIs so far. I am thankful to all my mentors for sharing their knowledge and insights with us during this program. 🤝',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-400 font-normal leading-tight sm:leading-tight md:leading-tighter tracking-tighter mb-8 text-center">
        What do our previous fellows say?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-eve">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <hr className='mt-10 mb-10 border-primary-400 border-opacity-60' />
    </div>
  );
};

export default Testimonial;
