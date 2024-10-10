import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Sample food data including images, hover images, prices, and descriptions
const foodData = [
  {
    name: 'Salad',
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 10,
    description: 'Fresh greens topped with a zesty dressing.',
  },
  {
    name: 'Burger',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/3291790/pexels-photo-3291790.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 15,
    description: 'Juicy beef patty with melted cheese and toppings.',
  },
  {
    name: 'Pizza',
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/4108886/pexels-photo-4108886.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 12,
    description: 'Classic margherita with fresh basil and mozzarella.',
  },
  {
    name: 'Dessert',
    image: 'https://images.pexels.com/photos/1704122/pexels-photo-1704122.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/1268550/pexels-photo-1268550.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 8,
    description: 'Sweet and creamy dessert with a chocolate drizzle.',
  },
  {
    name: 'Sushi',
    image: 'https://images.pexels.com/photos/3184334/pexels-photo-3184334.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/2348275/pexels-photo-2348275.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 20,
    description: 'Fresh sushi rolls with assorted fillings.',
  },
  {
    name: 'Pasta',
    image: 'https://images.pexels.com/photos/3771254/pexels-photo-3771254.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/1004338/pexels-photo-1004338.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 11,
    description: 'Delicious pasta tossed in a rich sauce.',
  },
  {
    name: 'Steak',
    image: 'https://images.pexels.com/photos/2104080/pexels-photo-2104080.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/3032649/pexels-photo-3032649.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25,
    description: 'Grilled steak served with a side of veggies.',
  },
  {
    name: 'Cupcakes',
    image: 'https://images.pexels.com/photos/1317004/pexels-photo-1317004.jpeg?auto=compress&cs=tinysrgb&w=800',
    hoverImage: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 5,
    description: 'Delicious cupcakes with various flavors.',
  },
];

const FoodGallery = () => {
  const [maxPrice, setMaxPrice] = useState(25); // Default max price

  // Filter food items based on the selected maximum price
  const filteredFood = foodData.filter((food) => food.price <= maxPrice);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Standard</h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Discover our delicious dishes through our gallery!
        </p>

        {/* Price Filter */}
        <div className="mb-8 text-center">
          <label className="text-lg font-semibold mr-2">Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="0"
            max="25"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="slider"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFood.map((food, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <img
                  src={food.hoverImage}
                  alt={food.name}
                  className="absolute inset-0 w-full h-48 object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{food.name}</h2>
                <p className="text-gray-600 mb-2">{food.description}</p>
                <p className="text-lg font-bold mb-4">${food.price}</p>
                <NavLink
                  to={`/cart`} // Adjust the path as necessary
                  className="w-full bg-[#fec880] hover:bg-[#fec880] text-black py-2 rounded-lg transition duration-300 text-center"
                >
                  Add to Cart
                </NavLink>
              </div>
              {/* This div for hover effect will not block the button */}
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodGallery;
