import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import userApi from '../API/userInter';
import { toast } from 'sonner';
import axios from 'axios';

const Detailproduct = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { productid } = useParams();

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

  const addtocart = async (item) => {
    const isLoggedIn = !!localStorage.getItem("id");

    if (!isLoggedIn) {
      toast.warning("Please login to add items to your cart");
      navigate("/login");
    } else {
      const userId = localStorage.getItem("id");

      if (!userId) {
        toast.warning("User not logged in");
        return;
      }

      try {
        await userApi.post(`/${userId}/cart/${item.id}`);
        toast.success("Item added to cart");
      } catch (error) {
        console.error("Failed to add item to cart:", error);
        toast.error("Could not add item to cart");
      }
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
        <div className="flex flex-wrap">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-2 text-lg font-semibold">${product.price}</p>
            <p className="mt-4">{product.description || "No description available."}</p>
            <button
              onClick={() => addtocart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
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

