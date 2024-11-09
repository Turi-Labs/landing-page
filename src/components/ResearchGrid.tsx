import React from 'react';
import { ResearchCard } from './ResearchCard';

const researchData = [
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
    image: "https://images.unsplash.com/photo-1696332331308-8a064129a487?auto=format&fit=crop&q=80",
    title: "Reinforcement Learning Breakthroughs",
    description: "Advanced algorithms for improved decision-making in complex environments.",
    category: "RL"
  }
];

export function ResearchGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {researchData.map((research, index) => (
        <ResearchCard key={index} {...research} />
      ))}
    </div>
  );
}