import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, MapPin, Phone, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleWords = "Capturing the Soul of Your Celebration".split(" ");

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1], 
             rotate: [0, 90, 0],
             borderRadius: ["50%", "30%", "50%"]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-300 blur-[100px] translate-x-1/2 -translate-y-1/2"
         />
         <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2], 
             rotate: [0, -90, 0], 
             x: [0, -50, 0] 
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-500 blur-[120px] -translate-x-1/2 translate-y-1/2"
         />
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-gold-500 text-xs md:text-sm tracking-[0.4em] uppercase font-sans font-semibold mb-6">
            Kiru Gowda Photography & Videography
          </h2>
        </motion.div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-charcoal leading-[0.9] mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + (i * 0.1),
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className={word === "Soul" ? "italic text-gold-500" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-2xl mx-auto mb-12"
        >
           <p className="text-gray-500 font-sans text-lg md:text-xl leading-relaxed font-light">
             Specializing in crafting timeless wedding stories and cinematic films across Bangalore and India. 
             We transform fleeting moments into eternal memories.
           </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs md:text-sm font-medium text-gray-400 mb-16 uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-gold-500" />
            <span>Sony A7R4 • A7R5 • FX3</span>
          </div>
          <div className="w-1 h-1 bg-gold-300 rounded-full hidden md:block" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-500" />
            <span>Bangalore, India</span>
          </div>
          <div className="w-1 h-1 bg-gold-300 rounded-full hidden md:block" />
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold-500" />
            <span>+91 7022993500</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, type: "spring" }}
        >
          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-sans font-medium tracking-widest text-white transition duration-300 ease-out bg-charcoal shadow-xl group hover:shadow-2xl"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-sm uppercase group-hover:text-gold-100 transition-colors">Book Your Date</span>
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;