import Menubar from "./components/MenuBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useRouteLoaderData } from "react-router-dom";
import GetData from "./util/getData";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";
import "./App.css"

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const products = useRouteLoaderData('root')


    return (
        <CartProvider>
            <Menubar {...{products, setIsOpen, isOpen}}/>
                
            <Outlet context={isOpen}/>

            <Footer/>

        </CartProvider>

     );
}
 
export default App;

export async function dataLoader () {
        
        return await GetData()
      
}