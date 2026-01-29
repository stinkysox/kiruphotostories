"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp API
    // Using the provided number: 7022993500 (Adding 91 for India country code)
    const whatsappUrl = `https://wa.me/917022993500?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <div className="mb-10">
              <img 
                src="https://i.postimg.cc/bw8nqw6d/IMG-5406-JPG.jpg" 
                alt="Kiru Photostories Logo" 
                className="h-40 w-auto rounded-2xl shadow-lg object-contain"
              />
            </div>
            <h2 className="text-gold-500 text-sm font-sans tracking-[0.2em] uppercase font-bold mb-3">Get in Touch</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">Let's Create Magic Together</h3>
            <p className="text-gray-600 font-sans leading-relaxed mb-10">
              We are currently accepting bookings for the upcoming wedding season. 
              Please fill out the form or reach out to us directly to discuss your big day.
            </p>

            <div className="space-y-6 font-sans">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-700">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider">Phone / WhatsApp</p>
                  <p className="text-charcoal font-medium text-lg">+91 {SOCIAL_LINKS.contact}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-700">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider">Email</p>
                  <p className="text-charcoal font-medium text-lg">Kiruphotostories1997@gmail.com</p>
                </div>
              </div>
              
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-400 tracking-wider">Studio</p>
                  <p className="text-charcoal font-medium text-lg">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-b-2 border-gray-200 focus:border-gold-500 outline-none py-3 px-4 transition-colors" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white border-b-2 border-gray-200 focus:border-gold-500 outline-none py-3 px-4 transition-colors" 
                    placeholder="Mobile Number" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-white border-b-2 border-gray-200 focus:border-gold-500 outline-none py-3 px-4 transition-colors text-gray-600" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white border-b-2 border-gray-200 focus:border-gold-500 outline-none py-3 px-4 transition-colors" 
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-charcoal text-white py-4 font-sans uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send via WhatsApp <Send size={16} />
              </motion.button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Clicking send will open WhatsApp with your pre-filled message.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-sans uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Kiru Photostories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;