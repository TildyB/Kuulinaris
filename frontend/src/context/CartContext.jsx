import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider ({children}) {
    const [items, setItems] = useState([]);
    
    const addCartItem = (item) => {
        console.log(items);
        let newArr = items
        if (newArr.length > 0) {
            for (const prod of newArr) {
                if (prod.id === item.id) {
                    console.log('nem ures de van egyezes');
                    prod.pieces++
                } else {
                    console.log('nem ures, nincs egyezes');
                    item.pieces = 1
                    newArr.push(item)
                }
            }
        } else {
            console.log('ures a kosar');
            item.pieces = 1
            newArr.push(item)
            
        }
        // setItems(newArr)
        console.log('Joozsi', newArr);
       
        
    }

    return (
        <CartContext.Provider value={{addCartItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext