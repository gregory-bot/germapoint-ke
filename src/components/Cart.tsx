import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem } from '../App';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  removeItem: (itemName: string) => void;
  updateQuantity: (itemName: string, newQuantity: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, removeItem, updateQuantity, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black-600">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition duration-300">
            <X className="h-6 w-6" />
          </button>
        </div>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.name} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price} Ksh</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.name, Math.max(1, item.quantity - 1))}
                    className="text-red-600 hover:text-red-800 transition duration-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.name, item.quantity + 1)}
                    className="text-red-600 hover:text-red-800 transition duration-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => removeItem(item.name)}
                    className="ml-4 text-red-600 hover:text-red-800 transition duration-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center font-bold">
                <span>Total:</span>
                <span>{total} Ksh</span>
              </div>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;