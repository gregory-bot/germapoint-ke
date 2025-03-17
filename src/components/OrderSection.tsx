import React, { useState } from 'react';
import { X } from 'lucide-react';
import PaymentModal from './PaymentModal';

interface OrderSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderSection: React.FC<OrderSectionProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically calculate the order total based on cart items
    const calculatedTotal = 1500; // Example total
    setOrderTotal(calculatedTotal);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentComplete = () => {
    // Here you would typically send the order to a backend service
    console.log('Order submitted:', { name, address, phone, total: orderTotal });
    alert('Thank you for your order! Payment successful.');
    setIsPaymentModalOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black-600">Place Your Order</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition duration-300">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition duration-300"
            ></textarea>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition duration-300"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 transform hover:scale-105">
            Proceed to Payment
          </button>
        </form>
      </div>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onPaymentComplete={handlePaymentComplete}
        total={orderTotal}
      />
    </div>
  );
};

export default OrderSection;