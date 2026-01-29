import React from 'react';
import { Instagram, Play } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Teasers: React.FC = () => {
  const reels = [
    { 
      id: 1, 
      link: "https://www.instagram.com/reel/C-pZEQzPKiq/",
      img: "https://images.unsplash.com/photo-1518175056637-67ad69055819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 2, 
      link: "https://www.instagram.com/reel/DOD2pmFE6Gl/",
      img: "https://images.unsplash.com/photo-1520697368541-da88f4b00539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      link: "https://www.instagram.com/reel/DQj3tm0kkOl/",
      img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 4, 
      link: "https://www.instagram.com/reel/DDbzW9NP9T0/",
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 5, 
      link: "https://www.instagram.com/reel/DT8J613Etuy/",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    }
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

        {/* Adjusted grid for 5 items: 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {reels.map((reel) => (
                <a 
                    key={reel.id}
                    href={reel.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative aspect-[9/16] group overflow-hidden rounded-md bg-gray-800"
                >
                    <img 
                        src={reel.img}
                        alt="Reel thumbnail" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 transform group-hover:scale-105"
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