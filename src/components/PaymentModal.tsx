import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPaymentComplete: () => void;
    total: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onPaymentComplete, total }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3001/api/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber, amount: total })
            });

            const result = await response.json();

            if (result.success) {
                alert("Payment request sent to your phone.");
                onPaymentComplete();
            } else {
                alert("Payment initiation failed.");
            }
        } catch (error) {
            console.error("Payment error:", error);
            alert("Error initiating payment.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-600">Payment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition duration-300">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Payment Method</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition duration-300"
                        >
                            <option value="">Select a payment method</option>
                            <option value="mpesa">M-Pesa</option>
                            <option value="airtel">Airtel Money</option>
                            <option value="tkash">T-Kash</option>
                            <option value="bankcard">Bank-Card</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition duration-300"
                            placeholder="e.g., 0712345678"
                        />
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                        Total: {total} Ksh
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
                        disabled={isLoading}
                    >
                        {isLoading ? "Processing..." : "Pay Now"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentModal;
