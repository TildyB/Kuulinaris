import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

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

export function dataLoader () {
    
        let harcsa = 'Harcsamacsa'
        return harcsa
      
}