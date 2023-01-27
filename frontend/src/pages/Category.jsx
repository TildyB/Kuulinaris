import { useParams,useRouteLoaderData } from "react-router-dom"

const Category = () =>{
    const params = useParams()
    const products = useRouteLoaderData('root')
    const filteredProducts = products.filter(product => product.type === params.type.toLowerCase() )
    console.log(filteredProducts)

    return(
        <>
        <div>{params.type}</div>
        {filteredProducts.map(product => <h1>{product.title}</h1>)}
        </>
    )
}

export default Category