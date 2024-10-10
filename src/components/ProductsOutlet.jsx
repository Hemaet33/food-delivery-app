import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Leather Handbag',
    price: 150.0,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699.99,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 3,
    name: 'Designer Sunglasses',
    price: 250.0,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 4,
    name: 'Running Shoes',
    price: 120.0,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 5,
    name: 'Wireless Headphones',
    price: 300.0,
    image: 'https://via.placeholder.com/200',
  },
];

const ProductsOutlet = () => {
  return (
    <div className="min-h-screen py-10 px-6" style={{ background: '#f5f5f5' }}>
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        Products Outlet
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-lg text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md flex items-center justify-center shadow-md transition duration-300 ease-in-out">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOutlet;
