'use client';
import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRepurpose = () => {
    setOutput(`Tweet: "${input.slice(0, 100)}..." #repurposed`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Content Repurposer</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Paste your content here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleRepurpose} className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
        Repurpose
      </button>
      {output && <div className="mt-4 p-2 bg-gray-100 rounded">{output}</div>}
    </div>
  );
}
