import React, { useEffect, useState } from "react";
import BooksCard from "../../Ui/BooksCard/BooksCard";

const AllBooks = () => {
  const [showBookData, setShowBookData] = useState([]);

  // Fetch data from bookData.json
  const handleData = async () => {
    try {
      const response = await fetch("/booksData.json");
      const data = await response.json();
      setShowBookData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

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
