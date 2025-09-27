// src/components/Footer.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current.querySelectorAll('.footer-item'), 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Materials", "Colors", "Accessories", "Sustainability"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Mission", "Impact", "Careers", "Press"]
    },
    {
      title: "Support",
      links: ["Help Center", "Shipping", "Returns", "Warranty", "Contact"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const contactInfo = [
    { icon: Mail, text: "community@aquapure.com" },
    { icon: Phone, text: "+91 8673646764" },
    { icon: MapPin, text: "22A MM Hills" }
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div ref={contentRef} className="container mx-auto px-6 relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 footer-item">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">AquaPure</h3>
                <p className="text-gray-400 text-sm">Sustainable Hydration</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Join us in creating a plastic-free future. Every AquaPure bottle 
              represents a step towards a cleaner, healthier planet for generations to come.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-item">
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((contact, index) => (
            <div key={index} className="footer-item flex items-center space-x-3 bg-gray-800 bg-opacity-50 rounded-xl p-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300">{contact.text}</span>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-item bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-center mb-8">
          <h4 className="text-2xl font-bold mb-2 text-white">Stay Updated</h4>
          <p className="text-green-100 mb-4">Get the latest news and exclusive offers</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-2xl border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-r-2xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-item border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 AquaPure. All rights reserved. Made with ♡ for our planet.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>

        {/* Eco Impact Counter */}
        <div className="footer-item mt-8 text-center">
          <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 inline-block">
            <div className="text-2xl font-bold text-green-400 mb-2">1,245,678</div>
            <div className="text-gray-300">Plastic bottles saved by AquaPure community</div>
          </div>
        </div>
      </div>

      {/* Floating leaves decoration */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}%`,
              animation: `float ${6 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            🍃
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;