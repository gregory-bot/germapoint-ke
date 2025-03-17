import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">German Point</h3>
            <p>Authentic German cuisine foods since 1999</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>123 Restaurant Street, City</p>
            <p>Phone: 0798 363 800</p>
            <p>Email: info@germanpoint.com</p>
            <p>Rosslyn Riviera Mall, Limuru Road<br />
            Nairobi, Kenya</p>
            
            <div style={{ width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', marginTop: '20px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9199496230976!2d36.79675407487849!3d-1.2158976355530395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d5edfa7d25b%3A0x1ac8bb30a1bd6d00!2sGerman%20Point!5e0!3m2!1sen!2ske!4v1729664230851!5m2!1sen!2ske"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">🕒Opening Hours</h3>
            <p>Monday - Friday: 8am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy;2024 German Point. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
