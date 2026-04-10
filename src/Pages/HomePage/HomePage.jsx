import React from 'react'
import Navbar from '../../Compnents/Navbar/Navbar'
import Banner from '../../Compnents/Banner/Banner'
import AllBooks from '../../Compnents/AllBooks/AllBooks'

const HomePage = () => {
  return (
    <div className='container mx-auto my-10 md:my-27 flex flex-col items-center'>
      <Banner />
      <AllBooks />
    </div>
  )
}

export default HomePage
