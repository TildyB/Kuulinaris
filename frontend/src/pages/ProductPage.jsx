import { useLocation } from "react-router-dom"
import Product from "../components/Product"
import { Link } from "react-router-dom"

const ProductPage = ({subFilteredProducts}) => {
  
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
        <Link to=".." relative="path">Back</Link>
    </>
  )
}
export default ProductPage