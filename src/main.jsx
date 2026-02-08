import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Layouts/RootLayout.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Products from './Pages/Products.jsx'
import DetailedProduct from './Pages/DetailedProduct.jsx'
const router=createBrowserRouter([{
  path:'/',
  Component:RootLayout,
  children:[{
    index:true,
    Component: Home
  },{
    path:"/contact",
    Component:Contact
  },{
    path:"/aboutus",
    Component:AboutUs
  },{
    path:"/products",
    Component:Products
  }{
    path:'/detailedProducts',
    Component:DetailedProduct
  }]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}>

</RouterProvider>
  </StrictMode>,
)
