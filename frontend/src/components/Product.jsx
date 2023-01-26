const Product = ({item}) => {
    return ( 
        <>
            <h3>{item.title}</h3>
            <img src={`http://localhost:3333/${item.filename}`}  alt="" />
            <p>{item.description}</p>
            <p>€ {item.price}</p>
            <button>Adjál ilyet!</button>
        </>
     );
}
 
export default Product;