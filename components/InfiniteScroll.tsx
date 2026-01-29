import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const imagesRow1 = [
  "https://picsum.photos/600/400?random=10",
  "https://picsum.photos/600/400?random=11",
  "https://picsum.photos/600/400?random=12",
  "https://picsum.photos/600/400?random=13",
  "https://picsum.photos/600/400?random=14",
  "https://picsum.photos/600/400?random=15",
];

const imagesRow2 = [
  "https://picsum.photos/600/400?random=16",
  "https://picsum.photos/600/400?random=17",
  "https://picsum.photos/600/400?random=18",
  "https://picsum.photos/600/400?random=19",
  "https://picsum.photos/600/400?random=20",
  "https://picsum.photos/600/400?random=21",
];

interface ParallaxRowProps {
  images: string[];
  baseVelocity: number;
}

const ParallaxRow: React.FC<ParallaxRowProps> = ({ images, baseVelocity }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Wrap between 0 and -25% because we duplicate the image set 4 times (total 400% width)
  // This ensures a seamless loop.
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Dynamic speed change based on scroll velocity
    // This makes the scroll "feel" the user's interaction without distorting the layout
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Add velocity to movement (acceleration)
    moveBy += directionFactor.current * moveBy * Math.abs(velocityFactor.get());

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div 
        className="flex flex-nowrap gap-6" 
        style={{ x }}
      >
        {/* Render 4 copies to ensure smooth infinite loop on large screens */}
        {[...images, ...images, ...images, ...images].map((src, i) => (
           <div 
             key={i} 
             className="relative w-[300px] h-[200px] md:w-[450px] md:h-[300px] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer group shadow-lg"
           >
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
             <img 
               src={src} 
               alt={`Portfolio ${i}`} 
               className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
             />
           </div>
        ))}
      </motion.div>
    </div>
  );
};

const InfiniteScroll: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative z-10">
      <div className="mb-8">
        {/* Positive velocity for Left to Right */}
        <ParallaxRow images={imagesRow1} baseVelocity={3} />
      </div>
      
      <div>
        {/* Negative velocity for Right to Left */}
        <ParallaxRow images={imagesRow2} baseVelocity={-3} />
      </div>
    </section>
  );
};

export default InfiniteScroll;