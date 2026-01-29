import React from 'react';
import { Camera, Heart, Video, Users, Film, Star } from 'lucide-react';
import { ServiceItem, StatItem, GalleryItem, TestimonialItem } from './types';

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/kiru_photostories",
  contact: "7022993500"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Capturing the essence of your big day with a blend of candid emotion and artistic grandeur.",
    icon: <Camera className="w-8 h-8 text-gold-500" />
  },
  {
    id: 2,
    title: "Cinematic Films",
    description: "Storytelling through motion. We create timeless wedding films that feel like cinema.",
    icon: <Video className="w-8 h-8 text-gold-500" />
  },
  {
    id: 3,
    title: "Pre-Wedding Shoots",
    description: "Celebrating your chemistry before the vows in breathtaking locations.",
    icon: <Heart className="w-8 h-8 text-gold-500" />
  }
];

export const STATS: StatItem[] = [
  { id: 1, label: "Weddings Captured", value: 150, suffix: "+" },
  { id: 2, label: "Pre-Wedding Tales", value: 200, suffix: "+" },
  { id: 3, label: "Happy Couples", value: 350, suffix: "+" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Wedding
  { id: 1, category: 'wedding', imageUrl: 'https://i.postimg.cc/sDbnm7Dc/IMG-7800-JPG.jpg', title: 'The Sacred Moment' },
  { id: 2, category: 'wedding', imageUrl: 'https://i.postimg.cc/CxyNk0ms/IMG-3698-JPG-(1).jpg', title: 'Timeless Rituals' },
  { id: 3, category: 'wedding', imageUrl: 'https://i.postimg.cc/8CSymQBt/IMG-3701-JPG.jpg', title: 'Bridal Joy' },
  { id: 4, category: 'wedding', imageUrl: 'https://i.postimg.cc/q7TmxVXm/IMG-3703-JPG.jpg', title: 'The Promise' },
  { id: 5, category: 'wedding', imageUrl: 'https://i.postimg.cc/8CSymQmD/IMG-3705-JPG.jpg', title: 'Golden Hour Vows' },
  { id: 6, category: 'wedding', imageUrl: 'https://i.postimg.cc/QMJf64fL/IMG-3726-JPG.jpg', title: 'Celebration of Love' },
  { id: 7, category: 'wedding', imageUrl: 'https://i.postimg.cc/YSzdXnd4/IMG-3727-JPG.jpg', title: 'Traditional Elegance' },
  { id: 8, category: 'wedding', imageUrl: 'https://i.postimg.cc/Jn7PSNFB/IMG-3739.png', title: 'Candid Smiles' },
  { id: 9, category: 'wedding', imageUrl: 'https://i.postimg.cc/vmt0Pq0Q/IMG-7811-JPG.jpg', title: 'The Walk' },
  { id: 10, category: 'wedding', imageUrl: 'https://i.postimg.cc/PqQS63SJ/IMG-7812-JPG.jpg', title: 'Forever Together' },

  // Pre-Wedding
  { id: 11, category: 'pre-wedding', imageUrl: 'https://i.postimg.cc/wTnW2LjY/IMG-3789-JPG.jpg', title: 'Into the Sunset' },
  { id: 12, category: 'pre-wedding', imageUrl: 'https://i.postimg.cc/y89LbxDB/IMG-3795-JPG.jpg', title: 'Romantic Stroll' },
  { id: 13, category: 'pre-wedding', imageUrl: 'https://i.postimg.cc/dthHG4vB/IMG-3796-JPG.jpg', title: 'Nature Embrace' },
  { id: 14, category: 'pre-wedding', imageUrl: 'https://i.postimg.cc/XYFszqr0/IMG-3800-JPG.jpg', title: 'Cinematic Love' },
  { id: 15, category: 'pre-wedding', imageUrl: 'https://i.postimg.cc/fbCv73bR/IMG-3794-JPG.jpg', title: 'Laughter & Light' },
  { id: 16, category: 'pre-wedding', imageUrl: 'https://i.postimg.cc/tgkzd1gR/IMG-3797-JPG.jpg', title: 'By The Sea' },

  // Maternity
  { id: 17, category: 'maternity', imageUrl: 'https://i.postimg.cc/xTBs5M1D/IMG-6375-JPG.jpg', title: 'Waiting for Miracle' },
  { id: 18, category: 'maternity', imageUrl: 'https://i.postimg.cc/fT1HCmTf/IMG-6667-JPG.jpg', title: 'Motherhood Glow' },
  { id: 19, category: 'maternity', imageUrl: 'https://i.postimg.cc/SRBLQCgc/IMG-6668-JPG.jpg', title: 'New Beginnings' },
  { id: 20, category: 'maternity', imageUrl: 'https://i.postimg.cc/qqPcBymH/IMG-6676-JPG.jpg', title: 'Family Bond' },

  // Engagement
  { id: 21, category: 'engagement', imageUrl: 'https://i.postimg.cc/nh73PrX8/IMG-5485-JPG.jpg', title: 'The Yes Moment' },
  { id: 22, category: 'engagement', imageUrl: 'https://i.postimg.cc/pTy1pQJ7/IMG-4178.jpg', title: 'Ring Exchange' },
  { id: 23, category: 'engagement', imageUrl: 'https://i.postimg.cc/nzMwCK1z/IMG-5486-JPG.jpg', title: 'Joyful Hearts' },
  { id: 24, category: 'engagement', imageUrl: 'https://i.postimg.cc/RFqbN1TZ/IMG-5493.png', title: 'The Proposal' },
  { id: 25, category: 'engagement', imageUrl: 'https://i.postimg.cc/gJrBnyKY/IMG-5502-JPG.jpg', title: 'Promised Forever' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 1, name: "Aditi & Rahul", role: "Wedding in Bangalore", text: "Kiru and his team were invisible yet everywhere. The photos are not just pictures, they are memories we will cherish forever. The colors are so vibrant!" },
  { id: 2, name: "Sneha & Vikram", role: "Destination Wedding", text: "The cinematic film still makes us cry happy tears. Professional, punctual, and incredibly talented with their Sony gear." },
  { id: 3, name: "Priya & Karthik", role: "Pre-Wedding Shoot", text: "We are camera shy, but Kiru made us feel so comfortable. The results were natural and absolutely stunning." }
];