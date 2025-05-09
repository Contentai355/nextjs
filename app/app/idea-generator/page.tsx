'use client';
import { useState } from 'react';

const ideas = [
  'Build a meditation app for freelancers',
  'Create a newsletter for Gen Z finance tips',
  'Design a gamified habit tracker for students',
  'Launch a meal plan generator for busy parents',
];

export default function Page() {
  const [idea, setIdea] = useState('');

  const generateIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    setIdea(ideas[randomIndex]);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Idea Generator</h1>
      <button onClick={generateIdea} className="px-4 py-2 bg-blue-600 text-white rounded">
        Generate Idea
      </button>
      {idea && <p className="mt-4 text-lg">{idea}</p>}
    </div>
  );
}
