import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import "./itemlistcontainer.css"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  const getProducts = () => {
    const serviciosRef = collection( db, "servicios")
    getDocs(serviciosRef)
      .then((dataDb)=> {
        const serviciosDb = dataDb.docs.map((servicioDb)=> {
          return { id: servicioDb.id, ...servicioDb.data() }
        })
        setProducts(serviciosDb)
      })
  }

  const getProductsByCategory = () => {
    const serviciosRef = collection( db, "servicios")
    const queryCategories = query(serviciosRef, where("category", "==", idCategory))
    getDocs(queryCategories)
      .then((dataDb)=> {
        const serviciosDb = dataDb.docs.map((servicioDb)=>{
          return { id: servicioDb.id, ...servicioDb.data() }
        })
        setProducts(serviciosDb)
      })


  }


  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
   
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer