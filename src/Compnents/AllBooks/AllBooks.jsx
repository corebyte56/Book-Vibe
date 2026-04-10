import React, { useEffect, useState } from 'react'

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
    <div className='md:py-20 py-10'>
      <h1 className='text-5xl font-bold'>Books</h1>
      {/* cards */}

      <div>
        {
        showBookData.map((books => (
            <div>
                <p>{books.author}</p>
            </div>
        )))
      }
      </div>
    </div>
  )
}

export default AllBooks
