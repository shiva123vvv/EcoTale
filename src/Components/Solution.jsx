// src/components/Solution.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Leaf, Recycle, Zap, Shield, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bottleRef = useRef(null);
  const featuresRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Bottle glow and scale animation
    gsap.to(bottleRef.current, {
      boxShadow: "0 0 60px rgba(72, 187, 120, 0.8)",
      scale: 1.1,
      scrollTrigger: {
        trigger: bottleRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // Title animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Text animation
    gsap.fromTo(textRef.current, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Features animation
    gsap.fromTo(featuresRef.current.querySelectorAll('.feature-item'), 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Continuous bottle floating
    gsap.to(bottleRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const features = [
    {
      icon: Leaf,
      title: "100% Recycled Materials",
      description: "Made from certified recycled stainless steel and bioplastics",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Recycle,
      title: "Fully Recyclable",
      description: "Designed for circular economy - 100% recyclable at end of life",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Smart Temperature",
      description: "Keeps drinks cold for 24h or hot for 12h with vacuum insulation",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Backed by our commitment to quality and sustainability",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const specifications = [
    { label: "Material", value: "Recycled Stainless Steel" },
    { label: "Capacity", value: "500ml / 750ml / 1L" },
    { label: "Weight", value: "380g (1L version)" },
    { label: "Insulation", value: "Double-wall vacuum" },
    { label: "Colors", value: "6 Eco-friendly options" },
    { label: "Certification", value: "BPA Free, FDA Approved" }
  ];

  return (
    <section 
      id="solution"
      ref={sectionRef}
      className="section bg-gradient-to-br from-green-50 via-teal-50 to-blue-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-green-500 bg-opacity-20 px-6 py-3 rounded-full mb-6">
            <Award className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Innovative Solution</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
            Meet <span className="gradient-text">AquaPure</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The eco-friendly water bottle that combines premium performance with sustainable design, 
            helping you make a difference with every sip.
          </p>
        </div>

        {/* Content Section - Equal height and width */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-20">
          {/* Text Content - Now with equal height */}
          <div ref={textRef} className="flex h-full">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white w-full flex flex-col">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Why AquaPure Stands Out</h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed flex-grow">
                In a world overwhelmed by single-use plastics, AquaPure offers a beautiful, 
                functional, and sustainable alternative. Each bottle is crafted with precision 
                and care for both you and the planet.
              </p>

              <div className="space-y-4 mb-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-semibold text-gray-700">{spec.label}:</span>
                    <span className="text-green-600 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-700 text-center font-medium">
                  🌱 Each AquaPure bottle prevents approximately 156 plastic bottles from entering landfills annually.
                </p>
              </div>
            </div>
          </div>

          {/* Bottle Image - Now with equal height container */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full h-full flex items-center justify-center min-h-[500px]">
              <img 
                ref={bottleRef}
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="AquaPure Eco-Friendly Water Bottle"
                className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-2xl transition-all duration-500"
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30 -z-10"></div>

              {/* Eco badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse flex items-center gap-2">
                  <span>♻️</span>
                  ECO FRIENDLY
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-item bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Environmental Impact */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <h4 className="text-2xl font-bold mb-8">Your Environmental Impact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2 text-black">156</div>
              <div className="text-sm text-black">Plastic bottles saved yearly</div>
            </div>
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2 text-black">85%</div>
              <div className="text-sm text-black">Carbon footprint reduced</div>
            </div>
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-6">
              <div className="text-3xl font-bold mb-2 text-black">100%</div>
              <div className="text-sm text-black">Recyclable materials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;