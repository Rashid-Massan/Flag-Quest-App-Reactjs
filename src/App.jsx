import React from "react";
import "flag-icons/css/flag-icons.min.css";
import { Routes, Route } from "react-router-dom";

//components:-
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

//pages:-
import AllCountries from "./pages/AllCountries";
import Asia from "./pages/Asia";
import Europe from "./pages/Europe";
import America from "./pages/America";
import Africa from "./pages/Africa";






function App(){
  return <div className="min-h-screen bg-slate-600">
  <Navbar/>
  <Routes>
    <Route path="/*" element={<AllCountries/>}/>
    <Route path="/asia/*" element={<Asia/>}/>
    <Route path="/europe/*" element={<Europe/>}/>
    <Route path="/america/*" element={<America/>}/>
    <Route path="/africa/*" element={<Africa/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>


  </Routes>
  <Footer/>
  </div>
}

export default App