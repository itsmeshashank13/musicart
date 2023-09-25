import './App.css';
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Success from './Pages/Success/Success';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
