import { useRouteError } from "react-router-dom";

const ErrorElement = () => {

    const error = useRouteError()
    return ( 
        <div>
            <h1>Error van</h1>
            <p>{error.message || error.statusText}</p>
        </div>

    );
} 
export default ErrorElement;