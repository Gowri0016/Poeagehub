import React from 'react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">🛒 Your Smart Cart</h2>
      <p className="text-center text-sm text-gray-600 mb-8">
        🤖 AI is analyzing your cart for smart savings & recommendations.
      </p>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7621877-6134101.png"
            alt="Empty Cart"
            className="w-72 h-auto mb-6"
          />
          <p className="text-lg text-gray-600 mb-4">Oops! Your cart is empty. Start shopping now!</p>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
          >
            🛍️ Explore Deals
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="grid gap-6 max-w-5xl mx-auto">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                {/* Image */}
                <div className="w-full sm:w-32 h-32 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image || "https://via.placeholder.com/120x120?text=No+Image"}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description || 'No description available.'}</p>
                  <p className="text-sm text-green-600 mt-1">✅ Free AI Delivery: Tomorrow</p>

                  <div className="flex items-center mt-2 gap-4">
                    <p className="text-gray-700 font-semibold">
                      ₹ {item.price.toLocaleString()} x {item.quantity || 1}
                    </p>
                    <p className="text-indigo-600 font-medium">
                      = ₹ {(item.price * (item.quantity || 1)).toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="text-sm font-medium">{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      ＋
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 items-end">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    ❌ Remove
                  </button>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    Qty: {item.quantity || 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Smart Suggestion Box */}
          <div className="mt-10 max-w-5xl mx-auto bg-white border border-indigo-100 rounded-lg shadow-sm p-6">
            <h4 className="text-lg font-semibold text-indigo-700 mb-3">💡 AI Smart Recommendations</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Buy <strong>SmartWatch X1</strong> with your phone & save 10% extra.</li>
              <li>Upgrade to Prime delivery at ₹49 only.</li>
              <li>Use <code className="bg-slate-100 px-1 rounded">AI50</code> for 50% off accessories.</li>
            </ul>
          </div>

          {/* Billing Section */}
          <div className="mt-8 max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xl font-semibold text-gray-800">
              Total Amount: ₹ {total.toLocaleString()}
            </p>
            <button
              onClick={() => navigate('/billing')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md transition"
            >
              Proceed to Billing ➡️
            </button>
          </div>
        </>
      )}
    </div>
  );
}
