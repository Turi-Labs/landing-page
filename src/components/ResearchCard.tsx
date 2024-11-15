import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ResearchCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

export function ResearchCard({ image, title, description, category }: ResearchCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-500 text-sm rounded-full text-white transition-transform duration-300 group-hover:scale-110">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm sm:text-base">{description}</p>
        <a href="/research" className="text-blue-400 hover:text-blue-500 flex items-center gap-2 text-sm sm:text-base group-hover:gap-3 transition-all duration-300">
          Coming soon <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
