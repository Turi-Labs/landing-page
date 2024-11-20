import React, { useState } from 'react';
import { Brain, Atom, Globe2, Users, ChevronRight, Github, Twitter, BookOpen, Newspaper, Mail, Menu, X } from 'lucide-react';
import { ResearchGrid } from './ResearchGrid';
import { FoundersSection } from './FoundersSection';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 pointer-events-none"></div>
      
      <div className="relative">
        <header className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <nav className="flex items-center justify-between mb-8 sm:mb-16">
            <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Brain className="w-8 h-8 text-blue-500 feature-icon" />
              <span className="text-xl font-bold">Turi Labs</span>
            </Link>
            
            <button 
              className="md:hidden transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/research" className="nav-link">Research</Link>
              <Link to="/product" className="nav-link">Product</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/newsletter" className="nav-link">Newsletter</Link>
              <button className="btn-primary"
                  onClick={() => window.open('https://cal.com/sai-yashwanth/15min', '_blank')}>
                Book a Call
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-50 animate-fadeIn">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <Link to="/research" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Research</Link>
                <Link to="/product" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Product</Link>
                <Link to="/blog" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="/newsletter" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Newsletter</Link>
                <button className="btn-primary"
                  onClick={() => window.open('https://cal.com/sai-yashwanth/15min', '_blank')}>
                Book a Call
              </button>

                <button 
                  className="absolute top-8 right-4 transition-transform duration-300 hover:scale-110"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Advancing the Frontiers of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-[gradientMove_3s_linear_infinite]"> LLM Agents</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Indie AI Research Lab X Agency dedicated to advancing the frontier of autonomous AI agents. We're building the next generation of intelligent systems that can learn, adapt, and evolve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/research" className="btn-primary">
                  View Our Experiments <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/product" className="btn-secondary">
                  Our Products
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg filter blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?auto=format&fit=crop&q=80"
                alt="AI Visualization"
                className="relative rounded-lg shadow-2xl w-full hero-image hover:scale-105 hover:-translate-y-2 transition-all duration-500"
              />
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Atom, title: "Agency Services", desc: "We provide consulting and development services to help others build AI agents quickly and efficiently.", color: "blue" },
              { icon: Globe2, title: "Indie Projects", desc: "We focus on creating innovative experimental projects to explore new ideas and technologies in AI.", color: "purple" },
              { icon: Users, title: "AI Agents as Service", desc: "We aim to develop and offer AI agents that can be easily integrated into various applications and services.", color: "green" }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <feature.icon className={`w-12 h-12 text-${feature.color}-500 mb-4 feature-icon`} />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

<section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What we use</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
    {[ 
      { 
        icon: "https://cabinetm-beta.s3.amazonaws.com/0000017b-073f-ebdb-7778-e94de915e17d.png", 
        name: "n8n" 
      },
      { 
        icon: "https://avatars.githubusercontent.com/u/170677839?v=4", 
        name: "CrewAI" 
      },
      {
        icon: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F9157%2F363db417-2225-40ec-8fbe-2f5c816ffeb7.png",
        name: "Composio"
      },
      { 
        icon: "https://seeklogo.com/images/P/pinecone-icon-logo-AF8B5B7F96-seeklogo.com.png", 
        name: "Pinecone" 
      },
      { 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", 
        name: "PostgreSQL" 
      },
      {
        icon: "data:image/png;base64,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",
        name: "LangChain"
      },
      {
        icon: "data:image/jpeg;base64,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",
        name: "CAMEL-AI"
      },     
      
      {
        icon: "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg",
        name: "HuggingFace"
      },
      { 
        icon: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png", 
        name: "OpenAI" 
      },
      {
        icon: "https://www.appengine.ai/uploads/images/profile/logo/Anthropic-AI.png",
        name: "Anthropic-AI"
      },
      {
        icon: "https://miro.medium.com/v2/resize:fit:500/1*8xvg7T-wPBrq_9O-Bxnv3w.png",
        name: "Ollama"
      }

    ].map((tech, i) => (
      <div key={i} className="flex flex-col items-center justify-center glass-card p-6 hover:scale-105 transition-all duration-300">
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className="w-12 h-12 mb-3"
        />
        <span className="text-sm text-gray-300">{tech.name}</span>
      </div>
    ))}
  </div>
</section>
        
        <FoundersSection />
        
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link to="/newsletter">  
        <div className="glass-card p-6 sm:p-12 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-12 sm:w-16 h-12 sm:h-16 text-blue-400 mx-auto mb-6 feature-icon" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
              <p className="text-gray-300 mb-8">Click here to get the latest AI research updates, blog posts, and event announcements delivered to your inbox. </p> 
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            </div>
            </div>
          </div>
          </Link>
        </section>

        <footer className="mt-16 sm:mt-24 glass-card">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <Brain className="w-6 h-6 text-blue-500 feature-icon" />
                <span className="font-bold">Turi Labs</span>
              </Link>
              <div className="flex gap-6">
                {[
                  { icon: Github, link: "https://github.com/Turi-Labs" },
                  { icon: Twitter, link: "#" },
                  { icon: BookOpen, link: "/blogs" },
                  { icon: Newspaper, link: "/newsletter" }
                ].map((social, i) => (
                  <a key={i} href={social.link} className="social-icon">
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500">
              © 2024 Turi Labs. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
