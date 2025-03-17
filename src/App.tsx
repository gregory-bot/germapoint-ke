import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import Cart from './components/Cart';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderSectionOpen, setIsOrderSectionOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Smooth scroll to section
  const handleLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  const updateQuantity = (itemName: string, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderSectionOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsCartOpen={setIsCartOpen}
        cartItemsCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />
      <Hero />
      <MenuSection addToCart={addToCart} />
      <AboutSection />
      <OrderSection isOpen={isOrderSectionOpen} onClose={() => setIsOrderSectionOpen(false)} />
      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        removeItem={removeFromCart}
        updateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-blue-300 h-full w-[250px] p-5 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mb-5 text-white hover:text-blue-800 transition duration-300"
          >
            <X className="h-6 w-6" />
          </button>
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  onClick={() => handleLinkClick('home')}
                  className="text-white hover:text-blue-800 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handleLinkClick('about')}
                  className="text-white hover:text-blue-800 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={() => handleLinkClick('menu')}
                  className="text-white hover:text-blue-800 transition duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleLinkClick('contact')}
                  className="text-white hover:text-blue-800 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;