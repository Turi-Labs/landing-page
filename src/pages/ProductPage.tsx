import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft, Cpu, Twitter, Shield, Code } from 'lucide-react';

const products = [
  {
    icon: Code,
    name: "NexusCore AI",
    description: "Enterprise-grade AI infrastructure for large-scale deployments",
    features: ["Scalable Architecture", "Real-time Processing", "Custom Model Training"],
    image: "https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?auto=format&fit=crop&q=80"
  },
  {
    icon: Twitter,
    name: "Tactical Twitter",
    description: "An AI Agent which tweets everything about football.",
    features: ["Twitter account managed by an AI Agent", "Fully Automated", "Footbal Tweets"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
  }
];

export function ProductPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Cutting-edge AI solutions designed for enterprise needs. Transform your business with our suite of advanced AI products.
          </p>
        </header>

        <main className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="glass-card group">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <product.icon className="absolute bottom-4 left-4 w-8 h-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full btn-primary">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
