import { useLoaderData } from "react-router-dom";

const About = () => {

    let test = useLoaderData()
    console.log(test);
    return ( 
        <div>
            <h1>About Page</h1>
            <p>Minden ami about</p>
        </div>
     );
}
 
export default About;