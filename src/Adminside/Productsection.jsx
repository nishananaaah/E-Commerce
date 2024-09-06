import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Productform from './Productform';
import Productlist from './Productlist';
import axios from 'axios';
import Sidebar from './Sidebar';


const ProductSection = () => {
    const navigate=useNavigate()


  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [data,setData]=useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setEditingProduct(null);
  };

  const handleDeleteProduct = async(productId) => {
    await axios.delete(`http://localhost:3000/datas/${productId}`)
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

useEffect(()=>{
    const fn =async ()=>{
      const response= await axios.get('http://localhost:3000/datas')
       setProducts(response.data)
    };
    fn();

},[])


  return (
    <div className='flex'>
        <Sidebar/>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Section</h2>
      <Productform
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        editingProduct={editingProduct}
      />
      <Productlist
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onEditClick={handleEditClick}
      />
    </div>
    </div>
  );
};

export default ProductSection;

