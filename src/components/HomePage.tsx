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
                <button className="btn-primary">
                  Contact Us
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
                Indie AI Research Lab dedicated to advancing the frontier of autonomous AI agents. We're building the next generation of intelligent systems that can learn, adapt, and evolve.
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
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Latest</h2>
            <Link to="/research" className="text-blue-400 hover:text-blue-500 flex items-center gap-2 text-sm sm:text-base group">
              View All <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <ResearchGrid limit={2} />
        </section>
        
        <FoundersSection />
        
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="glass-card p-6 sm:p-12 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-12 sm:w-16 h-12 sm:h-16 text-blue-400 mx-auto mb-6 feature-icon" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
              <p className="text-gray-300 mb-8">Get the latest AI research updates, blog posts, and event announcements delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5  border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
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
