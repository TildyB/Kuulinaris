import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { dataLoader as dataLoader } from './App'
import './index.css'
import ErrorElement from './pages/ErrorElement'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Category from './pages/Category'
import SubCategory from './pages/SubCategory'

const router = createBrowserRouter([
  { path: '/',
  element: <App/>,
  errorElement: <ErrorElement/>,
  id: 'root',
  loader: dataLoader,
  children: [
    { path: 'home',
      element: <Home/>},
    { path: 'about',
      element: <About/>,
    },
    { path: 'contact',
      element: <Contact/>},
    { path: ':category',
      element: <Category/>, 
    },
    {path: ':category/:subcategory', 
        element: <SubCategory />}
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
