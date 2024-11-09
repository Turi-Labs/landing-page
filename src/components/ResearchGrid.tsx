import React from 'react';
import { ResearchCard } from './ResearchCard';

// Define the type for research data items
interface ResearchItem {
  image: string;
  title: string;
  description: string;
  category: string;
}

// Define props interface for ResearchGrid
interface ResearchGridProps {
  limit?: number;  // Make it optional with ?
}

const researchData: ResearchItem[] = [
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    title: "Advancing Large Language Models",
    description: "New approaches to improving context understanding and reasoning in LLMs through advanced neural architectures.",
    category: "NLP"
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
    title: "Neural Network Architecture Innovation",
    description: "Novel architectural patterns for improved model efficiency and reduced computational requirements.",
    category: "Architecture"
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
    title: "Multimodal Learning Systems",
    description: "Integrating vision, language, and audio for more comprehensive AI understanding.",
    category: "Multimodal"
  },
  {
    image: "https://www.pexels.com/photo/orchestra-and-conductor-during-the-performance-13673492/",
    title: "Devyan",
    description: "Building a Software Dev Team. Experimental Project to orchestrate a team of agents to solve programming tasks.",
    category: "AI Programmer"
  }
];

export const ResearchGrid: React.FC<ResearchGridProps> = ({ limit }) => {
  // If limit is provided, slice the array, otherwise use the full array
  const displayData = limit ? researchData.slice(0, limit) : researchData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {displayData.map((research, index) => (
        <ResearchCard key={index} {...research} />
      ))}
    </div>
  );
};
