import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartProvider } from "../../contextStore/CartProvider";
import "./products.css";

// import logo from "../../photos/logo.png";
function Category() {
  const { categories } = useContext(CartProvider);
  const imgs = {
    beauty:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    smartphones:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
    fragrances:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    furniture:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
    groceries:
      "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
    "home-decoration":
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
      "kitchen-accessories":"https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp",
      "laptops":"https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp",

      "mens-shirts":"https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
  };

  return (
    <div className="category-section">
      <div className="container">
        <h3>shop by category</h3>

        <ul className="cat-list">
          {categories.slice(0, 8).map((el) => (
            <li key={el}>
              <Link to={`products/category/${el}`}>
                <div className="cat-img">
                  <img src={imgs[`${el}`]} alt="" />
                </div>
                {el}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
