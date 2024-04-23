import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, About, Error, Cart, PrivateRoute, Products, SingleProduct, Checkout } from './pages/index'


function App() {

  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products:id" element={<Products>
            <SingleProduct />
          </Products>}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
          <Route />
        </Routes>
      </Navbar>
      <Footer />
    </Router>
  )
}

export default App
