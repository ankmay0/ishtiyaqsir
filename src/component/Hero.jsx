import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import Navbar from './navbar/navbar';

function Hero() {
  const container = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const textGroup = '.js-name, .js-role, .js-dept h2, .js-dept li, .js-email';
      if (prefersReduced) {
        gsap.set(['.js-photo', '.js-linkedin', textGroup], { opacity: 1, clearProps: 'transform' });
        return;
      }
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power1.out' } });
      tl.from('.js-photo', { opacity: 0, y: 8, scale: 0.98 })
        .from('.js-linkedin', { opacity: 0, y: 8 }, '-=0.3')
        .from(textGroup, { opacity: 0, y: 6 }, '-=0.2');
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Fixed navbar at the very top */}
      <div className="fixed top-3 inset-x-0 z-50">
        <Navbar />
      </div>

      <div
        ref={container}
        className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-10 py-20 font-sans md:gap-12"
      >
        {/* Left: Photo + LinkedIn below image */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/BioPic.png"
            alt="Profile"
            className="js-photo rounded-full border border-black shadow-sm w-60 h-60 md:w-60 md:h-60 object-cover"
          />
          {/* LinkedIn button directly below the image, centered */}
          <div className="flex justify-center w-full mt-3">
            <a
              href="https://www.linkedin.com/in/mohammad-ishtiyaq-qureshi-5b40959b/"
              target="_blank"
              rel="noopener noreferrer"
              className="js-linkedin inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white shadow-md ring-2 ring-white/80 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition font-semibold text-base"
              style={{ opacity: 1 }}  // Always visible initially if JS fails
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center items-start max-w-xl">
          <div className="js-name flex items-center mb-1">
            <div className="w-1 h-10 bg-black mr-4 rounded"></div>
            <span className="font-serif text-3xl md:text-4xl font-light text-black tracking-tight">
              Mohammad Ishtiyaq Qureshi
            </span>
          </div>
          <p className="js-role text-gray-800 mb-3 mr-4 text-lg font-medium">
            Research Assistant Professor
          </p>
          <div className="js-dept mb-2">
            <h2 className="text-black font-semibold flex items-center gap-2 mb-1">
              Departments
            </h2>
            <ul className="ml-5 mt-1 space-y-1 text-base">
              <li className="text-black">
                Department of Computational Intelligence
              </li>
              <li className="text-black">
                Faculty of Engineering &amp; Technology, Kattankulathur – Chennai
              </li>
            </ul>
            <div className="js-email flex flex-wrap items-center gap-2 mt-5 text-black">
              <FaEnvelope className="w-4 h-4" />
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:qishtiyaq2402@gmail.com"
                className="underline hover:text-blue-700 transition"
              >
                qishtiyaq2402@gmail.com
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="mailto:mohammaq@srmist.edu.in"
                className="underline hover:text-blue-700 transition"
              >
                mohammaq@srmist.edu.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
