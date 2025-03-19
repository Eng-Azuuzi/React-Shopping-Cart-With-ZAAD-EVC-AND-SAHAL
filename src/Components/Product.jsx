import { useEffect, useState } from "react";
import useShop from "../ShopContext";

const Product = ({ product }) => {
  const { addToCart, products, total ,removeFromCart} = useShop();
  const [isInCart,SetIsInCart]=useState(true);
  
  useEffect(() => { 
    const iscart = products.filter(pro => pro.id == product.id);
    if (iscart.length > 0)
    {
      SetIsInCart(true);
    }
    else 
    {
      SetIsInCart(false);  
    }

    },
    [products]);
  

  function handleAddToCart() {
    if (isInCart)
    {
      removeFromCart(product);
    }
    else
    {
      addToCart(product);
    }
      
  }

  return (
    <div
      className="card"
      style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      <button className={`btn ${isInCart? "btn-secondary":"btn-primary"}`} onClick={handleAddToCart}>
        { isInCart? "-" : "+" }
      </button>
    </div>
  );
};

export default Product;
