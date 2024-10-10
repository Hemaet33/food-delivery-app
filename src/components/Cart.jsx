import React, { useState } from 'react';
import { FaTrashAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Stylish Jacket',
      size: 'Large',
      color: 'Black',
      price: 120.0,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Smartphone Case',
      size: 'One Size',
      color: 'Red',
      price: 20.0,
      quantity: 3,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 8.0;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl transition-all duration-300 ease-in-out transform max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-[#fec880] tracking-wide">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-2xl font-semibold text-gray-800">
            Your cart is empty.
          </p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-300 pb-6 hover:bg-[#fec880] p-4 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:translate-y-1"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-md shadow-md"
                  />
                  <div className="flex-1 px-4 text-gray-800">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-gray-500">
                      Size: {item.size} | Color: {item.color}
                    </p>
                  </div>
                  <div className="w-32">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, +e.target.value)}
                      className="w-full text-center border rounded-lg p-3 text-lg focus:ring-2 focus:ring-[#fec880]"
                    />
                  </div>
                  <div className="w-24 text-right text-gray-800 text-lg">${item.price.toFixed(2)}</div>
                  <div className="w-24 text-right text-gray-800 font-semibold text-xl">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="text-right">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#fec880] hover:text-[#fec880] font-medium transition duration-200 ease-in-out"
                    >
                      <FaTrashAlt className="text-2xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="mt-10 bg-[#f3e8da] bg-opacity-90 p-6 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                Order Summary
              </h2>
              <div className="flex justify-between text-lg mb-4 text-gray-700">
                <p>Subtotal:</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-lg mb-4 text-gray-700">
                <p>Shipping:</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-lg mb-4 text-gray-700">
                <p>Tax:</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-2xl font-bold text-gray-900">
                <p>Total:</p>
                <p>${total.toFixed(2)}</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-6 mt-6">
                <button className="w-full bg-[#fec880] hover:bg-[#f6bf78] text-white py-4 rounded-lg font-semibold text-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center">
                  <FaCheckCircle className="mr-3" /> Checkout Now
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-lg font-semibold text-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center">
                  <FaArrowRight className="mr-3" /> Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
