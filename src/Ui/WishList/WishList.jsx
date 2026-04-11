import React from 'react'
import { motion } from "framer-motion";

const WishList = ({wishBook}) => {
  return (
    <div className="container mx-auto my-7 bg-[#1f2937] rounded-3xl border border-gray-700 shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Image */}
            <div className="w-full md:w-52 flex justify-center">
              <img
                src={wishBook.image}
                alt={wishBook.bookName}
                className="w-40 md:w-48 h-56 object-cover rounded-2xl shadow-md border border-gray-700"
              />
            </div>

            {/* Book Details */}
            <div className="flex-1 space-y-5">
              {/* Title + Author */}
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {wishBook.bookName}
                </h2>
                <p className="text-lg text-gray-400 mt-2">
                  By :{" "}
                  <span className="font-medium text-gray-200">
                    {wishBook.author}
                  </span>
                </p>
              </div>

              {/* Tags + Year */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-semibold text-gray-300">Tag</span>

                {wishBook.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                  >
                    #{tag}
                  </span>
                ))}

                <div className="flex items-center gap-2 text-gray-400 ml-2">
                  <span>📍</span>
                  <span>Year of Publishing: {wishBook.yearOfPublishing}</span>
                </div>
              </div>

              {/* Publisher + Pages */}
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm border-b border-gray-700 pb-5">
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span>Publisher: {wishBook.publisher}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>📄</span>
                  <span>Page {wishBook.totalPages}</span>
                </div>
              </div>

              {/* Category + Rating + Button */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                  Category: {wishBook.category}
                </span>

                <span className="px-5 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-medium">
                  Rating: {wishBook.rating}
                </span>

                <motion.button
                  whileHover={{
                    translateY: -4,
                    scale: 1.08,
                    boxShadow: "0px 8px 20px rgba(34,197,94,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-7 py-2.5 rounded-full bg-green-500  text-white font-semibold cursor-pointer"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default WishList
