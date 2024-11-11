import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: "What are AI Agents",
    excerpt: "Recently I built this particular project trying to replicate devin (by using multiagent systems) and it blew up. So I have decided to write a mini tutorial/discussion on how I did it.",
    author: "Sai Yashwanth",
    date: "Nov 11, 2024",
    readTime: "3 min read",
    image: "/images/devyan.jpeg",
    category: "AI Agents, Crewai"
  },
  // {
  //   title: "Ethical Considerations in AI Development",
  //   excerpt: "Discussing the importance of responsible AI development and its implications for society.",
  //   author: "Prof. Michael Roberts",
  //   date: "March 12, 2024",
  //   readTime: "6 min read",
  //   image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
  //   category: "Ethics"
  // },
  // {
  //   title: "Quantum Computing and AI: A New Frontier",
  //   excerpt: "Investigating the intersection of quantum computing and artificial intelligence.",
  //   author: "Dr. James Wilson",
  //   date: "March 10, 2024",
  //   readTime: "10 min read",
  //   image: "https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?auto=format&fit=crop&q=80",
  //   category: "Technology"
  // }
];

export function BlogPage() {
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We share our experiences building ai agents and testing them till their limits in our blogposts. 
            Many more blogs will be coming up.
          </p>
        </header>

        <main className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="glass-card group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500 text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="mt-6 btn-primary">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
