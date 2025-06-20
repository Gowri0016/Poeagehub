import React from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅ initialize navigate

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {cart.map((item, index) => (
              <li
                key={index}
                className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₹ {item.price.toLocaleString()} × {item.quantity || 1}
                  </p>
                  <p className="text-sm font-medium text-indigo-600 mt-1">
                    Subtotal: ₹ {(item.price * (item.quantity || 1)).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total + Billing Button */}
          <div className="mt-10 max-w-3xl mx-auto text-right space-y-4">
            <p className="text-xl font-semibold text-gray-800">
              Total: ₹ {total.toLocaleString()}
            </p>

            <button
              onClick={() => navigate('/billing')} // ✅ Navigate to Billing.jsx
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
            >
              Proceed to Billing
            </button>
          </div>
        </>
      )}
    </div>
  );
}
