import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import CartProduct from '../components/CartProduct'

const Cart = () => {
    const [sum, setSum] = useState(150);
    const {cartItems} = useContext(CartContext)
    useEffect(() => {
        let acc = 0;
    
        for (let item of cartItems) {
          acc += item.price * item.pieces;
        }
        setSum(acc);
      }, [cartItems]);

    
    return (
        <>
            <h1>Cart Items</h1>
            {cartItems.map(item => <CartProduct key={item.id} {...{item}}/>)}
            <h3>{sum}</h3>
        </> 
     );
}
 
export default Cart;