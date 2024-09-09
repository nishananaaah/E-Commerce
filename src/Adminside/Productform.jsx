import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Productform = ({ onAddProduct, onEditProduct, editingProduct, showForm, setShowForm }) => {
  const [formData, setFormData] = useState({
    id: '',
    imageUrl: '',
    name: '',
    brand: '',
    price: '',
    category: '',
    originalPrice: '',
    quantity: '',
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      onEditProduct(formData);
    } else {
      onAddProduct(formData);
    }
    setFormData({
      id: '',
      imageUrl: '',
      name: '',
      brand: '',
      price: '',
      category: '',
      originalPrice: '',
      quantity: '',
    });
    setShowForm(false); // Hide form after submission
  };

  if (!showForm) return null; // Render nothing if the form should be hidden

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {editingProduct ? 'Edit Product' : 'Add New Product'}
      </h2>
      <button ></button>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields here */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Product ID</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Product ID"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Image URL"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Brand Name"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Price"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Original Price</label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Original Price"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Category"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full bg-gray-100 focus:bg-white"
              placeholder="Enter Quantity"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (product) => {
    
    console.log('Product added:', product);
    setShowForm(false); 
  };

  const handleEditProduct = (product) => {
    
    console.log('Product updated:', product);
    setShowForm(false); 
  };

  return (
  <div><div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        {showForm ? 'Hide Form' : 'Add New Product'}
      </button>
      <Productform
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        editingProduct={editingProduct}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
    </div>
  );
};

export default App;



  
  