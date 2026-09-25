import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartContext from "./contextStore/CartContext.jsx";

import FavoritContext from "./contextStore/FavoritContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContext>
      <FavoritContext>
        <App />
      </FavoritContext>
    </CartContext>
  </StrictMode>,
);
