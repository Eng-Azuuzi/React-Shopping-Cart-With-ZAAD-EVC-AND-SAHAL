import useShop from "../ShopContext";

const CartProducts = () => {
  const { products, total, removeFromCart } = useShop();
    
  return (
    <div className="cart-products">
      <h2>Cart Products</h2>
        {
          products.map((product) => (
            <div className="cart-product">
              <div className="cart-title-image">
                <img src={product.image} alt="" />
                <span>{product.name}</span>
              </div>
              <h5>${product.price}</h5>
              <span className="delete" onClick={() => removeFromCart(product)}>x</span>
            </div>
          ))
        }
        <div div className="total-price">
      <h2>Total price: ${total.toFixed(2)}</h2>

    </div>
        </div>
  );
};

export default CartProducts;
