import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home4 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 rounded-lg shadow-md mt-12">
      <div className="flex-1 min-w-[300px] h-[400px] bg-gray-200 relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-toys-bg bg-center bg-no-repeat bg-cover flex items-center justify-center">
          <div className="text-center text-white p-4  bg-opacity-50 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">TOYS</h1>
            <button
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-pink-600 transition duration-200 transform hover:scale-105"
              onClick={() => navigate('/toys')}
            >
              SHOP TOYS
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-[300px] h-[400px] bg-gray-200 relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-cloths-bg bg-center bg-no-repeat bg-cover flex items-center justify-center">
          <div className="text-center text-white p-4 bg-opacity-50 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">CLOTHS</h1>
            <button
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-pink-600 transition duration-200 transform hover:scale-105"
              onClick={() => navigate('/cloths')}
            >
              SHOP CLOTHS
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-[300px] h-[400px] bg-gray-200 relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-nutrition-bg bg-center bg-no-repeat bg-cover flex items-center justify-center">
          <div className="text-center text-white p-4 bg-opacity-50 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">NUTRITION</h1>
            <button
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-pink-600 transition duration-200 transform hover:scale-105"
              onClick={() => navigate('/nutrition')}
            >
              SHOP NUTRITION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;

