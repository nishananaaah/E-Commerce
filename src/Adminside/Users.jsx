import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";;
import Sidebar from "./Sidebar";
import { toast } from "sonner";
import Navbar from "./Navbar";

const UserSection = () => {
  const [users, setUsers] = useState([]);
  console.log(users,"usersssssssssssssssss")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/viewAllUsers"
        );

        setUsers(response?.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  const handleUser = async (id, isDeleted) => {
    try {
      const endpoint = isDeleted
        ? `http://localhost:3000/api/admin/user/unblock/${id}`  //admin can unblock user
        : `http://localhost:3000/api/admin/user/block/${id}`    //admin can block user
  
      // Make the PUT request
      const response = await axios.put(endpoint);
  
      // Notify success
      toast.success(response.data.message);
  
      // Update the local users state with the updated user object
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, isDeleted: !isDeleted } : user
        )
      );
    } catch (error) {
      console.error("Error updating user block status:", error);
      if (error.response) {
        toast.error(error.response.data.message || 'Failed to update user status.');
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            User Management
          </h1>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                      Username
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr
                        key={user._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user._id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.username}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {user.email}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-900">
                          <Link
                            to={`/users/${user._id}`}
                            className="text-blue-500 hover:underline mr-4"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleUser(user._id, user.isDeleted)}
                            className={`px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 ${
                              user.isDeleted
                                ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                                : "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
                            }`}
                          >
                            {user.isDeleted ? "Unblock" : "Block"}
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;






