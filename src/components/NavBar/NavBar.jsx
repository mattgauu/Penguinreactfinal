import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {

  return (
    <nav class="navbar sticky-top bg-body-tertiary" className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/productos" className="text-link">Productos</Link>
        </li>
        <li className="category">
          <Link to="/category/servicios" className="text-link" >Servicios</Link>
        </li>
        
      </ul>

      <Link to="/" className="brand primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand ">Box Ecommerce</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar
