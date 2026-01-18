import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./assets/Components/home/Home";
import Nav from "./assets/Components/nav/Nav";
import Footer from "./assets/Components/footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./assets/Components/contact/Contact";
import Event from "./assets/Components/events/Event";
import About from "./assets/Components/about/About";
import Login from "./assets/Components/login/Login";
import Register from "./assets/Components/register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/event' element={<Contact/>}/>
          <Route path='/contact' element={<Event/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
