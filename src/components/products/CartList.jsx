import { useContext } from 'react'

import './products.css'
import { CartProvider } from '../../contextStore/CartProvider'

import { RiDeleteBin5Line } from "react-icons/ri";



function CartList() {
    const {cart,removePro,increaseQuantity,decreaseQuantity,totalPrice} = useContext(CartProvider)
    
    
    
  return (
  

  <div className="cart">
        <ul className="cart-list">
            {cart.map(item=><li key={item.id}>
            <img src={item.img} alt="" />
        <div className="cart-info">
                <h3>{item.title}</h3>
            <p>{item.price}$</p>
            <div className="product-quantity">
                <button className="increament" onClick={()=>increaseQuantity(item.id)}>+</button>
                <button>{item.quantity}</button>
                <button className="decreament" onClick={()=>decreaseQuantity(item.id)}>-</button>
            </div>
        </div>

        <button className="delet" onClick={()=>removePro(item.id)}>
            <RiDeleteBin5Line />
        </button>
        </li>)}
        
        
        </ul>
        <h3 className="total">
            total:
            <span >{totalPrice()} $</span>
        </h3>
    </div> 




  )
}

export default CartList