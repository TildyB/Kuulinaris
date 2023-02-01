import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useRouteLoaderData } from "react-router-dom";
import GetData from "./util/getData";
import { CartProvider } from "./context/CartContext";

const App = () => {

    const products = useRouteLoaderData('root')


    return (
        <CartProvider>
            <Navbar {...{products}}/>

            <Outlet/>

            <Footer/>
        </CartProvider>

     );
}
 
export default App;

export async function dataLoader () {
        
        return await GetData()
      
}