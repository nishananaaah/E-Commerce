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
            <h1 className="text-white font-bold text-3xl">GIRL</h1>
            <button onClick={()=>navigate('/girl')} ><h3 className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active"> SHOP FOR HER</h3></button>
        </div>
        <div className="bg-boy-bg w-[97.5vh] h-[71vh]  bg-no-repeat">
            <h1 className="text-white font-bold text-3xl">BOY</h1>
            <button onClick={()=>navigate('/boy')}><h3 className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active"> SHOP FOR HIM</h3></button>
    
        </div>
      </div>
    </div> 
  );
}

export default Home2;
