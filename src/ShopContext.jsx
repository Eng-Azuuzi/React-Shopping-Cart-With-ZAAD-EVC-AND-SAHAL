import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./ShopReducer";

const shopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    // Add the product to the cart
    const updatedProducts = state.products.concat(product);
    calculateTotal(updatedProducts);
    // Dispatch the action to the reducer
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products:updatedProducts
      },
    });
  };

  const removeFromCart = (product) => {
    // Filter the product from the cart
    const updatedProducts = state.products.filter(p => p.id !== product.id);
    calculateTotal(updatedProducts);
    // Dispatch action to update the global state (cart)
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedProducts,
      },
    });
  };

  const calculateTotal = (products) => {

    let total = 0;
    products.forEach(pro => {
      total += pro.price;
    });
    dispatch({
      type: "CALCULATE_TOTAL_PRICE",
      payload: total,
    })
  }
  
  const clearCart = (products) => {
    dispatch({
      type: "CLEAR_CART",
      payload:initialState,
    })
  } 

  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <shopContext.Provider value={values}>
    {children}
  </shopContext.Provider>;
};

const useShop = () => {
  const context = useContext(shopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export default useShop;
