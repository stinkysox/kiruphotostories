import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-gold-500 text-xs font-sans tracking-[0.3em] uppercase font-bold mb-4">Our Expertise</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-charcoal">What We Offer</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-gray-50 hover:bg-white border border-transparent hover:border-gold-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 rounded-sm text-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="p-5 bg-white shadow-sm rounded-full text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                </div>
                <h4 className="font-serif text-3xl text-charcoal mb-4 group-hover:text-gold-600 transition-colors">{service.title}</h4>
                <p className="font-sans text-gray-500 leading-relaxed text-sm font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;