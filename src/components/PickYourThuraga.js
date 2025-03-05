import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const scooters = [
    {
        name: "Thuraga Alpha",
        price: "₹99,999",
        flexiPay: "₹2,199/month",
        image: require("../assets/BWR-Prod.785.6.png"),
    },
    {
        name: "Thuraga S",
        price: "₹1,19,999",
        flexiPay: "₹2,475/month",
        image: require("../assets/BWR-Prod.789.5.png"),
    },
    {
        name: "Thuraga X",
        price: "₹1,46,999",
        flexiPay: "₹2,789/month",
        image: require("../assets/BWR-Prod.786.2.png"),
    },
    {
        name: "Thuraga Apex",
        price: "₹1,99,999",
        flexiPay: "₹3,439/month",
        image: require("../assets/BWR-Prod.776.2.png"),
    },
];

const PickYourThuraga = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % scooters.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className=" min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container-fluid text-center p-4 rounded shadow " style={{ maxWidth: "1200px" }}>
                <h2 className="display-3 font-weight-bold text-success mb-4">
                    Pick Your Thuraga
                </h2>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="p-3"
                >
                    <h3 className="h2 mb-3">{scooters[currentIndex].name}</h3>
                    <p className="lead mb-2">
                        Starting at <span className="font-weight-bold">{scooters[currentIndex].price}</span>
                    </p>
                    <p className="text mb-4">
                        Or FlexiPay <span className="text-success font-weight-semibold">{scooters[currentIndex].flexiPay}</span>
                    </p>
                    <motion.img
                        key={scooters[currentIndex].image}
                        src={scooters[currentIndex].image}
                        alt={scooters[currentIndex].name}
                        className="img-fluid rounded shadow mb-4"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success btn-lg px-5 py-3">
                            Learn More
                        </button>
                    </div>
                </motion.div>
                <div className="d-flex justify-content-center mt-4">
                    {scooters.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-circle mx-2 cursor-pointer`}
                            style={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: index === currentIndex ? "#28a745" : "#ccc",
                            }}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentIndex(index)}
                        ></motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PickYourThuraga;