import React from "react";
import { motion, hover } from "framer-motion";
import BannerBook from "../../assets/BannerBook.png";
const Banner = () => {
  return (
    <div className="flex justify-between bg-gray-400 px-25 py-20 rounded-3xl items-center">
      <div className="space-y-10">
        <h1 className="text-6xl font-bold leading-20">
          Books to freshen up <br /> your bookshelf
        </h1>
        <motion.button
          animate={{
            boxShadow: "0px 8px 25px rgba(21,128,61,0.4)",
          }}
          whileHover={{
            background: "#166534", 
            color: "#fff",
            borderColor: "#166534",
            translateY: -6,
            boxShadow: "0px 20px 60px rgba(21,128,61,0.7)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="bg-green-700 border border-transparent px-7 py-5 text-xl font-bold rounded-2xl cursor-pointer"
        >
          View The List
        </motion.button>
      </div>

      <img src={BannerBook} alt="Book" />
    </div>
  );
};

export default Banner;
