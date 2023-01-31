import { useParams, useLocation, Link } from "react-router-dom"
import CategoryLabel from "../components/CategoryLabel";
import ProductPage  from "./ProductPage";

const SubCategory = () => {

  const { category, subcategory } = useParams()
  console.log(category);
  console.log(subcategory);

  const location = useLocation()
  const subcat = location.state.subcat 
  const filteredProducts = location.state.filteredProducts
  // const { subcat, filteredProducts } = location.state
  console.log(filteredProducts);
 
  const subFilteredProducts = filteredProducts.filter(prod => prod.subcategory === subcat)
  console.log(subFilteredProducts);

  const subSubCategory = []
  subFilteredProducts.map((product) => {

    if (!subSubCategory.includes(product.subsubcategory)) {
      subSubCategory.push(product.subsubcategory);
    }
    });



  // const subSubFilteredProducts = subFilteredProducts.filter(prod => prod.subsubcategory )

  return(
    <>
    
    <div>{subcat}</div>
    {subFilteredProducts[0].subsubcategory === "" ?
      <ProductPage {...{subFilteredProducts}} /> :
      subSubCategory.map(subsubcat => (
        // subFilteredProducts.filter(item => item.subsubcategory === subsubcat)
        <Link to={subsubcat} key={subsubcat} state={{subsubcat, subFilteredProducts}} >
          <CategoryLabel subcat={subsubcat}/>
        </Link>
      ) )
    }

    </>
  )
}
export default SubCategory