import React from 'react';

interface CardProps {
  title: string;
  description: string;
  perks: string;
  gifUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, perks, gifUrl }) => {
  return (
    <div className="bg-white rounded-lg border border-primary-400 shadow-lg p-6 mb-6 hover:from-gradient-500 to-gradient-200">
      {gifUrl && (
        <span>
          <img src={gifUrl} alt="GIF" width="100" height="100" />
        </span>
      )}
      <h2 className="text-2xl text-primary-400 font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-700 mb-4">{perks}</p>
    </div>
  );
};

export default Card;
