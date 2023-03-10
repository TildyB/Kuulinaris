import * as React from "react";
import styles from "./DrawerMenu.module.css";
import CartProduct from "./CartProduct";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const DrawerMenu = ({ setIsOpen }) => {
  const [sum, setSum] = useState(150);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    let acc = 0;

    for (let item of cartItems) {
      acc += item.price * item.pieces;
    }
    setSum(acc);
  }, [cartItems]);

  return (
    <>
      <div className={styles.background} onClick={() => setIsOpen(false)}></div>
      <div id={styles.slider}>
        {cartItems.length > 0 ? (
          <div >
            {cartItems.map((item) => (
            <div key={item.id}>
              <CartProduct  {...{ item }} />
            </div>
            ))}
             <h3>{sum} Ft</h3>
              <Link onClick={() => setIsOpen(false)}to="cart">Tovább a kosárra</Link>
          </div>
        ) : (
          <h1>Üres a kosarad! {":("}</h1>
        )}
      </div>
    </>
  );
};

export default DrawerMenu;
