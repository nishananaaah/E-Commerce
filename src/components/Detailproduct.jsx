import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { toast } from 'sonner';
import axios from 'axios';

const Detailproduct = () => {
  const [product, setProduct] = useState(null);
  const { productid } = useParams();

  const id = localStorage.getItem("user");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/products/${productid}`);
        if (response?.data?.product) {
          setProduct(response.data.product);
        } else {
          toast.error("Product not found");
        }
      } catch (error) {
        console.log("Failed to fetch product details:", error);
        toast.error("Failed to load product details");
      }
    };
    fetchProduct();
  }, [productid]);

  const handleAddToCart = async (productId) => {
    try {
      const user = JSON.parse(id); 
      const userId = user._id;

      await axios.post(`http://localhost:3000/api/users/${userId}/cart/${productId}`);
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      toast.error("Could not add item to cart");
    }
  };

  // Check if product is still null (still loading)
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap justify-center">
          {/* Product Image */}
          <div className="w-full md:w-1/2 mb-6">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto rounded-lg shadow-md object-contain max-h-96 mx-auto" // Added max-height and centered the image
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-2 text-lg font-semibold">${product.price}</p>
            <p className="mt-4">{product.description || "No description available."}</p>
            <button
              onClick={() => handleAddToCart(product._id)}
              className="bg-pink-500 text-white px-4 py-2 rounded mt-6"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailproduct;

