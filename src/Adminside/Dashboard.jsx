import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [data,setData]=useState([]);
    const [user,setUser]=useState([]);

   useEffect(()=>{
    const fn =async()=>{
        const response=await axios.get("http://localhost:3000/datas");
        const res=await axios.get("http://localhost:3000/users")
        setData(response.data);
        setUser(res.data)
        console.log(data,"data");
         }
    fn();
   },[])




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
                        <p className="mt-2 text-gray-600">{user.length}</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Total Product</h3>
                        <p className="mt-2 text-gray-600">{data.length}</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Total Sales</h3>
                        <p className="mt-2 text-gray-600">$12,345</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Orders</h3>
                        <p className="mt-2 text-gray-600">23</p>
                    </div>
                </section>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;