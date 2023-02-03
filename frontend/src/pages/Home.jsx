import { useState, useEffect } from 'react'
import GetData from '../util/getData';
import Product from '../components/Product';
// import { Outlet } from 'react-router-dom';
import { useLocation, useOutletContext, useRouteLoaderData } from 'react-router-dom';

function Home() {
  const [data, setData] = useState();

  const outletContext = useOutletContext()
  console.log(outletContext)

  
  const test = useRouteLoaderData('root')
  useEffect(() => {
      setData(test.filter((item)=> item.onSale === true))
  }, [])




  return (
  
      <div className="container">
        {data && data.map((item, i) => <Product key={i} {...{item}}/>)}
      </div>
    
  )
}

export default Home
