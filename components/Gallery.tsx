"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';

const categories = ['all', 'wedding', 'pre-wedding', 'engagement', 'maternity'];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gold-500 text-xs font-sans tracking-[0.3em] uppercase font-bold mb-4">Portfolio</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-charcoal">Selected Works</h3>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="relative px-2 py-1 outline-none focus:outline-none"
            >
              {activeTab === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gold-100 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`text-sm font-sans uppercase tracking-widest transition-colors duration-300 ${activeTab === cat ? 'text-charcoal font-semibold' : 'text-gray-400 hover:text-charcoal'}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden group rounded-sm shadow-md cursor-pointer ${item.id % 5 === 0 ? 'md:col-span-2' : 'md:col-span-1'} ${item.id % 3 === 0 ? 'md:row-span-2' : 'md:row-span-1'}`}
              >
                <div className="absolute inset-0 bg-gray-200 z-0" />
                
                <motion.img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gold-400 text-xs font-sans uppercase tracking-[0.2em] mb-2">
                      {item.category}
                    </p>
                    <h4 className="text-white font-serif text-3xl">
                      {item.title}
                    </h4>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;