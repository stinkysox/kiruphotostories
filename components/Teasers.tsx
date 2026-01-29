import React from 'react';
import { Instagram, Play } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Teasers: React.FC = () => {
  // Using placeholders for video thumbnails
  const reels = [1, 2, 3, 4];

  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-gold-500 text-sm font-sans tracking-[0.2em] uppercase font-bold mb-3">On The Gram</h2>
                <h3 className="font-serif text-4xl md:text-5xl">Latest Teasers</h3>
            </div>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-gold-500 hover:text-white transition-colors mt-4 md:mt-0">
                <Instagram size={20} />
                <span className="text-sm uppercase tracking-widest">Follow @kiru_photostories</span>
            </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reels.map((id) => (
                <a 
                    key={id}
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="relative aspect-[9/16] group overflow-hidden rounded-md bg-gray-800"
                >
                    <img 
                        src={`https://picsum.photos/400/700?random=${20+id}`} 
                        alt="Reel thumbnail" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="fill-white text-white ml-1" size={20} />
                        </div>
                    </div>
                </a>
            ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-gold-500 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="text-sm uppercase tracking-widest">Follow @kiru_photostories</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Teasers;