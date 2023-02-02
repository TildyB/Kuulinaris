import { useNavigate } from 'react-router-dom';
import styles from './Product.module.css'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Product = ({item}) => {
    const {addCart} = useContext(CartContext)
    const navigate = useNavigate();
    
    return ( 
        <div className={styles.product}>
            <h3>{item.title}</h3>
            <img src={`http://localhost:3333/${item.filename}`}  alt="" />
            <p>{item.description}</p>
            <p>{item.price} Ft</p>
            <button onClick={() => addCart(item)}>Adjál ilyet!</button>
        </div>
     );
}
 
export default Product;