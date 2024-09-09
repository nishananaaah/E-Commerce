import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    
    <div className="flex h-screen bg-gray-100">
         <aside className="w-64 bg-black text-white ">
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
                                <Link to="/users"className="block p-2 rounded hover:bg-red-300">
                                    Users
                                </Link>
                            </li>
                            <li className="my-2">
                                <Link to="/orders" className="block p-2 rounded hover:bg-red-300">
                                    Orders
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

      
    </div>
  )
}

export default Sidebar
