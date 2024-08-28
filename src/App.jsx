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



export const contexts=createContext();

function App() {
const [search,setSearch]=useState('')

  return (
    <div>
      <contexts.Provider value={{search,setSearch}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="girl" element={<Girl />} />
        <Route path="boy" element={<Boy />} />
        <Route path="collections" element={<Collections/>}/>
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
        <Route  path="/login" element={<Login/>}/>
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
