import React from 'react';
import Card from './Card';

const Content = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 -mt-30">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text6xl text-primary-400 font-medium  leading-tight sm:leading-tight md:leading-tighter place-self-center tracking-tighter mb-4 md:mt-4 lg:mt-5 ">
          What's in it for you ?
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Learn"
          description="Get one-on-one training about APIs and Keploy by the Keploy team."
          perks="🎁 Exclusive swag kit by Keploy"
          gifUrl="http://127.0.0.1:5500/images/code1.gif" 
        />
        <Card
          title="Teach"
          description="Take sessions in your college or community and spread awareness about the world of APIs and Keploy."
          perks="🖼 Recognition on our Website"
          gifUrl="http://127.0.0.1:5500/images/code2.gif" 
        />
        <Card
          title="Grow"
          description="The Keploy team will help you in creating your own community in your college if you wish to."
          perks="🌟 Mentorship on how to build and grow a community"
          gifUrl="http://127.0.0.1:5500/images/code3.gif" 
        />
      </div>
    </div>
  );
};

export default Content;
