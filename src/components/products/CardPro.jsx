import "./products.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { CartProvider } from "../../contextStore/CartProvider";
import { useContext } from "react";
import { FavoritProvider } from "../../contextStore/FavoritProvider";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CardPro({ pro }) {
  const { addToCart, cart } = useContext(CartProvider);
  const navigate = useNavigate();
  const isInCart = cart.some((el) => el.id === pro.id);

  const { addToFavorit, removeFav, favorit } = useContext(FavoritProvider);
  const isFavorit = favorit.some((el) => el.id === pro.id);

  //show notification
  const showAlert = () => {
    toast.success(
      <div>
        <p className="title-msg">{pro.title}</p>
        <span className="alert-msg">added to cart</span>
        <button
          onClick={() => navigate("/cart")}
          style={{ display: "block" }}
          className="view-cart"
        >
          view Cart
        </button>
      </div>,
      {
        position: "bottom-right",
        duration: 3000,
        style: {
          borderRadius: "10px",
          backgroundColor: "rgba(173, 173, 163, 0.2)",
        },
      },
    );
  };

  const removeAlert = () => {
    toast.error(
      <div>
        <p style={{display:"block"}}>{pro.title}</p>
        <p>remove from favorit</p>
      </div>,
      {
        position: "bottom-right",
        duration: 3000,
        style: {
          borderRadius: "10px",
        },
      },
    );
  };


  return (
    <div className="card">
      <span
        className="favorit"
        onClick={() => {
          isFavorit
            ? setTimeout(() => {
                removeFav(pro);
                removeAlert();
              }, 1500)
            : addToFavorit(pro);
        }}
      >
        {isFavorit ? <MdFavorite /> : <MdFavoriteBorder />}
      </span>

      <img src={pro.images?.[0] || pro.img} alt="" />
      <h3>{pro.title}</h3>
      <p>{pro.price}$</p>

      <button
        className="add-cart"
        onClick={() => {
          isInCart
            ? toast.error("this product in cart", { position: "bottom-right" })
            : addToCart(pro);
          showAlert();
        }}
      >
        add to cart
      </button>
    </div>
  );
}

export default CardPro;
