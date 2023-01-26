import styles from './Product.module.css'

const Product = ({item}) => {
    return ( 
        <div className={styles.product}>
            <h3>{item.title}</h3>
            <img src={`http://localhost:3333/${item.filename}`}  alt="" />
            <p>{item.description}</p>
            <p>€ {item.price}</p>
            <button>Adjál ilyet!</button>
        </div>
     );
}
 
export default Product;