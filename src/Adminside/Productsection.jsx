import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Productform from './ProductForm';
import Productlist from './ProductList';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [view, setView] = useState('productForm'); // Manage view state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/datas');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setView('productList'); // Switch to ProductList after adding
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setEditingProduct(null);
    setView('productList'); // Switch to ProductList after editing
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/datas/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setView('productForm'); // Switch to ProductForm to edit
  };

  const handleViewProductList = () => {
    setView('productList'); // Switch to ProductList
  };

  const handleViewProductForm = () => {
    setView('productForm'); // Switch to ProductForm
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className="p-4 flex-1">
        {view === 'productForm' && (
          <>
            <Productform
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              editingProduct={editingProduct}
            />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleViewProductList}
            >
              View Product List
            </button>
          </>
        )}
        {view === 'productList' && (
          <>
            <button
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleViewProductForm}
            >
              Add New Product
            </button>
            <Productlist
              products={products}
              onDeleteProduct={handleDeleteProduct}
              onEditClick={handleEditClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductSection;


