import React, { useState, useEffect } from 'react';

const images = [
  "/src/about1.jpeg",
  "https://images.pexels.com/photos/2529468/pexels-photo-2529468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "/src/about3.jpeg",
];

const AboutSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="about" className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-600">About German Point</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-64 md:h-96 w-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`German Point Restaurant ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <p className="text-base md:text-lg mb-4">
              German Point has been serving authentic German cuisine since 1999. Our passion for traditional recipes and high-quality ingredients has made us a favorite among locals and tourists alike.
            </p>
            <p className="text-base md:text-lg mb-4">
              Our chefs blend classic German flavors with modern culinary techniques to create dishes that are both familiar and exciting. From hearty sausages to delicate pastries, we offer a taste of Germany right here in the heart of the city.
            </p>
            <p className="text-base md:text-lg">
              Join us for a meal and experience the warmth of German hospitality and the rich flavors of our cuisine. Prost!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;