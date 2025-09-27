// src/components/Intro.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Star, Award, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bottleRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Parallax effect for bottle
    tl.to(bottleRef.current, {
      y: -100,
      rotationY: 10,
      ease: "none"
    });

    // Initial animations
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: "power3.out",
        delay: 0.5
      }
    );
    
    gsap.fromTo(subtitleRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power2.out",
        delay: 0.8
      }
    );
    
    gsap.fromTo(bottleRef.current, 
      { opacity: 0, scale: 0.8, rotationY: 180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotationY: 0,
        duration: 2, 
        delay: 0.3, 
        ease: "back.out(1.7)" 
      }
    );

    // Features animation
    gsap.fromTo(featuresRef.current.querySelectorAll('.feature-item'), 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        delay: 1.5,
        ease: "power2.out"
      }
    );

    // Mouse move tilt effect
    const handleMouseMove = (e) => {
      if (!bottleRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10;
      const y = (clientY / window.innerHeight) * 20 - 10;
      
      gsap.to(bottleRef.current, {
        rotationY: x,
        rotationX: -y,
        duration: 0.5
      });
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const features = [
    { icon: Star, text: "Premium Quality", color: "from-yellow-400 to-orange-500" },
    { icon: Award, text: "Award Winning", color: "from-purple-400 to-pink-500" },
    { icon: Zap, text: "24h Cold / 12h Hot", color: "from-blue-400 to-cyan-500" },
  ];

  return (
    <section 
      id="intro"
      ref={sectionRef}
      className="section bg-gradient-to-br from-blue-50 via-green-50 to-teal-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div ref={titleRef} className="mb-6">
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
                  Aqua<span className="gradient-text">Pure</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mt-4 mx-auto lg:mx-0"></div>
              </div>
              
              <div ref={subtitleRef} className="mb-8">
                <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 mb-4">
                  The Future of <span className="text-green-500">Sustainable</span> Hydration
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Experience premium hydration while saving our planet. 
                  AquaPure combines cutting-edge technology with eco-friendly 
                  materials to deliver the perfect water bottle for the conscious consumer.
                </p>
              </div>

              {/* Features */}
              <div ref={featuresRef} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item flex items-center space-x-2 bg-white bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center`}>
                      <feature.icon className="text-white w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-glow bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 group">
                  <span>Shop Now</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
                <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Bottle Image */}
          <div className="lg:w-1/2 flex justify-center perspective-1000">
            <div className="relative">
              <img 
                ref={bottleRef}
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="AquaPure Eco-Friendly Water Bottle"
                className="bottle animate-float w-80 lg:w-96 h-auto drop-shadow-2xl"
              />
              
              {/* Floating elements around bottle */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-sm">-50%</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-ping opacity-20">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ECO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-green-600">
          <span className="text-sm font-medium mb-2">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Intro;