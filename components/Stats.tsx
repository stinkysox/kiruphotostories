import React, { useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { STATS } from '../constants';

const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setCurrent(latest);
    });
  }, [displayValue]);

  return (
    <span ref={ref} className="flex items-baseline">
      {current}
      {suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
       {/* Texture overlay */}
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8"
            >
              <div className="font-serif text-6xl md:text-8xl text-gold-500 mb-2 font-light tracking-tight">
                 <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-sans text-sm tracking-[0.2em] uppercase text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;