import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import ShoppingCart from '../../Asset/online-shop.png';

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setSuccessMessage('');

    let isValid = true;

    if (emailOrPhone === '') {
      setEmailError('⚠️ Email or phone number is required.');
      isValid = false;
    } else if (
      emailOrPhone.includes('@') && emailOrPhone.includes('.')
    ) {
      // Valid email
    } else if (
      emailOrPhone.length === 10 && !isNaN(emailOrPhone)
    ) {
      // Valid phone
    } else {
      setEmailError('❌ Invalid email or phone number.');
      isValid = false;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password === '') {
      setPasswordError('⚠️ Password is required.');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('❌ Password must be at least 8 characters.');
      isValid = false;
    } else if (!specialCharRegex.test(password)) {
      setPasswordError('❌ Password must include at least one special character.');
      isValid = false;
    }

    if (isValid) {
      setSuccessMessage('✅ Login Successfully!');
    }
  };

  return (
    <div>
      <div className="flex items-center min-h-screen bg-white">
        <img className="w-1/2 hidden md:block" src={ShoppingCart} alt="Shopping Cart" />

        <form
          onSubmit={handleSubmit}
          className="mt-36 rounded-2xl w-full max-w-md mx-auto p-8 grid gap-6 bg-white"
        >
          <h1 className="text-4xl font-semibold text-left mb-2">Log in to PoeageHub</h1>
          <h2 className="text-left font-light mb-6">Enter your details below</h2>

          {successMessage && (
            <p className="text-green-600 text-sm mb-4 font-medium">{successMessage}</p>
          )}

          <div>
            <input
              className={`w-full border-b-2 p-2 text-lg focus:outline-none transition-colors ${
                emailError
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-400 focus:border-blue-600'
              }`}
              type="text"
              placeholder="Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              aria-describedby="email-error"
            />
            {emailError && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {emailError}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              className={`w-full border-b-2 p-2 pr-12 text-lg focus:outline-none transition-colors ${
                passwordError
                  ? 'border-red-500 focus:border-red-600'
                  : 'border-gray-400 focus:border-blue-600'
              }`}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="password-error"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
            {passwordError && (
              <p id="password-error" className="text-red-600 text-sm mt-1">
                {passwordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-black text-white p-3 rounded-md hover:from-blue-700 hover:to-black transition-colors font-semibold"
          >
            Login
          </button>

          <button
            type="button"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  );
}
