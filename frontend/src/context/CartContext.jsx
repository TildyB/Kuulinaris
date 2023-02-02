import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider ({children}) {
    

    const[cartItems,setCartItems] = useState([])
    const addCart = (item) =>{
        if(cartItems.length==0){
            item.pieces=1;
            setCartItems([item])
        }else{
            let isSame = cartItems.some(prod => prod.id === item.id)
            if(!isSame){            
                item.pieces=1;
                setCartItems(prev => [...prev,item])
            }else{
                setCartItems(cartItems.map((product) =>item.id ===product.id ? {...product, pieces:product.pieces+1} : product))
            }
        }
        console.log('CartContext',cartItems)
    }

    


    return (
        <CartContext.Provider value={{cartItems, addCart, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext