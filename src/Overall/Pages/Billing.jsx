import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Billing() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.streetAddress) newErrors.streetAddress = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setOrderSuccess(true);

      // Auto redirect to home after 3.5s
      setTimeout(() => {
        navigate('/');
      }, 3500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Success Modal */}
      <AnimatePresence>
        {orderSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-green-400 shadow-2xl rounded-xl p-6 w-full max-w-md text-center"
          >
            <motion.h3 className="text-2xl font-bold text-green-600 mb-2">
              🎉 Order Placed Successfully!
            </motion.h3>
            <p className="text-gray-600">You will be redirected to the home page shortly.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Billing Form */}
      <div className="rounded-2xl p-8 md:flex gap-8 max-w-5xl w-full bg-white shadow-xl">
        <div className="flex-1">
          <h2 className="text-3xl font mb-6">Billing Details</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className="w-full border rounded-md p-2"
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address*"
                className="w-full border rounded-md p-2"
                onChange={handleChange}
              />
              {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress}</p>}
            </div>

            <input
              type="text"
              name="apartment"
              placeholder="Apartment, floor, etc. (optional)"
              className="w-full border rounded-md p-2"
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City*"
              className="w-full border rounded-md p-2"
              onChange={handleChange}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              className="w-full border rounded-md p-2"
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              className="w-full border rounded-md p-2"
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </form>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>₹0</span>
            </div>

            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <span>Bank</span>
                <img src="https://img.icons8.com/color/48/visa.png" alt="visa" className="w-6" />
                <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="mastercard" className="w-6" />
              </label>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <span>Cash on delivery</span>
              </label>
            </div>

            <div className="flex mt-4 gap-2">
              <input type="text" placeholder="Coupon Code" className="border rounded-md p-2 flex-1" />
              <button type="button" className="bg-gradient-to-r to-black from-blue-500/85 text-white p-2 rounded-md hover:bg-blue-900 transition-colors">Apply Coupon</button>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r to-black from-blue-500/85 text-white p-2 rounded-md w-full hover:bg-blue-900 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
