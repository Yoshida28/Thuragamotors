import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    image: require("../assets/BWR-Prod.768.3.png"), 
    specs: {
      Model: "X100",
      Speed: "120 km/h",
      Range: "300 km",
      Battery: "80 kWh",
    },
  },
  {
    image: require("../assets/BWR-Prod.768.5.png"),
    specs: {
      Model: "Y200",
      Speed: "140 km/h",
      Range: "350 km",
      Battery: "85 kWh",
    },
  },
  {
    image: require("../assets/BWR-Prod.789.4.png"),
    specs: {
      Model: "Z300",
      Speed: "160 km/h",
      Range: "400 km",
      Battery: "90 kWh",
    },
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <div className="container-fluid min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="row w-100">
        {/* Image Section */}
        <div className="col-md-5 bg-black text-white p-4 rounded-end d-flex flex-column justify-content-center">
          <Slider {...settings} className="w-100">
            {carouselData.map((item, index) => (
              <div key={index} className="d-flex justify-content-center align-items-center p-4 relative">
                {/* Opacity Background */}
                <div className="absolute inset-0 bg-black opacity-50 rounded"></div>
                <img src={item.image} alt="Product" className="img-fluid rounded relative z-10" />
              </div>
            ))}
          </Slider>
        </div>
        {/* Spec Sheet Section */} 
        <div className="col-md-7 bg-black text-white p-4 rounded-end d-flex flex-column justify-content-center">
          <h2 className="text-xl font-bold mb-4 text-center">Specifications</h2>
          {Object.entries(carouselData[activeIndex].specs).map(([key, value]) => (
            <p key={key} className="text-lg text-center">
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
