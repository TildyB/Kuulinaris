import { useNavigate, Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const MainPageProduct = ({ item }) => {
  const { addCart } = useContext(CartContext);

  return (
    <div className={styles.product}>
      <Link to={item.category + "/"+item.subCategory+"/"+item.title + `/` + item.articleNumber } state={{item}}>
      <h3>{item.title}</h3>
        <img src={`http://localhost:3333/${item.filename}`} alt="" />
      </Link>
        <p>{item.price} Ft</p>
      <button onClick={() => addCart(item)}>Kosárba</button>
    </div>
  );
};

export default MainPageProduct;
