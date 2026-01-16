import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AllProducts />
        <Footer />
    </div>
  )
}

export default Home