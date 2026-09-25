import {NavLink,Link} from "react-router-dom"
import { FiMenu } from "react-icons/fi";

import { FaCaretDown } from "react-icons/fa6";

import "./header.css";
import { useContext, useState } from "react";

import { CartProvider } from "../../contextStore/CartProvider";

function BottomNav() {

    const [isHide,setIshide] = useState(false)

    const {categories} = useContext(CartProvider)



    






  return (
    <div className="bottom-nav">

<div className="container">
    
        <div className="category">
            <ul className={isHide?"categories":"hide"}>

             {categories.map(cat=><li key={cat}>
                <Link to={`products/category/${cat}`}>{cat}</Link>
             </li>)}
            </ul>
            
            
            
                <button className="cateogry-btn" onClick={()=>setIshide(!isHide)}>
              
                <FiMenu />

                All Categories
                <FaCaretDown />
            </button>
        </div>

            {/* nav list */}
            <nav className="category-list">
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Electronics</NavLink>

                    </li>
                    <li>
                        <NavLink>Fashion</NavLink>

                    </li>
                    <li>
                        <NavLink>Beauty</NavLink>
                    </li>
                     <li>
                        <NavLink>Sports</NavLink>
                    </li>
                </ul>
            </nav>
</div>
        </div>
  )
}

export default BottomNav