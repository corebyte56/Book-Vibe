import React from 'react'
import BannerBook from '../../assets/BannerBook.png'
const Banner = () => {
  return (
    <div className='flex justify-between bg-gray-400 px-25 py-20 rounded-3xl items-center'>
      <div className='space-y-10'>
        <h1 className='text-6xl font-bold leading-20'>Books to freshen up <br /> your bookshelf</h1>
        <button className='bg-green-700 px-7 py-5 text-xl font-bold rounded-2xl cursor-pointer'>View The List</button>
      </div>

      <img src={BannerBook} alt="Book" />
    </div>
  )
}

export default Banner
