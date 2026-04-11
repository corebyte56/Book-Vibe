import React from "react";
import { motion, hover } from "framer-motion";
const BooksCard = ({ showBookData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {showBookData.map((book) => (
        <motion.div
          whileHover={{
            y: -10,
            scale: 1.04,
             boxShadow: "0px 25px 50px rgba(0,0,0,0.25)"
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 28,
          }}
          className="bg-[#1f1f1f] text-white rounded-2xl overflow-hidden shadow-lg  border border-gray-800 cursor-pointer"
        >
          {/* Image */}
          <div className="bg-[#2a2a2a] flex items-center justify-center h-64">
            <img
              src={book.image}
              alt={book.bookName}
              className="h-full w-auto object-contain p-6"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {book.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-[#2d2d2d] text-green-400 border border-green-900"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold leading-snug">{book.bookName}</h2>

            {/* Author */}
            <p className="text-sm text-gray-400">By {book.author}</p>

            {/* Bottom row */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-800">
              <span className="text-sm text-gray-400">{book.category}</span>

              <div className="flex items-center gap-1 text-yellow-400">
                <span>{book.rating}</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BooksCard;
