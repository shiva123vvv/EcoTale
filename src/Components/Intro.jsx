// Intro.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bottleImg from "../assets/bottle.webp"

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title fade in
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Subtitle slide up
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Bottle fade + parallax tilt
      gsap.fromTo(
        bottleRef.current,
        { opacity: 0, scale: 0.9, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          delay: 0.8,
          ease: "elastic.out(1, 0.5)",
        }
      );

      // Scroll-trigger subtle bottle float
      gsap.to(bottleRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={introRef}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-white text-center overflow-hidden"
    >
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-extrabold text-green-800"
      >
        Eco-Friendly Water Bottle
      </h1>
      <p
        ref={subtitleRef}
        className="mt-6 text-lg md:text-2xl text-gray-700 max-w-2xl"
      >
        Hydrate smart. Save the planet. One sip at a time.
      </p>

      <div className="mt-10">
        <img
          ref={bottleRef}
          src={bottleImg}
          alt="Eco Bottle"
          className="w-56 md:w-72 drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Intro;
