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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="md:py-20 py-10">
      <h1 className="text-5xl font-bold">Books</h1>
      {/* cards */}

      <div className="py-8 flex">
        <BooksCard showBookData={showBookData} />
      </div>
    </div>
  );
};

export default AllBooks;
