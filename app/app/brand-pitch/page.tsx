'use client';
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [pitch, setPitch] = useState('');

  const generatePitch = () => {
    setPitch(`${name} is revolutionizing the way we ${product}. Join us in shaping the future.`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Brand Pitch Generator</h1>
      <input
        className="block mb-2 p-2 border rounded w-full"
        placeholder="Your brand name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="block mb-2 p-2 border rounded w-full"
        placeholder="What does your product do?"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button onClick={generatePitch} className="px-4 py-2 bg-purple-600 text-white rounded">
        Generate Pitch
      </button>
      {pitch && <p className="mt-4">{pitch}</p>}
    </div>
  );
}
