// src/components/Problem.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, Fish, Recycle, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const pollutionRef = useRef(null);

  useEffect(() => {
    // Background darkening effect
    gsap.to(sectionRef.current, {
      backgroundColor: "#1a202c",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true
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

    // Content animation
    gsap.fromTo(contentRef.current, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats animation
    gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'), 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Pollution elements animation
    gsap.fromTo(pollutionRef.current.querySelectorAll('.pollution-element'), 
      { opacity: 0, scale: 0 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: pollutionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating trash animation
    const trashElements = pollutionRef.current?.querySelectorAll('.floating-trash');
    trashElements.forEach((element, index) => {
      gsap.to(element, {
        y: -20,
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  const stats = [
    { icon: Factory, value: "8 Million", label: "Tons of plastic in oceans yearly", color: "red" },
    { icon: Fish, value: "100,000", label: "Marine animals killed annually", color: "blue" },
    { icon: Recycle, value: "9%", label: "Of plastic gets recycled", color: "green" },
    { icon: Clock, value: "450 Years", label: "To decompose a bottle", color: "yellow" },
  ];

  const pollutionFacts = [
    { icon: AlertTriangle, text: "Plastic bottles take centuries to decompose", severity: "high" },
    { icon: TrendingUp, text: "Plastic production has doubled in 20 years", severity: "medium" },
    { icon: Factory, text: "Microplastics are found in our food chain", severity: "high" },
  ];

  return (
    <section 
      id="problem"
      ref={sectionRef}
      className="section bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="parallax-bg absolute inset-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1573459785825-3c33aa30c0c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        opacity: 0.4
      }}></div>

      {/* Floating trash elements - BEHIND content */}
      <div ref={pollutionRef} className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className={`floating-trash pollution-element absolute text-2xl opacity-40 ${
              i % 3 === 0 ? 'text-red-400' : 
              i % 3 === 1 ? 'text-yellow-400' : 'text-blue-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 0
            }}
          >
            {i % 3 === 0 ? '🥤' : i % 3 === 1 ? '🍃' : '💧'}
          </div>
        ))}
      </div>

      {/* Content container with higher z-index */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16 relative z-20">
          <div className="inline-flex items-center space-x-3 bg-red-500 bg-opacity-20 px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <span className="text-red-200 font-semibold">Critical Issue</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-glow">
            The Plastic <span className="text-red-400">Crisis</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our planet is drowning in plastic waste, and single-use bottles are a major contributor 
            to this environmental disaster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-20">
          {/* Content */}
          <div ref={contentRef}>
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-700 relative z-20">
              <h3 className="text-3xl font-bold mb-6 text-red-300">The Harsh Reality</h3>
              
              <div className="space-y-6">
                {pollutionFacts.map((fact, index) => (
                  <div key={index} className="flex items-start space-x-4 relative z-20">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      fact.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                    } bg-opacity-20 flex-shrink-0`}>
                      <fact.icon className={`w-6 h-6 ${
                        fact.severity === 'high' ? 'text-red-400' : 'text-yellow-400'
                      }`} />
                    </div>
                    <p className="text-lg text-gray-200 leading-relaxed">{fact.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-500 bg-opacity-10 rounded-xl border border-red-500 border-opacity-30">
                <p className="text-red-200 text-center font-medium">
                  💡 Every minute, one million plastic bottles are purchased worldwide. 
                  Most end up in landfills or oceans.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-20">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 relative z-20">
                <div className={`w-16 h-16 rounded-full bg-${stat.color}-500 bg-opacity-20 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-300 mb-2`}>{stat.value}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 relative z-20">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 border border-red-500 border-opacity-30 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-white">But There's Hope</h4>
            <p className="text-gray-200 text-lg mb-6">
              By choosing reusable alternatives like AquaPure, we can significantly reduce 
              plastic waste and protect our planet for future generations.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Discover the Solution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;