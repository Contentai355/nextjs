'use client';

import { useState } from 'react';

export default function BrandPitchPage() {
  const [brandInfo, setBrandInfo] = useState('');
  const [pitch, setPitch] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePitch = async () => {
    setLoading(true);
    setPitch('');

    const res = await fetch('/api/pitch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brandInfo }),
    });

    const data = await res.json();
    setPitch(data.pitch);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Brand Pitch Generator</h1>
      <textarea
        rows={4}
        value={brandInfo}
        onChange={(e) => setBrandInfo(e.target.value)}
        placeholder="Describe your brand or product..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={generatePitch}
        className="bg-purple-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating Pitch...' : 'Generate Pitch'}
      </button>

      {pitch && (
        <div className="mt-4 p-4 bg-gray-100 rounded border">
          <strong>Pitch:</strong>
          <p>{pitch}</p>
        </div>
      )}
    </div>
  );
}

