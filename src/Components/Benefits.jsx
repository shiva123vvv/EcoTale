// src/components/Benefits.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Briefcase, Mountain, Coffee, Heart, Smile } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const scenesRef = useRef(null);
  const lifestyleRef = useRef(null);

  useEffect(() => {
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

    // Lifestyle scenes animation
    gsap.fromTo(lifestyleRef.current.querySelectorAll('.lifestyle-item'), 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: lifestyleRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Scene cards animation
    gsap.fromTo(scenesRef.current.querySelectorAll('.scene-card'), 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: scenesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for icons
    const icons = lifestyleRef.current?.querySelectorAll('.lifestyle-icon');
    icons?.forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  const lifestyleScenes = [
    {
      icon: Dumbbell,
      title: "Active Lifestyle",
      description: "Perfect for workouts, hiking, and sports activities",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-500 to-cyan-500",
      features: ["Leak-proof design", "Sweat-resistant grip", "Lightweight construction"]
    },
    {
      icon: Briefcase,
      title: "Work & Office",
      description: "Stay hydrated and productive throughout your workday",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-green-500 to-emerald-500",
      features: ["Sleek professional design", "Fits cup holders", "Easy to clean"]
    },
    {
      icon: Mountain,
      title: "Travel & Adventure",
      description: "Your perfect companion for exploring the world",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-orange-500 to-red-500",
      features: ["Durable construction", "Long-lasting insulation", "Travel-friendly size"]
    }
  ];

  const benefits = [
    { icon: Heart, title: "Healthier You", description: "Stay hydrated with BPA-free materials" },
    { icon: Smile, title: "Peace of Mind", description: "Know you're making a positive impact" },
    { icon: Coffee, title: "Save Money", description: "No more buying disposable bottles" }
  ];

  return (
    <section 
      id="benefits"
      ref={sectionRef}
      className="section bg-gradient-to-br from-white via-blue-50 to-green-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
            Live Better with <span className="gradient-text">AquaPure</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover how AquaPure seamlessly integrates into every aspect of your life, 
            enhancing your daily routines while protecting our planet.
          </p>
        </div>

        {/* Lifestyle Scenes */}
        <div ref={scenesRef} className="grid lg:grid-cols-3 gap-8 mb-20">
          {lifestyleScenes.map((scene, index) => (
            <div key={index} className="scene-card group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${scene.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {scene.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${scene.color} rounded-xl flex items-center justify-center`}>
                      <scene.icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{scene.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{scene.description}</p>
                  
                  <ul className="space-y-2">
                    {scene.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${scene.color} rounded-full`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Benefits */}
        <div ref={lifestyleRef} className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-3xl p-12 shadow-2xl mb-12">
  <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-400 drop-shadow-[0_0_10px_rgba(0,0,50,0.7)]">
    Why Choose AquaPure?
  </h3>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {benefits.map((benefit, index) => (
      <div
        key={index}
        className="lifestyle-item bg-gray-900 bg-opacity-60 backdrop-blur-xl rounded-3xl p-8 text-center hover:bg-opacity-80 hover:scale-105 transition-transform duration-500 shadow-xl"
      >
        <div className="lifestyle-icon w-24 h-24 bg-blue-600 bg-opacity-30 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <benefit.icon className="w-12 h-12 text-blue-400 drop-shadow-[0_0_10px_rgba(0,0,80,0.7)]" />
        </div>
        <h4 className="text-2xl md:text-3xl font-bold mb-3 text-blue-300 drop-shadow-[0_0_6px_rgba(0,0,50,0.7)]">
          {benefit.title}
        </h4>
        <p className="text-blue-200 text-base md:text-lg leading-relaxed drop-shadow-[0_0_5px_rgba(0,0,50,0.6)]">
          {benefit.description}
        </p>
      </div>
    ))}
  </div>
</div>



        {/* Testimonial Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white w-8 h-8" />
            </div>
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 italic mb-4 leading-relaxed">
              "AquaPure has completely changed my daily routine. Not only do I feel better staying hydrated, 
              but I also feel good knowing I'm making a positive impact on the environment."
            </blockquote>
            <div className="text-gray-600 font-semibold">- Sarah Johnson, Eco-Enthusiast</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;