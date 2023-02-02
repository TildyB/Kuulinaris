import { useLocation } from "react-router-dom"
import Product from "../components/Product"
import { useNavigate } from "react-router-dom"

const ProductPage = ({subFilteredProducts}) => {

  const navigate = useNavigate()
  
  const location = useLocation()
  const subsubcat = location.state.subsubcat
  const data = location.state.subFilteredProducts


  let filteredData

  if( subsubcat !== undefined){

  filteredData = data.filter(prod => prod.subsubcategory === subsubcat)

}



  return(
    <>
    <div>
      {subFilteredProducts 
      ?  subFilteredProducts.map(prod => <Product key={prod.id} item={prod}/>)
      : filteredData.map(prod => <Product key={prod.id} item={prod}/> )
        }
    </div>
    <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}
export default ProductPage