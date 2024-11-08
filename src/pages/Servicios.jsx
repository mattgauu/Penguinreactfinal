import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import Cart from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Checkout'


import '../App.css'


const Servicios = () => {
    return(
        <div>
            <h1>hola</h1>
            <ItemListContainer/>
        </div>
        
    )

}
export default Servicios