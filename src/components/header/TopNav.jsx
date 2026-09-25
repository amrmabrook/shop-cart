import { Link } from "react-router-dom";
//style
import "./header.css";
//icons
import { FaShopify } from "react-icons/fa6";

import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { CartProvider } from "../../contextStore/CartProvider";
import { FavoritProvider } from "../../contextStore/FavoritProvider";

function TopNav() {


const {cart} = useContext(CartProvider)
const {favorit} = useContext(FavoritProvider)



  return (
    <div className="top-nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <FaShopify />
          </Link>
          ShopCart
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search"
            placeholder="search products..."
          />
          <span className="search-icon">
            <CiSearch />
          </span>
        </div>
        <nav className="icons">
          <li>
            <Link>
              <FaUser />
              profile
            </Link>
          </li>
          <li>
            <span className="count">{favorit.length}</span>

            <Link to='/favorit'>
              <MdFavoriteBorder />
              favorit
            </Link>
          </li>
          <li>
            <span className="count">{cart.length}</span>
            <Link to='/cart'>
              <TiShoppingCart />
              cart
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default TopNav;
