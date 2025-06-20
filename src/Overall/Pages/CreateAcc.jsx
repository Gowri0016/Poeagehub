import React, { useState } from 'react';
import CreateAccPage from '../../Asset/CreateAccPage.png';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function CreateAcc() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const validateForm = () => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!specialCharRegex.test(password)) {
      newErrors.password = 'Password must include at least one special character';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccessMsg(`✅ Account Created Successfully! Welcome, ${username}`);
        // Reset form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }, 2000);
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-white">
      <img className="w-1/2 hidden md:block" src={CreateAccPage} alt="Create Account" />
      <div className="bg-white p-8 rounded w-full max-w-md mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-left">Create an Account</h2>
        <h1 className="flex text-left font-extra-light mb-6">Enter your details below</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {successMsg && (
            <p className="text-green-600 text-center mb-3 font-semibold">{successMsg}</p>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
              disabled={loading}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
              disabled={loading}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 pr-10"
              disabled={loading}
            />
            <button
              type="button"
              className="absolute right-2 top-2 cursor-pointer text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              title={showPassword ? 'Hide password' : 'Show password'}
              disabled={loading}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 pr-10"
              disabled={loading}
            />
            <button
              type="button"
              className="absolute right-2 top-2 cursor-pointer text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              title={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              disabled={loading}
            >
              {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white p-2 rounded-md transition-colors ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-black hover:bg-red-900'
            }`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          {/* Divider line with "or" */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500 font-semibold">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full border border-black text-black hover:text-white p-2 rounded-md hover:bg-gradient-to-r from-blue-500 to-black transition-colors"
            disabled={loading}
          >
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <h1 className="p-2 font-dark text-center text-xs md:text-sm">
            Already having an account?{' '}
            <a href="/Login" className="underline text-blue-500 hover:text-blue-900">
              Login
            </a>
          </h1>
        </form>
      </div>
    </div>
  );
}