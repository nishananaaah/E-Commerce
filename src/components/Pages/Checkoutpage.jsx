import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const uId = localStorage.getItem("id");

  const fn = async () => {
    const response = await axios.get(`http://localhost:3000/users/${uId}`);
    setCart(response.data.cart);
  };

  useEffect(() => {
    fn();
  }, []);

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        <div className="bg-gradient-to-r from-black to-black lg:min-w-[370px] sm:min-w-[300px]">
          <div className="h-full">
            <div className="px-4 py-8 overflow-auto">
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-white">{item.name}</h3>
                      <ul className="text-xs text-gray-300 space-y-2 mt-2">
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto">{item.quantity}</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price <span className="ml-auto">${item.price}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-300 w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base text-black">
                Total <span className="ml-auto">$84.00</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-red-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-red-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-red-300"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-red-300"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Address Line"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-red-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-pink-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-red-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-red-300"
                  />
                </div>
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-red-300 hover:bg-gray-200 text-white"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

