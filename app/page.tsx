'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-8 font-sans text-center">
      <h1 className="text-3xl font-bold">⚡️ Your AI Content Toolkit</h1>
      <div className="space-y-4">
        <Link href="/generator" className="text-blue-600 text-lg underline hover:text-blue-800">
          🧠 Content Idea Generator
        </Link>
        <Link href="/repurpose" className="text-blue-600 text-lg underline hover:text-blue-800">
          🔁 Content Repurposer
        </Link>
        <Link href="/pitch" className="text-blue-600 text-lg underline hover:text-blue-800">
          ✉️ Brand Collab Pitch Generator
        </Link>
      </div>
    </div>
  );
}
