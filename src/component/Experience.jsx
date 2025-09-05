import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    role: "Research Assistant Professor",
    org: "SRM IST Chennai",
    link: "https://www.srmist.edu.in/",
    location: "Chennai, India",
    date: "Jan 2025 – Present",
    desc: "Research Assistant Professor, Full-time.",
    logo: "SRM",
    type: "academia"
  },
  {
    role: "Assistant Professor",
    org: "C. V. Raman Global University",
    link: "https://cgu-odisha.ac.in/",
    location: "Bhubaneswar, India",
    date: "July 2023 – Dec. 2024",
    desc: "Worked as an Assistant Professor in the Department of Computer Science Engineering.",
    logo: "CVR",
    type: "academia"
  },
  {
    role: "Project Associate",
    org: "IIT Mandi",
    link: "https://www.iitmandi.ac.in/",
    location: "Mandi, India",
    date: "July 2021 – April 2023",
    desc: "Worked as a Project Associate at IIT Mandi on research projects.",
    logo: "IIT",
    type: "research"
  },
  {
    role: "Intern",
    org: "IIT Mandi iHub",
    link: "https://ihubiitmandi.in/",
    location: "Mandi, India",
    date: "April 2021 – July 2021",
    desc: "Interned at the IIT Mandi iHub and HCI Foundation.",
    logo: "iHub",
    type: "internship"
  },
  {
    role: "Assistant Professor",
    org: "NRI Institute of Information Science and Technology",
    link: "https://www.nrigroupindia.com/",
    location: "Bhopal, India",
    date: "Aug 2015 – Jan 2016",
    desc: "Gained teaching experience as an Assistant Professor.",
    logo: "NRI",
    type: "academia"
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const logosRef = useRef([]);
  const connectorsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate timeline line growth
      gsap.fromTo(timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5
          }
        }
      );

      // Animate logos with connection effect
      logosRef.current.forEach((logo, i) => {
        if (logo) {
          gsap.fromTo(logo,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: logo,
                start: "top 90%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });

      // Animate connector lines
      connectorsRef.current.forEach((connector, i) => {
        if (connector) {
          gsap.fromTo(connector,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 0.7,
              delay: 0.3 + i * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: connector,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });

      // Animate each experience card
      cardsRef.current.forEach((card, i) => {
        if (card) {
          const direction = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(card,
            { 
              opacity: 0, 
              x: isMobile ? 0 : direction * 40,
              y: isMobile ? 30 : 0 
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              delay: i * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Experience card component
  const ExperienceCard = ({ exp, index, isMobile }) => (
    <div 
      ref={el => cardsRef.current[index] = el}
      className="w-full md:w-[45%] bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-lg border border-gray-200 mb-8 md:mb-0"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md whitespace-nowrap">
          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
        </span>
      </div>
      
      <a
        href={exp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 font-semibold text-lg hover:underline inline-block mb-2 transition-colors duration-200"
      >
        {exp.org}
      </a>
      
      <div className="flex flex-col text-sm text-gray-600 mt-3 mb-4 space-y-2">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>{exp.date}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>{exp.location}</span>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">{exp.desc}</p>
    </div>
  );

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6 font-sans bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 tracking-tight">
          Professional Journey
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full origin-top z-0"
            style={{ top: '1.5rem', bottom: '1.5rem' }}
          ></div>
          
          <div className="space-y-16 relative z-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start justify-center relative">
                {/* Left side card (even indexes on desktop) */}
                {idx % 2 === 0 && !isMobile && (
                  <div className="w-full md:w-5/12 flex justify-end pr-4">
                    <ExperienceCard exp={exp} index={idx} isMobile={isMobile} />
                  </div>
                )}

                {/* Timeline marker with connector - FIXED CONNECTOR POSITIONING */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full md:w-auto">
                  {/* Logo circle */}
                  <div 
                    ref={el => logosRef.current[idx] = el}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 shadow-sm z-10 text-gray-800 font-medium text-sm relative transition-all duration-300 hover:scale-110 hover:border-gray-400 hover:shadow-md"
                  >
                    {exp.logo}
                    
                    {/* Connector line - FIXED POSITIONING */}
                    <div 
                      ref={el => connectorsRef.current[idx] = el}
                      className={`hidden md:block absolute h-0.5 bg-gray-300 w-16 ${idx % 2 === 0 ? 'left-full' : 'right-full'}`}
                    ></div>
                  </div>
                </div>

                {/* Right side card (odd indexes on desktop) */}
                {idx % 2 !== 0 && !isMobile && (
                  <div className="w-full md:w-5/12 flex justify-start pl-4 mt-16 md:mt-0">
                    <ExperienceCard exp={exp} index={idx} isMobile={isMobile} />
                  </div>
                )}

                {/* Mobile card (all cards on mobile) */}
                {isMobile && (
                  <div className="w-full mt-16">
                    <ExperienceCard exp={exp} index={idx} isMobile={isMobile} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}