"use client";
import React from 'react';
import { Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Teasers: React.FC = () => {
  // Using the unique IDs from the Instagram Reel URLs provided
  const reelIds = [
    "C-pZEQzPKiq",
    "DOD2pmFE6Gl",
    "DQj3tm0kkOl",
    "DDbzW9NP9T0",
    "DT8J613Etuy"
  ];

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

        {/* 
          Using grid-cols-1 on mobile because Instagram embeds have a minimum width 
          and break if forced into a 2-column layout on small screens.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {reelIds.map((id) => (
                <div 
                    key={id}
                    className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black border border-gray-800 shadow-2xl"
                >
                   <iframe
                        src={`https://www.instagram.com/reel/${id}/embed/`}
                        className="absolute inset-0 w-full h-full object-cover"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency={true}
                        allow="encrypted-media"
                        loading="lazy"
                        title={`Instagram Reel ${id}`}
                    ></iframe>
                </div>
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