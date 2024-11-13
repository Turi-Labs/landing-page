import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft, Mail, Bell, Zap, Star } from 'lucide-react';

export function NewsletterPage() {
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
        </header>

        <main className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Mail className="w-16 h-16 text-blue-400 mx-auto mb-6 feature-icon" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Why Our Newsletter?</h1>
              <p className="text-xl text-gray-300">
              We play a lot with AI Agents and LLMs and we learn a lot.   
              Join our inner circle and get the raw insights from our LLM experiments, early AI trends before they hit mainstream, 
              and complex tech decoded into actionable bits — straight from the lab to your inbox.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Bell, title: "Early Signals", desc: "Catch AI trends months before they hit mainstream, straight in your inbox" },
                { icon: Zap, title: "Unfair Advantage", desc: "Alpha Insights: real findings from our experiments, not the usual AI hype" },
                { icon: Star, title: "Exclusive Content", desc: "Get raw insights from our AI agent builds while they're still in the lab, not after they're old news" }
              ].map((feature, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <feature.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 feature-icon" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 sm:p-12">
              <form className="max-w-md mx-auto">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div> 
                  <button type="submit" className="w-full btn-primary">
                    Subscribe to Newsletter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
