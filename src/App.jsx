import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
    const [cart, setCart] = useState(5);
  return (
    <div className="container">
      <Toaster/>
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
