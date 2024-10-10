import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Array of real food images from Pexels
const foodImages = [
  'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=800', // Pasta
  'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800', // Salad
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', // Burger
  'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800', // Pizza
  'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800', // Sushi
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000, // Slide in from right or left
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0, // Centered
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000, // Slide out to right or left
    opacity: 0,
  }),
};

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + foodImages.length) % foodImages.length);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-96 overflow-hidden bg-gray-100 rounded-lg shadow-xl">
      <div className="w-full h-full overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={foodImages[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Prev Button */}
      <button
        className="absolute left-4 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-200 transition duration-300"
        onClick={prevSlide}
      >
        <FaArrowLeft className="text-2xl" />
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-200 transition duration-300"
        onClick={nextSlide}
      >
        <FaArrowRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Banner;
