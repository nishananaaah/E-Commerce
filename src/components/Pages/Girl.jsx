
import React, { useEffect, useState } from "react";
import axios from "axios";

// const products = [
//   {
//     id: 1,
//     imageUrl:
//       "https://spearmintlove.com/cdn/shop/files/ruffle-neck-bodysuit-rosewater-dot.jpg?v=1724268558&width=480",
//     name: "Organic Ruffle Neck Bodysuit",
//     brand: "Brand",
//     price: "$2300",
//     originalPrice: "$3500",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://spearmintlove.com/cdn/shop/files/IMG-2757.jpg?crop=region&crop_height=1600&crop_left=3&crop_top=0&crop_width=1192&v=1710992285&width=480",
//     name: "Slipper Socks,Brown Bear",
//     brand: "Brand",
//     price: "$800",
//     originalPrice: "$1200",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://spearmintlove.com/cdn/shop/files/smocked-headband-appleberry.jpg?v=1724107293&width=480",
//     name: "Organic Smocked Headband",
//     brand: "Brand",
//     price: "$1300",
//     originalPrice: "$2000",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://spearmintlove.com/cdn/shop/files/L_oved-Baby-Sweatshirt-and-Jogger-Set-Doe-a-Deer-2.png?v=1724193500&width=480",
//     name: "Organic Sweatshirt & Joggerset",
//     brand: "Brand",
//     price: "$4400",
//     originalPrice: "$5000",
//   },
//   {
//     id: 5,
//     imageUrl:
//       "https://spearmintlove.com/cdn/shop/files/L_oved-Baby-Smocked-Zipper-Footie-Appleberry-Dots-3.png?v=1724198308&width=480",
//     name: "Organic Smocked Zipper Footie",
//     brand: "Brand",
//     price: "$3100",
//     originalPrice: "$4000",
//   },
//   {
//     id: 6,
//     imageUrl:
//       "https://spearmintlove.com/cdn/shop/files/beanie-enchanted-pumpkins.jpg?v=1724103965&width=480",
//     name: "Organic Banded Top-Knot",
//     brand: "Brand",
//     price: "$1100",
//     originalPrice: "$2000",
//   },
// ];

// const ProductCard = ({ product }) => (
//   <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//     <a href="#">
//       <img
//         src={product.imageUrl}
//         alt="Product"
//         className="h-80 w-72 object-cover rounded-t-xl"
//       />
//       <div className="px-4 py-3 w-72">
//         <span className="text-gray-400 mr-3 uppercase text-xs">
//           {product.brand}
//         </span>
//         <p className="text-lg font-bold text-black truncate block capitalize">
//           {product.name}
//         </p>
//         <div className="flex items-center">
//           <p className="text-lg font-semibold text-black cursor-auto my-3">
//             {product.price}
//           </p>
//           <del>
//             <p className="text-sm text-gray-600 cursor-auto ml-2">
//               {product.originalPrice}
//             </p>
//           </del>
//           <div className="ml-auto">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-bag-plus"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
//               />
//               <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </a>
//   </div>
// );
// const ProductGrid = () => (
//   <section
//     id="Projects"
//     className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
//   >
//     {products.map((product) => (
//       <ProductCard key={product.id} product={product} />
//     ))}
//   </section>
// );

const Girl = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const response = await axios.get("http://localhost:3000/datas");
      setData(response.data);
    };
    fn();
  }, []);

  console.log(data);

 
 
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <div className="text-center p-10 w-full">
        <h1 className="font-mono text-4xl mb-4 text-red-300">FOR GIRLS</h1>
      </div>
      {data.filter((item) => item.category === 'Girl').map((item, index) => {
        return (
          <div key={index} className="w-72">
            <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src={item.imageUrl}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {item.brand}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {item.name}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {item.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        {item.originalPrice}
                      </p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
  
};

export default Girl;
