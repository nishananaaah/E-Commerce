import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar';

const Userdetails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(userid,"IDDDDDDDDDDD")

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Fetch user details
        const userResponse = await axios.get(`http://localhost:3000/api/admin/user/${userid}`);
        setUser(userResponse.data);
        console.log(setUser)
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userid]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8">User Details</h1>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">User ID: {user._id}</h2>
              <p className="text-lg text-gray-700 mb-1"><strong>Username:</strong> {user.username}</p>
              <p className="text-lg text-gray-700 mb-1"><strong>Email:</strong> {user.email}</p>
            </div>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaShoppingCart className="mr-2 text-gray-600" /> Cart Items
              </h3>
              {user?.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2">
                  {user.map((item) => (
                    <li key={item._id} className="flex items-center text-gray-600">
                      <FaShoppingCart className="mr-2 text-gray-400" />
                      {item?.productId?.name} (${item?.productId?.price.toFixed(2)}) - Quantity: {item?.quantity}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No items in cart.</p>
              )}
            </section>

            {/* <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaBoxOpen className="mr-2 text-gray-600" /> Orders
              </h3>
              {user?.orders?.length > 0 ? (
                <ul className="list-disc pl-5 space-y-4">
                  {user?.orders.map((order, index) => (
                    <li key={index} className="text-gray-600">
                      <p className="font-semibold mb-2">Order #{index + 1}</p>
                      <p><strong>Total:</strong> ${order?.total?.toFixed(2)}</p>
                      <p><strong>Items:</strong></p>
                      <ul className="list-disc pl-5">
                        {order?.items.map((item) => (
                          <li key={item.id} className="text-gray-600">
                            {item?.name} (${item?.price?.toFixed(2)})
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No orders placed.</p>
              )}
            </section> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Userdetails;



