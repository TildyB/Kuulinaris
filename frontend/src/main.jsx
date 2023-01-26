import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { dataLoader as dataLoader } from './App'
import './index.css'
import ErrorElement from './util/ErrorElement'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  { path: '/',
  element: <App/>,
  errorElement: <ErrorElement/>,
  
  children: [
    { index: true,
    element: <Home/>},
    { path: 'about',
    element: <About/>,
    loader: dataLoader},
    
    { path: 'contact',
    element: <Contact/>}
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
