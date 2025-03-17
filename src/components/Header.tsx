import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, setIsCartOpen, cartItemsCount }) => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://i.postimg.cc/HxfZNvVV/logo-2.jpg" alt="German Point Logo" className="h-12 w-auto mr-2" />
          <h1 className="text-2xl text-red-600">German Point</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-black-600 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#about" className="text-black-600 hover:text-blue-600 transition duration-300">About</a>
          <a href="#menu" className="text-black-600 hover:text-blue-600 transition duration-300">Menu</a>
          <a href="#contact" className="text-black-600 hover:text-blue-600 transition duration-300">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsCartOpen(true)} className="text-gray-600 hover:text-red-600 transition duration-300 relative">
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-red-600 transition duration-300">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;