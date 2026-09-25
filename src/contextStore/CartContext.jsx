import { useState,useEffect } from "react"
import { CartProvider } from "./CartProvider" 

const CartContext = ({children})=> {
  
  const msg = "this form cart "   
  
//get from localstorg
  const [cart,setCart] = useState(()=>{
    let saved = localStorage.getItem("cartList")
    return saved? JSON.parse(saved) : [] 
  })


  const addToCart = (pro)=>{
    let existPro = cart.find(el=>el.id === pro.id)
    if(existPro){return}

    setCart(prev=>([...prev,{
      id:pro.id,title:pro.title,price:pro.price,quantity:1,images:pro.images
    }]))

  }


  const increaseQuantity = (proId)=>{
    setCart(prev=>prev.map(el=>el.id === proId?{...el,quantity:el.quantity+1}:el))
  }
  
  const decreaseQuantity = (proId)=>{
    setCart(prev=>prev.map(el=>el.id === proId && el.quantity>1 ?{...el,quantity:el.quantity-1}:el))
  }

  const removePro =(proId)=>{
    setCart(prev=>[...prev.filter(el=>el.id !== proId)])

  }

  const totalPrice = ()=>{
    let sum = cart.reduce((total,product)=>{
      return total + (product.price * product.quantity)
    },0)
    return sum.toFixed(2)
  }
  

  
  
  //add  cart to localstorag
  useEffect(()=>{

    localStorage.setItem("cartList",JSON.stringify(cart))
  },[cart])

  

  
  //////////////////////////////////////
  //  categories products and categories liset 
  const [categories,setCategories] = useState([])
     useEffect(()=>{
        fetch("https://dummyjson.com/products/category-list").then(res=>res.json()).then(res=>setCategories(res))
    })
    
    
  return (
    
    <CartProvider.Provider value={{msg,categories,setCategories,cart,totalPrice,addToCart,removePro,increaseQuantity,decreaseQuantity}}>
        {children}
    </CartProvider.Provider>
  )
}

export default CartContext