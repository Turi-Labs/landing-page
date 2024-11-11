import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft } from 'lucide-react';
import { ResearchGrid } from '../components/ResearchGrid';

export function ResearchPage() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 pointer-events-none"></div>
      
      <div className="relative">
        <header className="container mx-auto px-4 sm:px-6 py-8">
          <nav className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Brain className="w-8 h-8 text-blue-500 feature-icon" />
              <span className="text-xl font-bold">Turi Labs</span>
            </Link>
          </nav>

          <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Experiments</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Here are some of our experimental projects we built purely for fun and for the sake of testing the limits of llms and frameworks around llms.
          </p>
        </header>

        <main className="container mx-auto px-4 sm:px-6 py-16">
          <ResearchGrid />
        </main>
      </div>
    </div>
  );
}
