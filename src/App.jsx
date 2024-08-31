import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Girl from "./components/Pages/Girl";
import Boy from "./components/Pages/Boy";
import Register from "./components/Register";
import Login from "./components/Pages/Login";
import Collections from "./components/Pages/Collections";
import Detailproduct from "./components/Detailproduct";
import axios from "axios";
import { Toaster,toast } from "sonner";  
import Addtocart from "./components/Addtocart";
import CheckoutPage from "./components/Pages/Checkoutpage";
export const contexts=createContext();

function App() {
const [search,setSearch]=useState('')
const uId=localStorage.getItem("id")



const addtocart = async (items)=>{
  const response =await axios.get(`http://localhost:3000/users/${uId}`)
  const datass= response.data.cart 
  const res=datass.find((item)=>item.id===items.id)
   console.log(res);
   
  if(res){
    toast.warning("Product already exist")
  }else{
    const updatecart=[...datass , items]
    await axios.patch(`http://localhost:3000/users/${uId}`,{cart:updatecart})
    toast.success("Product added")
  }

};




  return (
    <div>
      <contexts.Provider value={{search,setSearch,addtocart}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/girl" element={<Girl />} />
        <Route path="/boy" element={<Boy />} />
        <Route path="/collections" element={<Collections/>}/>
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/detail/:userid" element={<Detailproduct/>}/>
        <Route path="/cart" element={<Addtocart/>}/>
        <Route path="/checkoutpage" element={<CheckoutPage/>} />
       </Routes>
        </contexts.Provider>
        <div>
          
          {/* <Home3/> */}
      

          <Footer />
        </div>
      
    </div>
  );
}

export default App;
