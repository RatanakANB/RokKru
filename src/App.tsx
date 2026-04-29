/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  Search, 
  Bell, 
  Settings, 
  HelpCircle, 
  Image as ImageIcon, 
  Video, 
  X,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Components ---

const Avatar = ({ src, size = "md" }: { src?: string, size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gray-200 overflow-hidden border border-gray-100 flex-shrink-0`}>
      {src ? (
        <img src={src} alt="avatar" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <Users size={size === "sm" ? 16 : 20} />
        </div>
      )}
    </div>
  );
};

// --- Navbar ---

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="bg-white rounded-full shadow-lg px-8 py-3 flex items-center justify-between border border-gray-100">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold font-display text-blue-600">Rok kru</h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-wider">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors uppercase tracking-wider">Schedule</a>
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-0.5 uppercase tracking-wider">Community</a>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search students by name or ID..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-blue-600 transition-colors"><Bell size={20} /></button>
          <button className="hover:text-blue-600 transition-colors"><Settings size={20} /></button>
          <button className="hover:text-blue-600 transition-colors"><HelpCircle size={20} /></button>
          <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" size="sm" />
        </div>
      </div>
    </nav>
  );
};

// --- Main Components ---

const CreatePostBox = () => {
  return (
    <div className="max-w-4xl h-[212px] bg-white rounded-[32px] shadow-sm border border-gray-200 p-8 flex flex-col gap-6 mt-32 mx-auto">
      <div className="flex items-center gap-4">
        <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" />
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="What you wanna post ?" 
            className="w-full bg-white border border-gray-300 rounded-full py-2.5 px-6 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <button className="flex-1 py-3 px-4 rounded-xl border border-gray-800 text-[10px] font-bold text-gray-800 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 tracking-[0.15em]">
          PHOTO
        </button>
        <button className="flex-1 py-3 px-4 rounded-xl border border-gray-800 text-[10px] font-bold text-gray-800 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 tracking-[0.15em]">
          VIDEO
        </button>
      </div>
    </div>
  );
};

const FilterBar = () => {
  const filters = ["MATH", "MATH", "MATH", "MATH", "MATH", "MATH", "GRADE"];
  return (
    <div className="flex flex-wrap justify-center gap-3 my-8 max-w-4xl mx-auto">
      {filters.map((filter, i) => (
        <button 
          key={i} 
          className={`px-8 py-2 rounded-xl border font-bold text-sm tracking-widest transition-all ${filter === "GRADE" ? "border-gray-800 text-gray-800" : "border-gray-200 text-gray-800 hover:border-gray-400"}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const PostCard = ({ 
  name = "Username Name", 
  avatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  message = "this teacher teaching is good i like it",
  description = "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac",
  image = null
}: {
  name?: string;
  avatar?: string;
  message?: string;
  description?: string;
  image?: string | null;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-[359px] h-[359px] bg-white rounded-[24px] shadow-sm border border-gray-400/30 p-6 flex flex-col relative overflow-hidden mb-10 mx-auto"
    >
      <button className="absolute top-5 right-6 text-gray-800 hover:scale-110 transition-transform">
        <X size={20} strokeWidth={2} />
      </button>

      <div className="flex items-center gap-2.5 mb-4">
        <Avatar src={avatar} size="sm" />
        <span className="text-[10px] font-bold text-[#56A8F0]">{name}</span>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pr-1">
        <h3 className="text-xs font-black text-gray-900 mb-1.5 leading-tight">{message}</h3>
        <p className="text-[9px] font-medium text-gray-500 leading-relaxed mb-4">{description}</p>
        
        {image && (
          <div className="rounded-xl overflow-hidden mb-4 border border-gray-100 aspect-video w-full bg-gray-50">
             <img src={image} alt="post content" className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="pt-3 flex items-center gap-2.5">
        <div className="flex -space-x-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white" />
          ))}
        </div>
        <div className="flex-1 bg-white rounded-md h-5 border border-gray-300" />
      </div>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 py-12 bg-white">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">© 2024 EDUPRECISE. PRECISION LEARNING.</p>
        <div className="flex items-center gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-600">Help Center</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
      description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac"
    },
    {
      image: null,
      description: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop",
      description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac"
    },
    {
      image: null,
      description: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4">
        <CreatePostBox />
        
        <FilterBar />
        
        <div className="flex flex-col items-center">
          {posts.map((post, i) => (
            <PostCard 
              key={i} 
              image={post.image}
              description={post.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

