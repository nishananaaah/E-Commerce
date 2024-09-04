import React from "react";
import { useNavigate } from "react-router-dom";


function Home2() {
const navigate=useNavigate()
  return (
    <div>
      <div className="bg-slate-300  text-center">
        <h1 className="text-center pt-5 font-mono leading-9 text-2xl text-white mt-3">
          EXPECTING A.........
        </h1>
      </div>
      <div className="flex flex-wrap  gap-3 mt-4 ">
        <div className="bg-girl-bg w-[97.5vh] pl-3 h-[71vh] bg-no-repeat ml-6">
            {/* <h1 className="text-white font-bold text-3xl">GIRL</h1> */}
            <button
  onClick={() => navigate('/girl')}
  className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-200 transform hover:scale-105"
>
  <h3 className="text-xl tracking-wide">SHOP FOR HER</h3>
</button>

        </div>
        <div className="bg-boy-bg w-[97.5vh] h-[71vh]  bg-no-repeat">
            {/* <h1 className="text-white font-bold text-3xl">BOY</h1> */}
            <button
  onClick={() => navigate('/boy')}
  className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-200 transform hover:scale-105"
>
  <h3 className="text-xl tracking-wide">SHOP FOR HIM</h3>
</button>


    
        </div>
      </div>
    </div> 
  );
}

export default Home2;
