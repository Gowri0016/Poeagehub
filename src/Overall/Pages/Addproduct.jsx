import React, { useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
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
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 129999,
    image: '',
    description: 'Flagship Android phone with 200MP camera and AI features.',
  },
  {
    id: 3,
    name: 'OnePlus 12',
    price: 64999,
    image: '',
    description: 'Sleek design, Snapdragon 8 Gen 3, and fast charging.',
  },
  {
    id: 4,
    name: 'Nothing Phone 2a',
    price: 29999,
    image: '',
    description: 'Unique transparent design with smooth OS.',
  },
   {
    id: 4,
    name: 'Nothing Phone 2a',
    price: 29999,
    image: '',
    description: 'Unique transparent design with smooth OS.',
  },
   {
    id: 4,
    name: 'Nothing Phone 2a',
    price: 29999,
    image: '',
    description: 'Unique transparent design with smooth OS.',
  },
];

export default function Addproduct() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedId, setAddedId] = useState(null); // Track product being added

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);

    // Optional: Navigate to cart
    setTimeout(() => {
      setAddedId(null);
      navigate('/cart');
    }, 1000);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Featured Products</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: product.id * 0.1 }}
            className="relative bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div className="w-full h-48 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
              {product.image ? (
                <img src={product.image} alt={product.name} className="h-full w-full object-cover rounded-xl" />
              ) : (
                <div className="text-gray-400 text-sm italic">No Image Available</div>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-indigo-600 mt-1">₹ {product.price.toLocaleString()}</p>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleAddToCart(product)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition-all ${
                  addedId === product.id ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white`}
              >
                {addedId === product.id ? <CheckCircle className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                {addedId === product.id ? 'Added!' : 'Add to Cart'}
              </button>

              <button
                onClick={() => console.log('Buy now:', product)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition-all"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
