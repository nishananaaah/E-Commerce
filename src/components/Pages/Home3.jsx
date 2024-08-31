import React from 'react'

const Home3 = () => {
  return (
    <div>
     <div className="flex flex-wrap gap-4">
  <div className="bg-toys-bg w-[65vh] ml-2 h-[60vh] bg-no-repeat flex items-end justify-center">
    <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-5xl font-serif py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      TOYS
    </button>
  </div>
  <div className="bg-cloths-bg w-[65vh] h-[60vh] bg-no-repeat flex items-end justify-center">
    <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-5xl font-serif py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      CLOTHS
    </button>
  </div>
  <div className="bg-nutrition-bg w-[66vh] h-[60vh] bg-no-repeat flex items-end justify-center">
    <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-5xl font-serif py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      NUTRITION
    </button>
  </div>
</div>

      
    </div>
  )
}

export default Home3;