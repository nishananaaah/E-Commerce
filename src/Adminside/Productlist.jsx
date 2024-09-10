// import React from "react";

// const Productlist = ({ products, onDeleteProduct, onEditClick }) => {



//   return (
    
//     <div className="flex flex-col w-full p-6 bg-gray-100 rounded-lg shadow-lg ">
//       <h3 className="text-2xl font-bold text-gray-700 mb-6">Product List</h3>

//       {products.length === 0 ? (
//         <p className="text-gray-600">No products available.</p>
//       ) : (
//         <ul className="space-y-4">
//           {products.map((product) => (
//             <li
//               key={product.id}
//               className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
//             >
//               <div className="flex items-center space-x-4 w-[140vh]">
//                 <img
//                   className="h-16 w-16 object-cover rounded-lg"
//                   src={product.imageUrl}
//                   alt={product.name}
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600">${product.price}</p>
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => onEditClick(product)}
//                   className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition-colors duration-200"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDeleteProduct(product.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors duration-200"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Productlist;
