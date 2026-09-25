import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardPro from "./CardPro"

function Products() {
    const {category} = useParams()
    
    const [product,setProduct] = useState([])
    
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${category}`).then(res=>res.json()).then(res=>setProduct(res.products))
        
},[category])
    
  return (
    <>

<div className="container">
  <h1 className="cat-title">{category}</h1>
  <div className="products-container">
    {product.map(item=><CardPro key={item} pro={item}/>)}
  </div>
</div>
    
    </>
  )
}

export default Products