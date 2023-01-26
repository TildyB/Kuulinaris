import { useState, useEffect } from 'react'
import GetData from '../util/getData';
import Product from '../components/Product';
// import { Outlet } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

function Home() {
  const [data, setData] = useState();

useEffect(() => {
  const init = async () => {
    setData(await GetData())
  }
  init()
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
