import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuresList = [
  { title: "Battery Technology", description: "Advanced lithium-ion battery with fast charging.", icon: "🔋" },
  { title: "Smart Connectivity", description: "Seamless app integration for real-time updates.", icon: "📱" },
  { title: "Regenerative Braking", description: "Converts braking energy into battery power.", icon: "⚡" },
  { title: "Eco-Friendly Build", description: "Sustainable materials with a sleek design.", icon: "🌱" },
];

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.from(".feature-card", {
      opacity: .7,
      fillOpacity:1,
      duration: 1,
      y: 20,
      scale: 0.9,
      stagger: 0.2,
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section id="features" className="features-section" ref={featuresRef}>
      <h2 className="features-title">Top Features</h2>
      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <div className={`feature-card feature-${index}`} key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
