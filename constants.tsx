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
  { id: 1, category: 'wedding', imageUrl: 'https://picsum.photos/800/1200?random=1', title: 'Traditional Vows' },
  { id: 2, category: 'pre-wedding', imageUrl: 'https://picsum.photos/800/1200?random=2', title: 'Sunset Love' },
  { id: 3, category: 'wedding', imageUrl: 'https://picsum.photos/800/600?random=3', title: 'The Haldi' },
  { id: 4, category: 'films', imageUrl: 'https://picsum.photos/800/1200?random=4', title: 'Cinematic Stills' },
  { id: 5, category: 'pre-wedding', imageUrl: 'https://picsum.photos/800/800?random=5', title: 'Urban Romance' },
  { id: 6, category: 'wedding', imageUrl: 'https://picsum.photos/800/1200?random=6', title: 'Bridal Portrait' },
  { id: 7, category: 'wedding', imageUrl: 'https://picsum.photos/800/600?random=7', title: 'The Mandap' },
  { id: 8, category: 'pre-wedding', imageUrl: 'https://picsum.photos/800/1200?random=8', title: 'Nature Walk' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 1, name: "Aditi & Rahul", role: "Wedding in Bangalore", text: "Kiru and his team were invisible yet everywhere. The photos are not just pictures, they are memories we will cherish forever. The colors are so vibrant!" },
  { id: 2, name: "Sneha & Vikram", role: "Destination Wedding", text: "The cinematic film still makes us cry happy tears. Professional, punctual, and incredibly talented with their Sony gear." },
  { id: 3, name: "Priya & Karthik", role: "Pre-Wedding Shoot", text: "We are camera shy, but Kiru made us feel so comfortable. The results were natural and absolutely stunning." }
];