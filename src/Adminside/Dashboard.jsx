import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import axios from 'axios';
import Sidebar from './Sidebar';
import { toast } from 'sonner';

const Dashboard = () => {
    const [products,setProducts]=useState([]);
    const [users,setUsers]=useState([]);

   useEffect(()=>{
    const fn =async()=>{
        try {
            const response=await axios.get("http://localhost:3000/api/admin/viewAllUsers");
            setUsers(response?.data);
        } catch (error) {
            console.log(error)
            toast.error("Failed to fetch users")
         }
       }
    fn();
   },[])

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products!");
      } 
    };
    fetchProducts()
  }, []);




    return (
        <div>
            <Navbar/>
        <div className="flex h-screen bg-gray-100">
           <Sidebar/>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <header className="mb-4">
                    <h2 className="text-3xl font-semibold">Dashboard</h2>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Total Users</h3>
                        <p className="mt-2 text-gray-600">{users?.length}</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Total Product</h3>
                        <p className="mt-2 text-gray-600">{products?.length}</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Total Sales</h3>
                        <p className="mt-2 text-gray-600">$12,345</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Orders</h3>
                        <p className="mt-2 text-gray-600">2</p>
                    </div>
                </section>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;