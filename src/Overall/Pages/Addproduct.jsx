import React, { useState } from 'react';
import { ShoppingCart, CheckCircle, Sparkles, Clock } from 'lucide-react';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../../Dassboard/Dasbord.png';

const products = [
  {
    id: 1,
    name: 'iPhone 16 Pro Max',
    price: 149999,
    image: img1,
    description: 'Apple iPhone 16 Pro Max with A18 chip and titanium frame.',
    aiTag: 'Top Choice',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 129999,
    image: '',
    description: 'Flagship Android phone with 200MP camera and AI features.',
    aiTag: 'AI Recommended',
  },
  {
    id: 3,
    name: 'OnePlus 12',
    price: 64999,
    image: '',
    description: 'Sleek design, Snapdragon 8 Gen 3, and fast charging.',
    aiTag: 'Trending',
  },
  {
    id: 4,
    name: 'Nothing Phone 2a',
    price: 29999,
    image: '',
    description: 'Unique transparent design with smooth OS.',
    aiTag: 'AI Pick',
  },
];

export default function Addproduct() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedId, setAddedId] = useState(null);
  const [recentlyAdded, setRecentlyAdded] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setRecentlyAdded((prev) => {
      const updated = prev.filter((item) => item.id !== product.id);
      return [product, ...updated].slice(0, 6);
    });
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-indigo-50 via-blue-100 to-pink-100 relative overflow-x-hidden">
      {/* Floating Cart Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/cart')}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg transition"
      >
        🛒 View Cart
      </motion.button>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-indigo-800 drop-shadow-md">
          🧠 Smart AI Picks For You
        </h2>
        <p className="text-sm text-gray-600 mt-2 flex items-center justify-center gap-1 italic">
          <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" /> 
          Curated using real-time AI trends
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: [0, 1.5, -1.5, 0] }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
            className="relative bg-white/30 backdrop-blur-lg border border-indigo-200 rounded-3xl shadow-xl p-5 transition-transform flex flex-col"
          >
            {/* AI Tag */}
            {product.aiTag && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full shadow"
              >
                🔍 {product.aiTag}
              </motion.span>
            )}

            {/* Image */}
            <div className="h-44 sm:h-48 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden mb-4">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-xl"
                />
              ) : (
                <span className="text-gray-400 italic text-sm">No Image Available</span>
              )}
            </div>

            {/* Info */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-indigo-600 font-bold text-lg">
                  ₹ {product.price.toLocaleString()}
                </span>
                <span className="text-green-600 text-xs font-semibold">In Stock</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(product)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl font-medium transition ${
                  addedId === product.id
                    ? 'bg-green-600 text-white'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {addedId === product.id ? <CheckCircle className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                {addedId === product.id ? 'Added' : 'Add to Cart'}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => console.log('Buy now:', product)}
                className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white py-2 rounded-xl font-semibold transition"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recently Added */}
      {recentlyAdded.length > 0 && (
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            Recently Added to Cart
          </h3>
          <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide">
            {recentlyAdded.map((item) => (
              <div
                key={item.id}
                className="min-w-[240px] bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex-shrink-0 hover:shadow-xl transition"
              >
                <div className="h-36 w-full bg-gray-100 rounded-md flex items-center justify-center overflow-hidden mb-3">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm italic">No Image</span>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">₹ {item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
