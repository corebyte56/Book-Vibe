import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import {motion} from 'framer-motion'
import { bookContext } from '../../Context/context'
const BookDetails = () => {
    const {bookId} = useParams()
    
    const books = useLoaderData()
    const {handleAddtoRead} = useContext(bookContext)
    const findBook = books.find(book => book.bookId == bookId)

    
    
   // console.log(bookId, books, findBook);
    const {
        bookName,
        author,
        image,
        totalPages,
        rating,
        categorytags,
        publisher,
        tags,
        yearOfPublishing
    } = findBook
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    {/* Left Image */}
    <div className="bg-[#1f1f1f] border border-gray-800 rounded-3xl p-8 flex justify-center items-center shadow-xl">
      <img
        src={image}
        alt={bookName}
        className="w-full max-w-sm object-contain rounded-2xl"
      />
    </div>

    {/* Right Content */}
    <div className="space-y-6 bg-[#1f1f1f] border border-gray-800 rounded-3xl p-8 shadow-xl">
      
      {/* Title */}
      <div className="space-y-2 border-b border-gray-800 pb-5">
        <h1 className="text-4xl font-bold text-white leading-tight">
          {bookName}
        </h1>
        <p className="text-lg text-gray-400">
          By : <span className="font-medium text-gray-200">{author}</span>
        </p>
      </div>

      {/* Category + Tags */}
      <div className="space-y-4 border-b border-gray-800 pb-5">
        <p className="text-lg font-medium text-gray-200">{categorytags}</p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-gray-300">Tag :</span>

          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1 rounded-full bg-[#2d2d2d] text-green-400 text-sm font-medium border border-green-900"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Book Info */}
      <div className="space-y-4 border-b border-gray-800 pb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Number of Pages:</span>
          <span className="font-semibold text-white">{totalPages}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Publisher:</span>
          <span className="font-semibold text-white">{publisher}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Year of Publishing:</span>
          <span className="font-semibold text-white">
            {yearOfPublishing}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Rating:</span>
          <span className="font-semibold text-yellow-400">
            {rating} ★
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 pt-2">
  <motion.button
  onClick={() => handleAddtoRead(findBook)}
    whileHover={{
      y: -4,
      scale: 1.04,
      boxShadow: "0px 12px 25px rgba(255,255,255,0.08)",
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 18,
    }}
    className="px-8 py-3 border border-gray-600 rounded-xl font-semibold text-white cursor-pointer"
  >
    Add To Read List
  </motion.button>

  <motion.button
    whileHover={{
      y: -4,
      scale: 1.04,
      boxShadow: "0px 15px 30px rgba(6,182,212,0.35)",
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 18,
    }}
    className="px-8 py-3 bg-cyan-500 text-white rounded-xl font-semibold  shadow-lg cursor-pointer"
  >
    Add To Wishlist
  </motion.button>
</div>
    </div>
  </div>
</div>
  )
}

export default BookDetails
