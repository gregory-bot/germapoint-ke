import React, { useState } from 'react';
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

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName: string) => {
    setCart(prevCart => prevCart.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName: string, newQuantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
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
      <AboutSection />
      <MenuSection addToCart={addToCart} />
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
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-64 p-5 transform transition-transform duration-300 ease-in-out">
            <button onClick={() => setIsMenuOpen(false)} className="mb-5">
              <X className="h-6 w-6" />
            </button>
            <nav>
              <ul className="space-y-4">
                <li><a href="#home" className="text-red-600 hover:text-red-800 transition duration-300">Home</a></li>
                <li><a href="#about" className="text-red-600 hover:text-red-800 transition duration-300">About</a></li>
                <li><a href="#menu" className="text-red-600 hover:text-red-800 transition duration-300">Menu</a></li>
                <li><a href="#contact" className="text-red-600 hover:text-red-800 transition duration-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;