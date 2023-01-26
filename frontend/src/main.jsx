import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { dataLoader as dataLoader } from './App'
import './index.css'
import ErrorElement from './pages/ErrorElement'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

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
    element: <Contact/>}
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
