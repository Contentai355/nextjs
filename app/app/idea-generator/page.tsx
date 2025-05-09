'use client';

import { useState } from 'react';

export default function IdeaGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    setLoading(true);
    setIdea('');

    const res = await fetch('/api/idea', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setIdea(data.idea);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Idea Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your topic"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={generateIdea}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Idea'}
      </button>

      {idea && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <strong>Generated Idea:</strong>
          <p>{idea}</p>
        </div>
      )}
    </div>
  );
}
