import React from 'react';

// Sample team member data
const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/3764653/pexels-photo-3764653.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Alice Johnson',
    role: 'Designer',
    image: 'https://images.pexels.com/photos/3771254/pexels-photo-3771254.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Bob Brown',
    role: 'Developer',
    image: 'https://images.pexels.com/photos/3184334/pexels-photo-3184334.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#f7e2c6]">
        <div className="absolute inset-0 opacity-30">
          <img
            src={`https://images.pexels.com/photos/1704122/pexels-photo-1704122.jpeg?auto=compress&cs=tinysrgb&w=1600`}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto py-20 relative z-10 text-center text-black">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-6">
            We are a passionate team dedicated to delivering the best products for you.
          </p>
          <button className="bg-white text-[#000] font-semibold py-2 px-4 rounded-lg hover:bg-[#fec880] hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          To create innovative solutions that empower individuals and improve their lives.
        </p>
        <p className="text-lg text-gray-700">
          We believe in the power of technology and creativity to shape a better future.
        </p>
      </div>

      {/* Team Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-whites rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
