import React from "react";
import Home2 from "./Home2";
import Cards from "../Cards";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Header from "../Header";

function Home() {
  return (
    <div>
      <Header/>
    <div className="bg-white">
      <div className="bg-slate-50 leading-9">
        <h1 className="text-center text-2xl font-mono leading-9 ">
          "YOUR FIRST BREATH TOOK OURS WAY"
        </h1>{" "}
      </div>
      <div>
        <img src="https://spearmintlove.com/cdn/shop/files/christmasdesktopbannerrevised.png?v=1722957403&width=1920" />
      </div>
      <div className="bg-red-300 h-28">
        {" "}
        <h1 className="text-center text-2xl font-thin  leading-9 ">
          YOUR DESTINATION FOR ALL THINGS BABY
        </h1>
        <h1 className="text-thin text-center leading-9">
          Sets the trends with fresh, innovative styles while also offering
          those timeless baby essentials you LOVE
        </h1>
      </div>
      <Home2 />
      <Cards />
     
      <Home4/>
      <Home5/>
   
    </div>
    </div>
  );
}

export default Home;
