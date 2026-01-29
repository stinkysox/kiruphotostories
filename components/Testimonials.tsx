import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Decor */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-100 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-gold-500 text-xs font-sans tracking-[0.3em] uppercase font-bold mb-4">Love Letters</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-charcoal">Happy Clients</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border-t-2 border-gold-300 relative"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold-500 p-3 rounded-full text-white">
                 <Quote size={20} fill="currentColor" />
              </div>
              <p className="font-serif text-2xl text-charcoal italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <h5 className="font-sans font-bold text-charcoal uppercase tracking-widest text-xs">{t.name}</h5>
                <p className="text-xs text-gold-600 font-sans mt-1 tracking-wider">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;