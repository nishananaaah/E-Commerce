import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Productform = ({ onAddProduct, onEditProduct, editingProduct }) => {


    const [product, setProduct] = useState(
      editingProduct || { name: '', price: '', category: '' }
    );
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (editingProduct) {
        onEditProduct(product);
      } else {
        onAddProduct({ ...product, id: Date.now() });
      }
      setProduct({ name: '', price: '', category: '' });
    };
  
    useEffect(() => {
      if (editingProduct) {
        setProduct(editingProduct);
      }
    }, [editingProduct]);
  
    return (
        <div className="flex">
            {/* <Sidebar/> */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Product Category"
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-red-300 text-white p-2 rounded">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      </div>
    );
  };
  export default Productform;
  
  