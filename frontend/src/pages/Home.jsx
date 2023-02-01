import { useState, useEffect } from 'react'
import GetData from '../util/getData';
import Product from '../components/Product';
// import { Outlet } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

function Home() {
  const [data, setData] = useState();

  
  const test = useRouteLoaderData('root')
  useEffect(() => {
    
      setData(test)
    
  }, [])




  return (
    <div>
      <div className="container">
        {data && data.map((item, i) => <Product key={i} {...{item}}/>)}
      </div>
    </div>
  )
}

export default Home
