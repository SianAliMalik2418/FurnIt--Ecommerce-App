import React from 'react'
import HeroSection from '../components/HeroSection'
import ShopByCategory from '../components/ShopByCategory'
import NewArrivals from '../components/NewArrivals'
import Trending from '../components/Trending'
import About from '../components/About'
import DetailedAbout from '../components/DetailedAbout'

function HomePage() {
  return (
    <>
    
      <HeroSection />
      <ShopByCategory />
      <NewArrivals />
      <About />
      <Trending />
      <DetailedAbout/>
    </>
  )
}

export default HomePage