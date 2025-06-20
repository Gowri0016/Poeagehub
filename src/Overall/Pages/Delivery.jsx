import React from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaTruck,
  FaShieldAlt
} from "react-icons/fa";

export default function Delivery() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Address Prompt */}
        <div className="bg-yellow-100 px-6 py-4 flex items-center gap-3 text-sm font-medium text-gray-800 border-b">
          <FaMapMarkerAlt className="text-yellow-600" />
          Delivering to <span className="font-semibold">Chennai - 600001</span>
        </div>

        {/* Header */}
        <div className="px-6 py-8 text-center border-b">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Secure Payment & Delivery</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Choose from flexible payment options and reliable delivery services.
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-3 gap-6 p-6">
          <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <FaCcVisa className="text-blue-600 text-xl" />
              <FaCcMastercard className="text-red-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Credit/Debit Cards</h3>
            <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-1">
              <li>Secure OTP verification</li>
              <li>No hidden charges</li>
              <li>Instant confirmation</li>
            </ul>
          </div>

          <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <FaPaypal className="text-blue-700 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">PayPal</h3>
            <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-1">
              <li>International accepted</li>
              <li>Multi-currency support</li>
              <li>Fast checkout</li>
            </ul>
          </div>

          <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <FaMoneyBillWave className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Cash on Delivery</h3>
            <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-1">
              <li>Pay after delivery</li>
              <li>Popular in rural areas</li>
              <li>No card needed</li>
            </ul>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="border-t px-6 py-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaTruck className="text-blue-600" /> Delivery Options
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-700">Standard Delivery</h4>
              <p className="text-sm text-gray-600">
                Get it by <span className="font-medium text-green-700">Monday, Jun 10</span> • Free for orders above ₹499
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-700">Express Delivery</h4>
              <p className="text-sm text-gray-600">
                Get it by <span className="font-medium text-green-700">Thursday, Jun 6</span> • ₹99 extra
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center gap-3 mt-8 px-6 py-4 bg-green-50 border-t border-b border-green-200 text-green-800 font-medium text-sm">
          <FaShieldAlt className="text-green-700" />
          100% Purchase Protection – Genuine Products & Easy Returns
        </div>

        {/* CTA */}
        <div className="text-center py-10">
          <a
            href="/products"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-10 rounded-full hover:shadow-xl transition"
          >
            Continue to Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
