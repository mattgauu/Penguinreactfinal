import { Link } from "react-router-dom"

const Item = ({ product }) => {

  return (
    <div className="item">
      <img src={product.image} className="img-item" alt="" width={100} />
      <div className="item-box">
        <p className="text-item">{product.name}</p>
        <p className="text-item">${product.price}</p>
        <Link to={ "/detail/" + product.id } className="button-detail" > Ver detalles </Link> 
      </div>
      
    </div>
  )
}
export default Item