import React, { useContext, useEffect, useState } from "react";
import BooksCard from "../../Ui/BooksCard/BooksCard";
import { bookContext } from "../../Context/context";

const AllBooks = () => {
  const { showBookData } = useContext(bookContext);

  return (
    <div className="md:py-20 py-10 md:px-30">
      <h1 className="text-5xl font-bold">Books</h1>
      {/* cards */}

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {showBookData.map((book, idx) => (
          <BooksCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
