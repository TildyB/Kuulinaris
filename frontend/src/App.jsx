import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GetData from './util/getData';
import Product from './components/Product';

function App() {
  const [data, setData] = useState();

useEffect(() => {
  const init = async () => {
    setData(await GetData())
  }
  init()
}, [])

console.log(data);
  return (
    <div className="App">
      <h1>Harcsa</h1>
      <img src='http://localhost:3333/1.jpg' alt="" />
      {data && data.map((item, i) => <Product key={i} {...{item}}/>)}
    </div>
  )
}

export default App
