"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Aperture, UserCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Aperture className="w-8 h-8 text-gold-500" />,
    title: "Cinematic Storytelling",
    description: "We don't just capture events; we weave them into a timeless narrative. Every shot is composed with a filmmaker's eye to ensure your story feels like a movie."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-gold-500" />,
    title: "Unobtrusive Presence",
    description: "The best moments are candid. We blend into the background, allowing you to be your authentic selves while we capture the raw emotions and laughter."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-gold-500" />,
    title: "Premium Experience",
    description: "From the first consultation to the final delivery of your handcrafted album, we provide a seamless, stress-free experience tailored to your unique vision."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gold-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-gold-500 text-xs font-sans tracking-[0.3em] uppercase font-bold mb-4"
            >
              The Difference
            </motion.h2>
           <motion.h3 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-serif text-4xl md:text-5xl text-charcoal"
            >
              Why Choose Us?
            </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group p-6 rounded-lg hover:bg-white transition-colors duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="font-serif text-2xl text-charcoal mb-4">{feature.title}</h4>
              <p className="font-sans text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;