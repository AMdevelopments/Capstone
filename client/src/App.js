// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import ActionSection from './components/actionsection/ActionSection';
import SpecialsSection from './components/specialssection/SpecialsSection';
import MenuPage from './components/menu/MenuPage';
import CartPage from './components/cart/CartPage';
import ReservationPage from './components/reservation/ReservationPage';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import OrderDetails from './components/orderdetails/OrderDetails';
import OrdersList from './components/orderslist/OrdersList';  // New import

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<><Hero /><ActionSection /><SpecialsSection /><Footer /></>} />
        <Route path="/menu" element={<MenuPage setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<OrdersList />} />  // Move this line up
        <Route path="/order/:id" element={<OrderDetails />} /> // Move this line down
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;














