import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory category ="mens"/>}/>
        <Route path='/Womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/Kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      
        
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
