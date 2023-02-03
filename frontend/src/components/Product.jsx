import { useNavigate, Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Product = ({ item }) => {
  const { addCart } = useContext(CartContext);
  const navigate = useNavigate();


  return (
    <div className={styles.product}>
      <Link to={ item.title + `/` + item.articleNumber1 } state={{item}}>
      <h3>{item.title}</h3>
        <img src={`http://localhost:3333/${item.filename}`} alt="" />
      </Link>
        <p>{item.price} Ft</p>
      <button onClick={() => addCart(item)}>Adjál ilyet!</button>
    </div>
  );
};

export default Product;
