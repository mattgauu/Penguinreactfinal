import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Home from './pages/Home'
import Fotos from './pages/Fotos'; // Nueva subpágina
import Servicios from './pages/Servicios'; // Nueva subpágina


import './App.css'


function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          

          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Fotos" element={<Fotos />} />
            <Route path="/Servicios" element={<Servicios />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
