import Product from "../components/Product"

const ProductPage = ({subFilteredProducts}) => {
  return(
    <div>
      {subFilteredProducts.map(prod => <Product item={prod} />)}
    </div>
  )
}
export default ProductPage