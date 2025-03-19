import React from "react";
import CartProducts from "../Components/CartProducts";
import Payement from "../Components/Payement";
import useShop from "../ShopContext";

function Cart() {
  const { products } = useShop();
  return (
    <div className="cart-container">
      {products.length !== 0 ? (
        <>
          <CartProducts />
          <Payement />
        </>
      ) : (
        <h2 style={{color:"red",marginLeft:"auto"}}>Your Cart Is Empty</h2>
      )}
    </div>
  );
}

export default Cart;
