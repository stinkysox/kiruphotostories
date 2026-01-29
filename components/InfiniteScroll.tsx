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
  "https://i.postimg.cc/wTnW2LjY/IMG-3789-JPG.jpg",
  "https://i.postimg.cc/y89LbxDB/IMG-3795-JPG.jpg",
  "https://i.postimg.cc/dthHG4vB/IMG-3796-JPG.jpg",
  "https://i.postimg.cc/XYFszqr0/IMG-3800-JPG.jpg",
  "https://i.postimg.cc/nh73PrX8/IMG-5485-JPG.jpg",
];

const imagesRow2 = [
  "https://i.postimg.cc/xTBs5M1D/IMG-6375-JPG.jpg",
  "https://i.postimg.cc/fT1HCmTf/IMG-6667-JPG.jpg",
  "https://i.postimg.cc/Qxv6m1xk/IMG-6672-JPG.jpg",
  "https://i.postimg.cc/sDbnm7Dc/IMG-7800-JPG.jpg",
  "https://i.postimg.cc/CxyNk0ms/IMG-3698-JPG-(1).jpg",
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

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Dynamic speed change based on scroll velocity
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
        className="flex flex-nowrap gap-8" 
        style={{ x }}
      >
        {/* Render 4 copies to ensure smooth infinite loop on large screens */}
        {[...images, ...images, ...images, ...images].map((src, i) => (
           <div 
             key={i} 
             className="relative w-[400px] h-[300px] md:w-[600px] md:h-[450px] flex-shrink-0 rounded-lg overflow-hidden"
           >
             <img 
               src={src} 
               alt={`Portfolio ${i}`} 
               className="w-full h-full object-cover" 
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
        <ParallaxRow images={imagesRow1} baseVelocity={2} />
      </div>
      
      <div>
        <ParallaxRow images={imagesRow2} baseVelocity={-2} />
      </div>
    </section>
  );
};

export default InfiniteScroll;