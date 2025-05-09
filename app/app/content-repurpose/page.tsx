'use client';

import { useState } from 'react';

export default function ContentRepurposePage() {
  const [inputContent, setInputContent] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const repurposeContent = async () => {
    setLoading(true);
    setOutput('');

    const res = await fetch('/api/repurpose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: inputContent }),
    });

    const data = await res.json();
    setOutput(data.repurposedContent);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Content Repurposer</h1>
      <textarea
        rows={6}
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        placeholder="Paste your content here..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={repurposeContent}
        className="bg-green-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Repurposing...' : 'Repurpose Content'}
      </button>

      {output && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <strong>Repurposed Content:</strong>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
