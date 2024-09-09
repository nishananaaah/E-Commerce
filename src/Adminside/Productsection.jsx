import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Productform from './ProductForm';
import Productlist from './ProductList';
import Navbar from './Navbar';

const Productsection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["Girl", "Boy", "cloths","toys","nutrition"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);//edit button
  const [formData, setFormData] = useState({
    id: "",
    price: "",
    imageUrl: "",
    name: "",
    brand: "",
    category: "",
    quantity: "",
   
  });
  const [showForm, setShowForm] = useState(false);
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/datas");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
      
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/datas",
        newProduct
      );
      const addedProduct = response.data;

      setProducts((prevProducts) => [...prevProducts, addedProduct]);
      resetForm();
      setShowForm(false);
      setShowProduct(true);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/datas/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = async () => {
    const updatedProduct = {
      ...formData,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
     
    };

    try {
      await axios.put(
        (`http://localhost:3000/datas/${formData.id}`),
        updatedProduct
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === formData.id ? updatedProduct : product
        )
      );
      resetForm();
      setShowForm(false);
      setShowProduct(true);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSaveProduct = () => {
    if (editMode) {//click the edit true
      handleEditProduct();
    } else {
      handleAddProduct();
    }
  };

  const handleEditClick = (product) => {
    setFormData({
      id: product.id,
      price: product.price.toString(),
      imageUrl: product.imageUrl,
      name: product.name,
      brand: product.brand,
      category: product.category,
      quantity: product.quantity.toString(),
     
    });
    setSelectedProduct(product);
    setEditMode(true);
    setShowForm(true);
    setShowProduct(false);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      price: '',
      imageUrl: '',
      name: '',
      brand: '',
      category: '',
      quantity: '',
    
    });
    setEditMode(false);
    setSelectedProduct(null);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Product Management</h1>

          <div className="flex justify-end mb-4">
            <button
              onClick={() => {
                setShowForm(!showForm);
                setShowProduct(prev => !prev);
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {showForm ? 'Hide Form' : 'Add New Product'}
            </button>
          </div>

          {showForm && (
            <div className="bg-white shadow-md rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {editMode ? 'Edit Product' : 'Add New Product'}
              </h2>
              <form className="space-y-6">
                {Object.keys(formData).map((key) => (
                  <div className="flex flex-col" key={key}>
                    <label className="text-sm font-medium text-gray-700 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </label>
                    <input
                      type={key === 'price'  || key === 'quantity'  ? 'number' : 'text'}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      step={key === 'price' || key === 'marketRate' ? '0.01' : '1'}
                    />
                  </div>
                ))}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleSaveProduct}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {editMode ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setShowForm(false);
                      setShowProduct(true);
                    }}
                    className="bg-gray-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {showProduct && (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover"/>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">${product.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-500 capitalize">{product.category}</td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <button
                          onClick={() => handleEditClick(product)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Productsection;


