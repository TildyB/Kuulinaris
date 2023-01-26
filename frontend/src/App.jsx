import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useRouteLoaderData } from "react-router-dom";
import GetData from "./util/getData";

const App = () => {

    return (
        <>
            <Navbar/>

            <Outlet/>

            <Footer/>
        </>

     );
}
 
export default App;

export async function dataLoader () {
        
        return await GetData()
      
}