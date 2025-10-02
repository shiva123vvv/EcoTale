// src/components/Footer.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const newsletterRef = useRef(null);

  useEffect(() => {
    // Reset all elements to initial state
    gsap.set(contentRef.current.querySelectorAll('.footer-item'), { 
      opacity: 0, 
      y: 50 
    });

    // Animate footer items on scroll
    gsap.to(contentRef.current.querySelectorAll('.footer-item'), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true
      }
    });

    // Special animation for newsletter section
    gsap.fromTo(newsletterRef.current, 
      { 
        opacity: 0, 
        scale: 0.8,
        y: 30
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true
        }
      }
    );

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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

      <div ref={contentRef} className="container mx-auto px-4 sm:px-6 relative z-10 py-12 lg:py-16">
        {/* Main Footer Content - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section - Full width on mobile, 2 cols on sm, 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2 footer-item">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg mb-3 sm:mb-0">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold gradient-text">AquaPure</h3>
                <p className="text-gray-400 text-sm">Sustainable Hydration</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-center sm:text-left">
              Join us in creating a plastic-free future. Every AquaPure bottle 
              represents a step towards a cleaner, healthier planet for generations to come.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center sm:justify-start space-x-4">
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

          {/* Footer Links - Responsive grid */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-item">
              <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-white text-center sm:text-left">
                {section.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-center sm:text-left">
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {contactInfo.map((contact, index) => (
            <div key={index} className="footer-item flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3 bg-gray-800 bg-opacity-50 rounded-xl p-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 text-sm sm:text-base">{contact.text}</span>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div ref={newsletterRef} className="footer-item bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 sm:p-8 text-center mb-6 sm:mb-8">
          <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white">Stay Updated</h4>
          <p className="text-green-100 mb-4 sm:mb-6 text-sm sm:text-base">
            Get the latest news and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-0 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none placeholder-gray-500 text-sm sm:text-base"
            />
            <button className="bg-green-600 text-white px-4 sm:px-6 py-3 font-semibold hover:bg-green-700 transition-colors duration-300 whitespace-nowrap text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-item border-t border-gray-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2024 AquaPure. Made with ♡ for our planet.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors duration-300 mb-2 sm:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300 mb-2 sm:mb-0">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Floating leaves decoration */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-xl sm:text-2xl opacity-20"
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

      {/* Add CSS animation for floating leaves */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 640px) {
          .grid-cols-1 > * {
            margin-bottom: 1rem;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .sm\:grid-cols-2 > *:nth-child(3),
          .sm\:grid-cols-2 > *:nth-child(4) {
            margin-top: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;