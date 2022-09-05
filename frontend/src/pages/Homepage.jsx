import React from 'react';
import Announcement from '../komponente/Announcement';
import Navbar from '../komponente/Navbar';
import Slider from '../komponente/Slider';
import Products from '../komponente/Products';
import Footer from '../komponente/Footer';

const Homepage = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Homepage
