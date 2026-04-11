import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const bookContext = createContext();

const ContextProvider = ({ children }) => {
  const [addToRead, setAddToRead] = useState([]);

  const handleAddtoRead = (findBook) => {
    const isExist = addToRead.find((book) => book.bookId == findBook.bookId);

    if (isExist) {
      toast.error("Book Already Exist!");
    } else {
      setAddToRead([...addToRead, findBook]);
      toast.success("Book added!");
    }
    console.log(addToRead);
  };

  const data = {
    handleAddtoRead,
    addToRead,
    setAddToRead,
  };

  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default ContextProvider;
