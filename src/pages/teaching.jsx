import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../component/navbar/navbar";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Teaching() {
  const teachingPoints = [
    "I have been teaching undergraduate and postgraduate students for several years.",
    "My teaching style focuses on clarity, real-world applications, and interactive learning.",
    "I emphasize conceptual understanding rather than rote memorization.",
    "I integrate research insights into classroom discussions to make learning dynamic.",
    "Students are encouraged to ask questions and engage in collaborative projects.",
    "My goal is to inspire curiosity and critical thinking in every learner.",
  ];

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with a typewriter effect
      gsap.to(titleRef.current, {
        text: "Teaching Philosophy",
        duration: 1.5,
        delay: 0.5,
        ease: "none"
      });

      // Animate each teaching point on scroll
      itemRefs.current.forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            y: 50,
            x: index % 2 === 0 ? -30 : 30
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate the horizontal rule
      gsap.fromTo(".divider", 
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".divider",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="fixed top-3 inset-x-0 z-50">
        <Navbar />
      </div>
      <div className="flex justify-center min-h-screen bg-white px-6 pt-24 pb-16">
        <div className="max-w-4xl w-full text-black" ref={containerRef}>
          <h1 
            ref={titleRef}
            className="text-5xl font-bold text-center mb-16 text-black uppercase tracking-wide"
          ></h1>
          
          <hr className="divider border-t-2 border-gray-300 w-3/4 mx-auto mb-16" />
          
          <div className="space-y-16">
            {teachingPoints.map((point, index) => (
              <div 
                key={index}
                ref={el => itemRefs.current[index] = el}
                className="relative group"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gray-200 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-black font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-xl leading-relaxed text-justify ml-6 text-gray-800 pt-1">
                    {point}
                  </p>
                </div>
                
                {/* Connector line except for last item */}
                {index < teachingPoints.length - 1 && (
                  <div className="absolute left-6 top-12 h-16 w-0.5 bg-gray-300 ml-5 mt-2"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <p className="text-2xl italic text-gray-700 border-t border-gray-300 pt-8">
              "Education is not the filling of a pail, but the lighting of a fire."
            </p>
            <p className="text-lg text-gray-600 mt-4">— William Butler Yeats</p>
          </div>
        </div>
      </div>
    </>
  );
}