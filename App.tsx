import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfiniteScroll from './components/InfiniteScroll';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Teasers from './components/Teasers';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 antialiased selection:bg-gold-200 selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <InfiniteScroll />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Teasers />
      </main>
      <Contact />
    </div>
  );
};

export default App;