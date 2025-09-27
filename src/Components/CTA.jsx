// src/components/CTA.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Truck, Shield, Award, Star, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const featuresRef = useRef(null);
  const countdownRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 30
  });

  useEffect(() => {
    // Background animation
    gsap.to(sectionRef.current, {
      background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
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

    // Button animation
    gsap.fromTo(buttonRef.current, 
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
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

    // Countdown animation
    gsap.fromTo(countdownRef.current, 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: countdownRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Continuous button pulse
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Truck, text: "Free Worldwide Shipping", color: "text-blue-300" },
    { icon: Shield, text: "2-Year Warranty", color: "text-green-300" },
    { icon: Award, text: "30-Day Money Back", color: "text-yellow-300" },
  ];

  const pricingOptions = [
    {
      name: "Single Bottle",
      price: "$29.99",
      original: "$39.99",
      popular: false,
      features: ["500ml Capacity", "3 Color Options", "Free Shipping"]
    },
    {
      name: "Duo Pack",
      price: "$49.99",
      original: "$69.99",
      popular: true,
      features: ["2 x 500ml Bottles", "6 Color Options", "Free Shipping", "Free Carrying Case"]
    },
    {
      name: "Family Pack",
      price: "$89.99",
      original: "$129.99",
      popular: false,
      features: ["4 x 500ml Bottles", "All Color Options", "Free Shipping", "2 Carrying Cases", "Extra Lids"]
    }
  ];

  return (
    <section 
      id="cta"
      ref={sectionRef}
      className="section bg-gradient-to-br from-green-400 via-green-500 to-teal-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1 bg-white opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Countdown Timer */}
        <div className="container mx-auto px-6 relative z-10 py-20">
  {/* Countdown Timer */}
  <div ref={countdownRef} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center mb-8 max-w-md mx-auto shadow-2xl">
    <div className="text-gray-800 font-semibold mb-2">🚀 Limited Time Offer</div>
    <div className="flex justify-center space-x-4 text-2xl font-bold text-gray-800">
      <div className="flex flex-col items-center">
        <span className="bg-white bg-opacity-30 text-gray-900 px-3 py-1 rounded-lg">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span className="text-sm mt-1 text-gray-700">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-white bg-opacity-30 text-gray-900 px-3 py-1 rounded-lg">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span className="text-sm mt-1 text-gray-700">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-white bg-opacity-30 text-gray-900 px-3 py-1 rounded-lg">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <span className="text-sm mt-1 text-gray-700">Seconds</span>
      </div>
    </div>
  </div>
</div>


        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-white text-glow">
            Join the <span className="text-yellow-300">Revolution</span>
          </h2>
          <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Be part of the movement towards a sustainable future. Every AquaPure bottle purchased 
            helps reduce plastic waste and protect our beautiful planet.
          </p>
        </div>

        {/* Pricing Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pricingOptions.map((option, index) => (
            <div key={index} className={`bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 ${
              option.popular ? 'ring-4 ring-yellow-400 relative' : ''
            }`}>
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full font-bold text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{option.name}</h3>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-600">{option.price}</div>
                <div className="text-lg text-gray-500 line-through">{option.original}</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Main CTA Button */}
        <div className="text-center mb-12">
          <button 
            ref={buttonRef}
            className="btn-glow bg-white text-green-600 text-2xl font-bold py-6 px-16 rounded-2xl hover:bg-green-50 transition-all duration-300 inline-flex items-center space-x-4 shadow-2xl"
          >
            <ShoppingBag className="w-8 h-8" />
            <span>Get Your AquaPure Now - Save 25%</span>
            <Star className="w-6 h-6 text-yellow-500" />
          </button>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
  {features.map((feature, index) => (
    <div
      key={index}
      className="feature-item flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-lg px-6 py-3 rounded-full"
    >
      <feature.icon className={`w-6 h-6 ${feature.color}`} />
      <span className="text-gray-800 font-semibold">{feature.text}</span>
    </div>
  ))}
</div>

{/* Social Proof */}
<div className="text-center mt-12">
  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
    <div className="flex justify-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 text-lg">
      <span className="font-bold text-gray-800">10,000+</span> satisfied customers worldwide 
      have already joined the AquaPure movement
    </p>
  </div>
</div>
        </div>
    </section>
  );
};

export default CTA;