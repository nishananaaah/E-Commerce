import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { contexts } from '../App';

const Detailproduct = () => {
    const {userid}=useParams();
    const [data,setData]=useState([]);
    const {addtocart}=useContext(contexts)

    useEffect(()=>{

        const ft=async ()=>{
            const response=await axios.get("http://localhost:3000/datas");
            const rs=response.data.filter((item)=>item.id == userid);
            setData(rs)
       };
       ft();
     },[])


  return (
    <div className="bg-gray-100">
      {data.map((item) => {
        return (
          <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap -mx-4">
                {/* Product Images */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <img
                    src={item.imageUrl}
                    alt="Product"
                    className="w-96 h-auto rounded-lg shadow-md mb-4"
                    id="mainImage"
                  />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 px-4">
                  <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mr-2">{item.price}</h3>
                    <h3 className="text-sm text-gray-600 cursor-auto ml-2">
                        {item.originalPrice}
                    </h3>
                    {/* <span className="text-gray-500 line-through">$399.99</span> */}
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 ${
                          index < 4 ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                    <br />
                    <span className="ml-2 text-gray-600">
                      4.5 (120 reviews)
                    </span>
                  </div>
                  <br />
                  <p className="text-gray-700 mb-6  italic ">
                   Discover the perfect addition to your baby’s essentials with our range of high-quality baby products.
                   From soft, breathable fabrics to durable, safety-tested designs, each item is crafted to ensure maximum comfort and protection for your little one. Whether you’re looking for cozy blankets, gentle skincare, or versatile playtime gear, our selection offers both functionality and style to meet the needs of modern parents. Invest in peace of mind with products designed to nurture and support your baby’s growth and development
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Color:</h3>
                    <div className="flex space-x-2">
                      {["green-700", "red-300", "blue-500"].map((color) => (
                        <button
                          key={color}
                          className={`w-8 h-8 bg-${color} rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div> */}

                  <div className="flex space-x-4 mb-6">
                    <button
                      className="bg-red-300 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
                      onClick={() => addtocart(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                    {/* <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75a9 9 0 1 0-18 0 9 9 0 0 0 18 0ZM12 9v3m0 0v3m0-3h3m-3 0H9" />
                </svg>
                Wishlist
              </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Detailproduct
