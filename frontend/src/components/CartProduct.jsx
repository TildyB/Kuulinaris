import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

const CartProduct = ({ item }) => {
  const { cartItems, addCart, setCartItems } = useContext(CartContext);

  const removeItem = () => {
    if (item.pieces === 1) {
      setCartItems(cartItems.filter((prod) => prod.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((product) => {
          if (item.id === product.id) {
            return { ...product, pieces: product.pieces - 1 };
          } else {
            return product;
          }
        })
      );
    }
  };

  const removeAll = () => {
    setCartItems(cartItems.filter((prod) => prod.id !== item.id));
  };

  console.log("CartProducts", cartItems);

  return (
    <div className={styles.product}>
      <h3>{item.title}</h3>
      <img src={`http://localhost:3333/${item.filename}`} alt="" />
      <p>{item.description}</p>
      <p>{item.price} Ft</p>
      <h1>{item.pieces}</h1>
      <button onClick={() => addCart(item)}>Adjál ilyet!</button>
      <button disabled={item.pieces === 0 ? true : false} onClick={removeItem}>
        Telyi lájda!
      </button>
      <button onClick={removeAll}>Minden Kuka!</button>
    </div>
  );
};

export default CartProduct;
