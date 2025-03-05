import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Long Range Battery", description: "Go further with our high-capacity battery, ensuring longer drives with fewer charges." },
  { title: "Fast Charging", description: "Charge up to 80% in just 30 minutes with our advanced fast-charging technology." },
  { title: "Smart Connectivity", description: "Stay connected with our in-built AI assistant, real-time GPS, and seamless smartphone integration." },
  { title: "Sustainable & Eco-friendly", description: "Zero emissions and energy-efficient performance for a greener future." },
  { title: "Advanced Safety Features", description: "Equipped with AI-based collision detection, lane assist, and adaptive cruise control for a safer ride." },
  { title: "Futuristic Design", description: "Aerodynamic, sleek, and built for the modern driver." },
];

const FeaturesSection = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      featuresRef.current.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-[#0d0d0d] text-white overflow-hidden">
      <div className="container">
        <h2 className="text-5xl font-extrabold text-green-400 text-center mb-16">Why Choose WBR EV?</h2>
        <div className="row g-4" ref={featuresRef}>
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="feature-card relative group h-100 p-4">
                {/* Background Glow */}
                <div className="glow absolute inset-0 bg-green-500 blur-2xl opacity-10 transition-opacity duration-300 group-hover:opacity-20 rounded-3xl"></div>

                {/* Feature Card */}
                <div className="card-content relative bg-[#1a1a1a] p-4 rounded-3xl shadow-2xl border border-gray-800 hover:border-green-400 transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100 h-100">
                  <div className="flex flex-column align-items-center text-center">
                    <CheckCircle className="text-green-400 w-12 h-12 mb-4 animate-pulse" />
                    <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-20 text-gray-400 text-lg text-center">Use one or all. The future of mobility, powered by WBR.</p><br></br>
      </div>
    </section>
  );
};

export default FeaturesSection;