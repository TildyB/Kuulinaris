import { useParams, useLocation } from "react-router-dom"
import ProductPage  from "./ProductPage";

const SubCategory = () => {

  const { category, subcategory } = useParams()
  console.log(category);
  console.log(subcategory);

  const location = useLocation()
  const { subcat, filteredProducts } = location.state
  console.log(filteredProducts);
 
  const subFilteredProducts = filteredProducts.filter(prod => prod.subcategory === subcat)
  console.log(subFilteredProducts);

  const subSubCategory = []

  return(
    <>
    
    <div>{subcat}</div>
    {subFilteredProducts[0].subsubcategory === "" ?
      <ProductPage {...{subFilteredProducts}} /> :
      <p>van</p>
    }

    </>
  )
}
export default SubCategory