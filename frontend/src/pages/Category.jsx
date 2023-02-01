import { useParams,useRouteLoaderData } from "react-router-dom"
import CategoryLabel from "../components/CategoryLabel"
import { Link } from "react-router-dom"
import SubCategory from "./SubCategory"

const Category = () =>{
    const params = useParams()
    const products = useRouteLoaderData('root')
    const filteredProducts = products.filter(product => product.category === params.category)
    

    const productSubCategories = [];
    filteredProducts.map((product) => {
    if (!productSubCategories.includes(product.subcategory)) {
      productSubCategories.push(product.subcategory);
    }
    });
    

    
    return(
        <div style={{backgroundColor: "lightgrey"}}>
        <div>{params.category}</div>
        {productSubCategories.map(subcat => (
            <Link to={subcat} key={subcat} state={{subcat, filteredProducts}}>
            <CategoryLabel subcat={subcat} />
            </Link> 
            )
        )}
        </div>
    )
}

export default Category