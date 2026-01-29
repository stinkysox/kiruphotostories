import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix?: string;
}

export interface GalleryItem {
  id: number;
  category: 'wedding' | 'pre-wedding' | 'engagement' | 'maternity' | 'all';
  imageUrl: string;
  title: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
}