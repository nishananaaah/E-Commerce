import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home5 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = async () => {
      const response = await axios.get("http://localhost:3000/datas");
      setData(response.data);
    };
    fn();
  }, []);
  


  return (
    <div className="flex flex-wrap gap-6 justify-center">
    <br />
    <div className="text-center p-10 w-full bg-red-300">
      <h1 className="font-mono text-4xl mb-4 text-white  p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active ">NEW ARRIVALS</h1>
      
    </div>
    
      {data.filter((item) => item.category === 'arrivals').map((item, index) => {
        return (
          <div key={index} className="w-72 mt-1">
            <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            
              <a href="#">
                <img
                  src={item.imageUrl}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                  onClick={()=>navigate(`/detail/${item.id}`)}
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

export default Home5;
