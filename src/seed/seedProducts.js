import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";


const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProdcuts} )=> {
        addDoc(productsRef, dataProdcuts)
    })
    console.log("productos subidos")
    return
}
seedProducts()