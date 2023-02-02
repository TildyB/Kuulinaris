import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartProduct from '../components/CartProduct'

const Cart = () => {

    const {cartItems} = useContext(CartContext)
    console.log('Cart',cartItems);
    return (
        <>
            <h1>Cart Items</h1>
            {cartItems.map(item => <CartProduct key={item.id} {...{item}}/>)}
        </> 
     );
}
 
export default Cart;