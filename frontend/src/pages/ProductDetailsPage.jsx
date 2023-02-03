import { useLocation } from "react-router-dom";


const ProductDetailsPage = () => {

  const location = useLocation()

  console.log(location.state)

  return (
    <div>haho</div>
    );
};

export default ProductDetailsPage;
