import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <nav className="mt-6">
                        <ul>
                            <li className="my-2">
                                <a href="#" className="block p-2 rounded hover:bg-red-300">
                                    Dashboard
                                </a>
                            </li>
                            <li className="my-2">
                                <Link to="/productsection" className="block p-2 rounded hover:bg-red-300">
                                    Products
                                </Link>
                            </li>
                            <li className="my-2">
                                <a href="#" className="block p-2 rounded hover:bg-red-300">
                                    Users
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="#" className="block p-2 rounded hover:bg-red-300">
                                    Orders
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <header className="mb-4">
                    <h2 className="text-3xl font-semibold">Dashboard</h2>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Total Users</h3>
                        <p className="mt-2 text-gray-600">1234</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Active Users</h3>
                        <p className="mt-2 text-gray-600">567</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Total Sales</h3>
                        <p className="mt-2 text-gray-600">$12,345</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Pending Orders</h3>
                        <p className="mt-2 text-gray-600">23</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;


