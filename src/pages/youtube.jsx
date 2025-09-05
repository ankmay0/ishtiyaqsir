import { useEffect, useRef, useState } from 'react';
import Navbar from "../component/navbar/navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Youtube() {
  const [activeVideo, setActiveVideo] = useState(null);
  const videos = [
    {
      id: "8ese3Ko2EJE",
      title: "Blockchains & Differential Privacy",
      description: (
        <>
          The video was recorded for a contest in ISIT 2021 and won an award with
          prize money of USD 300.
          <br /><br />
          In the first part of this video, a brief introduction of blockchains is
          presented (the second part "Differential Privacy" was delivered by another
          presenter). In this, the tamper-evident and tamper-resistant properties of
          blockchains are explained in brief. The properties are explained by taking
          an example of financial transactions. Although the blockchains are
          popularly known because of their use case in financial transactions
          (cryptocurrencies), some other use cases of blockchains are discussed at
          the end of the part of the video.
        </>
      ),
    },
    {
      id: "rZMgYajPa4E",
      title: "On the Information Flow in Undirected Unicast Networks",
      description: (
        <>
          This talk was delivered live in 2021 in an IEEE summer school @ IIT Kanpur.
          <br /><br />
          One of the important unsolved problems in information theory is the conjecture 
          that network coding has no rate benefit over routing in undirected unicast networks. 
          If the conjecture is true, then the undirected unicast network information capacity 
          is the same as the routing capacity. In this talk, we present an upper bound, called 
          the partition bound, on the symmetric rate for information flow in general undirected 
          unicast networks. We show explicit routing solutions achieving the partition bound for 
          a class of complete n-partite networks called Type-I n-partite networks. Recently, the conjecture was proved for a new class of networks, and it was shown that all the network instances for which the conjecture is proved previously are elements of this class. We show the existence of a network outside of the class of networks with unverified conjecture such that the partition bound is tight and attainable by routing.
        </>
      ),
    },
  ];

  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Initial animations
    const ctx = gsap.context(() => {
      // Animate background elements
      gsap.to(".background-circle", {
        y: 30,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 5,
          from: "random"
        }
      });

      // Animate the page title with typewriter effect
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power3.out",
          onStart: () => {
            gsap.to(titleRef.current, {
              text: "Academic Presentations",
              duration: 2,
              ease: "none"
            });
          }
        }
      );

      // Animate section subtitle
      gsap.fromTo(subtitleRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 0.8, 
          duration: 1.2, 
          delay: 0.8, 
          ease: "power2.out" 
        }
      );

      // Animate each video card with staggered timing and 3D effects
      gsap.fromTo(".video-card", 
        { 
          y: 100, 
          opacity: 0,
          rotationX: 15,
          rotationY: 5,
          transformStyle: "preserve-3d"
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          rotationY: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".video-card",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate iframes with a subtle scale effect
      gsap.fromTo(".video-iframe", 
        { scale: 0.9, opacity: 0, filter: "blur(10px)" },
        { 
          scale: 1, 
          opacity: 1, 
          filter: "blur(0px)",
          duration: 1.2, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".video-iframe",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate video info with a fade-in effect
      gsap.fromTo(".video-info", 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".video-info",
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Add hover animations for each card
      videoRefs.current.forEach((card, index) => {
        if (!card) return;
        
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -15,
            rotationY: 2,
            rotationX: 2,
            boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.15)",
            duration: 0.5,
            ease: "power2.out"
          });
          
          // Animate title on hover
          gsap.to(`.video-title-${index}`, {
            letterSpacing: "1px",
            duration: 0.4
          });

          // Animate play button on hover
          gsap.to(`.play-btn-${index}`, {
            scale: 1.1,
            duration: 0.3
          });

          // Animate border on hover
          gsap.to(card, {
            borderColor: "rgba(0, 0, 0, 0.2)",
            duration: 0.4
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            rotationY: 0,
            rotationX: 0,
            boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
            duration: 0.5,
            ease: "power2.out"
          });
          
          // Reset title animation
          gsap.to(`.video-title-${index}`, {
            letterSpacing: "0px",
            duration: 0.4
          });

          // Reset play button animation
          gsap.to(`.play-btn-${index}`, {
            scale: 1,
            duration: 0.3
          });

          // Reset border animation
          gsap.to(card, {
            borderColor: "rgba(0, 0, 0, 0.05)",
            duration: 0.4
          });
        });
      });

      // Add a continuous subtle pulse animation to the play button
      gsap.to(".play-indicator", {
        scale: 1.05,
        opacity: 0.95,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });

      // Animate footer
      gsap.fromTo(footerRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  const playVideo = (id) => {
    setActiveVideo(activeVideo === id ? null : id);
  };

  return (
    <>
      <div className="fixed top-3 inset-x-0 z-50">
        <Navbar />
      </div>
      
      {/* Animated Background Elements */}
      <div className="background-circles">
        <div className="background-circle absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-40"></div>
        <div className="background-circle absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-40"></div>
        <div className="background-circle absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-40"></div>
        <div className="background-circle absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-40"></div>
      </div>
      
      <div 
        ref={containerRef}
        className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white px-6 pt-32 pb-12 overflow-hidden relative"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Page Header - Added more top space here */}
          <div className="text-center mb-12 mt-0">
            <h1 ref={titleRef} className="text-xl md:text-6xl font-bold text-gray-900 mb-4 h-12"></h1>
            <p ref={subtitleRef} className="text-md text-gray-600 max-w-3xl mx-auto">
              A curated collection of research presentations on information theory and blockchain technology
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 gap-16">
            {videos.map((video, index) => (
              <div
                key={video.id}
                ref={addToRefs}
                className="video-card group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 border border-gray-100"
                style={{ perspective: "1200px" }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Video Embed */}
                  <div className="w-full lg:w-2/5 relative aspect-video lg:aspect-auto">
                    <div className="relative h-full cursor-pointer overflow-hidden" onClick={() => playVideo(video.id)}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}${activeVideo === video.id ? '?autoplay=1' : ''}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="video-iframe w-full h-full absolute inset-0"
                      />
                      {activeVideo !== video.id && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="play-indicator bg-white/95 rounded-full p-5 shadow-2xl transform transition-transform duration-300 group-hover:scale-110">
                            <svg className={`w-12 h-12 text-black play-btn-${index}`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="text-xs font-semibold bg-white/90 text-gray-800 px-3 py-1 rounded-full">
                          {index === 0 ? "ISIT 2021" : "IEEE 2021"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="w-full lg:w-3/5 p-8 flex flex-col justify-center video-info">
                    <div className="mb-6">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`video-title video-title-${index} text-2xl lg:text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 mb-3 inline-block`}
                      >
                        {video.title}
                      </a>
                      <div className="flex items-center space-x-3 mt-4">
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                          Academic Talk
                        </span>
                        <span className="text-xs text-gray-500">2021</span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                          </svg>
                          {index === 0 ? "18:30" : "22:15"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-gray-600 leading-relaxed mb-8">
                      {video.description}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-black transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        Watch on YouTube
                      </a>
                      
                      <button
                        onClick={() => playVideo(video.id)}
                        className="px-5 py-2.5 border border-gray-300 text-sm font-semibold rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 flex items-center"
                      >
                        {activeVideo === video.id ? (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                            Pause
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            Play
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div ref={footerRef} className="text-center mt-24 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              More academic presentations and research talks coming soon
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        /* Global styles */
        body {
          overflow-x: hidden;
          color: #000;
          background: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Animation for page entrance */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        body {
          animation: fadeIn 1.2s ease-out;
        }
        
        /* Improve text rendering */
        .video-card {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Subtle glow effect */
        .video-card:hover {
          box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}