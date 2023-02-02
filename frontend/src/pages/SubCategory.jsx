import { useParams, useLocation, Link } from "react-router-dom";
import CategoryLabel from "../components/CategoryLabel";
import ProductPage from "./ProductPage";
import { useNavigate } from "react-router-dom";

const SubCategory = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const subcat = location.state.subcat;
  const filteredProducts = location.state.filteredProducts;

  const subFilteredProducts = filteredProducts.filter(
    (prod) => prod.subcategory === subcat
  );

  const subSubCategory = [];
  subFilteredProducts.map((product) => {
    if (!subSubCategory.includes(product.subsubcategory)) {
      subSubCategory.push(product.subsubcategory);
    }
  });

  // const subSubFilteredProducts = subFilteredProducts.filter(prod => prod.subsubcategory )

  return (
    <>
      <div>{subcat}</div>
      {subFilteredProducts[0].subsubcategory === "" ? (
        <ProductPage {...{ subFilteredProducts }} />
      ) : (
      <div>
        {subSubCategory.map((subsubcat) => (
            <Link
              to={subsubcat}
              key={subsubcat}
              state={{ subsubcat, subFilteredProducts }}
            >
              <CategoryLabel subcat={subsubcat} />
            </Link>
          
        ))}
        <button onClick={() => navigate(-1)}>Go back</button>
        </div>  
      )}
    </>
  );
};
export default SubCategory;
