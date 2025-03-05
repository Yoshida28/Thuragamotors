import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  require("../assets/BWR-Prod.786.7.png"),
  require("../assets/BWR-Prod.783.4.png"),
  require("../assets/BWR-Prod.781.3.png"),
  require("../assets/BWR-Prod.786.6.png"),
];

const Home = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } }, // Increased particle count
      color: { value: "#2ecc71" },
      shape: { type: "circle" },
      opacity: { value: 0.6, random: true }, // Slightly reduced opacity
      size: { value: 1.5, random: true }, // Reduced size for more particles
      move: { enable: true, speed: 1, direction: "none", outModes: "out" }, // Reduced speed
      links: {
        enable: true,
        distance: 80, // Reduced link distance
        color: "#90ee90",
        opacity: 0.4, // Reduced link opacity
        width: 0.5, // Reduced link width
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 100 },
        push: { quantity: 1 },
      },
    },
    detectRetina: true,
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 20px rgba(46, 204, 113, 0.7)",
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      id="home"
      className="vh-100 vw-100 d-flex flex-column text-white position-relative"
      style={{ overflow: "hidden" }}
    >
      <Particles init={particlesInit} options={particlesOptions} />

      <div
        className="col-12 h-100 d-flex flex-column justify-content-center align-items-center position-relative z-2"
        style={{padding:"0 20px"}}
      >
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center"
        >
          <h1
            className="display-4 fw-bold text-light mb-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: "0px 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Embrace the Electric Revolution
          </h1>
          <p
            className="fs-6 text-light mb-4"
            style={{
              fontFamily: "'Roboto', sans-serif",
              lineHeight: "1.6",
              textShadow: "0px 1px 5px rgba(0, 0, 0, 0.4)",
            }}
          >
            Experience the future of sustainable commuting with our cutting-edge electric bikes.
            Designed for performance, style, and eco-consciousness.
          </p>
          <motion.button
            className="btn btn-lg px-4 py-2"
            style={{
              backgroundColor: "#2ecc71",
              border: "none",
              borderRadius: "25px",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#fff",
              boxShadow: "0px 3px 15px rgba(46, 204, 113, 0.5)",
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Discover Your Ride
          </motion.button>
        </motion.div>
      </div>

      <div
        className="col-12 h-100 position-absolute top-0 start-0 w-100"
        style={{zIndex:"1"}}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={images[activeImage]}
            alt="Eco Bike"
            className="w-100 h-100"
            style={{ objectFit: "cover", position: "absolute", top: 0, left: 0 }}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Home;