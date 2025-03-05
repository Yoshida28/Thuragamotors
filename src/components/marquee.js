import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const companies = [
  { name: "Tesla", description: "Leading the EV revolution", logo: "⚡" },
  { name: "Rivian", description: "Adventure-focused EVs", logo: "🌲" },
  { name: "Lucid", description: "Luxury electric performance", logo: "🚀" },
  { name: "NIO", description: "Smart and sustainable driving", logo: "🔋" },
  { name: "BYD", description: "Innovating green mobility", logo: "🌍" },
];

const EVShowcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(".fade-in", {
      opacity: .7,
      y: 50,
      duration: .3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="ev-container" ref={containerRef}>
      <section className="hero-section fade-in">
        <p className="sub-title">CUSTOMER STORIES</p>
        <h1>
          <strong>Innovation</strong> in EV Technology<br />for a Sustainable Future.
        </h1>
        <p className="description">Explore how top EV brands are revolutionizing the industry.</p>
      </section>
      <br></br><br/><br/>

      <div className="ev-grid">
        {companies.map((company, index) => (
          <div className="ev-card fade-in" key={index}>
            <span className="ev-icon">{company.logo}</span>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
<br></br><br/><br/>
      <Marquee gradient={false} speed={50} className="marquee-container">
        {companies.map((company, index) => (
          <div className="marquee-card" key={index}>
            <span className="ev-icon">{company.logo}</span>
            <h3>{company.name}</h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default EVShowcase;
