import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Userdetails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userid}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userid]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <Sidebar/>
    <div className="min-h-screen bg-gray-100 flex-1">
      <div className="flex">
        <main className="flex-1 p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8">User Details</h1>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">User ID: {user.id}</h2>
              <p className="text-lg text-gray-700 mb-1"><strong>Username:</strong> {user.username}</p>
              <p className="text-lg text-gray-700 mb-1"><strong>Email:</strong> {user.email}</p>
            </div>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cart Items</h3>
              {user.cart.length > 0 ? (
                <ul className="space-y-4">
                  {user.cart.map((item) => (
                    <li key={item.id} className="flex items-center border-b border-gray-200 pb-4">
                      <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                      <div>
                        <p className="text-lg text-gray-700 mb-1">{item.name}</p>
                        <p className="text-gray-600 mb-1"><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                        <p className="text-gray-600"><strong>Quantity:</strong> {item.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No items in cart.</p>
              )}
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Orders</h3>
              {user.order && user.order.length > 0 ? (
                <ul className="space-y-4">
                  {user.order.map((order, index) => (
                    <li key={index} className="border-b border-gray-200 pb-4">
                      <p className="font-semibold mb-2">Order #{index + 1}</p>
                      <p className="text-gray-700 mb-1"><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                      <p className="text-gray-700 mb-1"><strong>Items:</strong></p>
                      <ul className="list-disc pl-5">
                        {order.items.map((item) => (
                          <li key={item.id} className="text-gray-600">
                            {item.name} (${item.price.toFixed(2)})
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No orders placed.</p>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Userdetails;




