import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from './Context'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsDetails from './Component/ProductsDetails'
import Products from './Component/Products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={
      // <Context>
        <App/>

    
      }>

      </Route>
        <Route path='/product/:productId' element={<ProductsDetails/>}>

        </Route>
        <Route path="/products" element={<Products/>}></Route>
      

      
    
      </Routes>
    

    </Router>
   
  </React.StrictMode>
)
