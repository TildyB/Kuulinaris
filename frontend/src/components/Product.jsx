import { Link } from 'react-router-dom';
import styles from './Product.module.css'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Product = ({item}) => {
    const {addCart} = useContext(CartContext)
    
    return ( 
        <div className={styles.product}>
            <h3>{item.title}</h3>
            <img src={`http://localhost:3333/${item.filename}`}  alt="" />
            <p>{item.description}</p>
            <p>{item.price} Ft</p>
            <button onClick={() => addCart(item)}>Adjál ilyet!</button>
            <Link to={`product/${item.id}`}></Link>
        </div>
     );
}
 
export default Product;