import Navbar from "./components/Navbar"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/homePage"
import Footer from "./components/Footer"
import CartPage from "./pages/CartPage"
import ProductsPage from "./pages/ProductsPage"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"



function App() {

  useEffect(function () {
    AOS.init();
  }, [])

  return (
    <Router>

      <div className="w-screen min-h-screen overflow-hidden">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition: Slide
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />

        </Routes>

        <Footer />
      </div>

    </Router>



  )
}

export default App
