// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Recycle, ShoppingBag, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#intro", label: "Home" },
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#benefits", label: "Benefits" },
    { href: "#cta", label: "Shop" },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      navRef.current.querySelectorAll("li"),
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    );

    gsap.to(headerRef.current, {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 6px 30px rgba(0,0,0,0.1)",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center space-x-3 cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow">
              <Recycle className="text-white w-3 h-3" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              AquaPure
            </h1>
            <p className="text-xs text-gray-600 font-medium">Eco Hydration</p>
          </div>
        </div>

        {/* Desktop Navigation */}
     

        <nav ref={navRef} className="hidden md:flex items-center">
  <ul className="flex items-center space-x-12">
    {navItems.map((item, index) => (
      <li key={index}>
        <a
          href={item.href}
          className="px-2 py-1 text-gray-700 hover:text-green-500 font-medium transition-colors duration-300 relative group"
        >
          {item.label}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      </li>
    ))}
  </ul>

  {/* CTA Button */}
  <div className="ml-12">
    <button className="btn-glow bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
      <ShoppingBag className="w-4 h-4" />
      <span>Pre-order</span>
    </button>
  </div>
</nav>
   {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-2xl rounded-b-2xl`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-6">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="block text-lg text-gray-700 hover:text-green-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full btn-glow bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Pre-order Now</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
