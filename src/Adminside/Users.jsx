import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">User Management</h1>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">User ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Username</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email Address</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Cart Items</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{user.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{user.username}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{user.email}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        {user.cart && user.cart.length > 0 ? (
                          <ul className="list-disc pl-4 space-y-1">
                            {user.cart.map((item) => (
                              <li key={item.id} className="flex items-center text-gray-600">
                                <span className="material-icons mr-2 text-gray-400">shopping_cart</span>
                                {item.name} (${item.price.toFixed(2)})
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-gray-500">No items</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">
                        <Link to={`/users/${user.id}`} className="text-blue-600 hover:text-blue-700 font-semibold">View Details</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;






