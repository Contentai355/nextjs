'use client';

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState('idea'); // default route

  const handleSubmit = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult('');

    try {
      const res = await fetch(`/api/${route}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Content AI Tool</h1>

      <select
        value={route}
        onChange={(e) => setRoute(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="idea">Idea</option>
        <option value="repurpose">Repurpose</option>
        <option value="pitch">Pitch</option>
      </select>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        className="w-full p-2 border rounded mb-4"
        rows={4}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Generating...' : 'Submit'}
      </button>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Response:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
