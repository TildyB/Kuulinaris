import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductDetailsPage.module.css";

const ProductDetailsPage = () => {
  const location = useLocation();
  const item = location.state.item;
  const isInStock = item.quantity > 0 ? true : false;

  const [value, setValue] = useState(1);
  const [disable, setDisable] = useState(false);

 
  const onChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  useEffect(()=>{
    if(value < 2){
      setDisable(true)
    }else{
      setDisable(false)
    }
  }, [value])


  return (
    <div id={styles.productCard}>
      <img src={`http://localhost:3333/${item.filename}`} alt="" />
      <h3>{item.title}</h3>
      <p>{item.articleNumber}</p>
      {/* {item.quantity > 0 ? <h3>Szállítható</h3> : <h3>Nincs készleten</h3>} */}
      <p>{item.price}</p>
      <p>
        {item.priceperunit} Ft/ {item.unit}
      </p>
      <p>{item.description}</p>
      <p>Összetevők: {item.ingredients}</p>

      {isInStock ? (
        <div>
          <button onClick={()=>setValue(value-1)} disabled={disable}>
            -</button> 
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e)}
            disabled={item.quantity === 0 ? true : false}
            pattern="^[0-9]*$"
          />
          <button onClick={()=> setValue(value+1)}
          >+</button>
        </div>
      ) : (
        <h3>Nincs rendelhető mennyiség!</h3>
      )}

      <button> Kosárba </button>
    </div>
  );
};

export default ProductDetailsPage;
