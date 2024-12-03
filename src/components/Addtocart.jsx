import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "./Header";

const Addtocart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const uId = localStorage.getItem("id");
  const fn = async () => {
    const response = await axios.get(`http://localhost:3000/users/${uId}`);
    setCart(response.data.cart);
  };
  useEffect(() => {
    fn();
  });
  const removeFromcart = async (id) => {
    const del = cart.filter((item) => item.id != id);
    await axios.patch(`http://localhost:3000/users/${uId}`, { cart: del });
    fn();
    toast.success("item removed");
  };
  const increaseQuantity = async (id) => {
    const updatedcart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    await axios.patch(`http://localhost:3000/users/${uId}`, {
      cart: updatedcart,
    });
    toast.success("Quantity increased");
  };
  const decreaseQuantity = async (id) => {
    const updatedcart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    await axios.patch(`http://localhost:3000/users/${uId}`, {
      cart: updatedcart,
    });
    setCart(updatedcart);
    toast.success("Quantity decreased");
  };
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const calculateTaxes = (subtotal) => {
    return subtotal * 0.1;
  };
  const calculateShipping = () => {
    return 0;
  };
  const subtotal = calculateSubtotal();
  const taxes = calculateTaxes(subtotal);
  const shipping = calculateShipping();
  const total = subtotal + taxes + shipping;

  return (
    <div>
      <Header />
      <div className="bg-gray-100 h-[full] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="py-4 text-center">
                          {" "}
                          Your cart is empty
                        </td>
                      </tr>
                    ) : (
                      cart.map((item) => (
                        <tr key={item.id}>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 mr-4"
                                src={item.imageUrl}
                                alt={item.name}
                              />
                              <h3 className="font-semibold">{item.name}</h3>
                            </div>
                          </td>
                          <td className="py-4">${item.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="border rounded-md py-2 px-4 mr-2"
                              >
                                -
                              </button>
                              <h3 className="text-center w-8">
                                {item.quantity}
                              </h3>

                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="border rounded-md py-2 px-4 ml-2"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4">
                            ${item.price * item.quantity}
                          </td>
                          <td className="py-4">
                            <button
                              onClick={() => removeFromcart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <h1>Subtotal</h1>
                  <h1>${subtotal}</h1>
                </div>
                <div className="flex justify-between mb-2">
                  <h1>Taxes</h1>
                  <h1>${taxes}</h1>
                </div>
                <div className="flex justify-between mb-2">
                  <h1>Shipping</h1>
                  <h1>{shipping}</h1>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <h1 className="font-semibold">Total</h1>
                  <h1 className="font-semibold">${total}</h1>
                </div>
                <button
                  className="bg-red-300 text-white py-2 px-4 rounded-lg mt-4 w-full"
                  onClick={() => navigate("/checkoutpage")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addtocart;
