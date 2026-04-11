import React, { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const bookContext = createContext();

const ContextProvider = ({ children }) => {

  const [addToRead, setAddToRead] = useState([]);
  const [addToWishList, setAddToWishList] = useState([]);


//   ReadList
  const handleAddToRead = (findBook) => {
    // Readlist List logic
    const isExist = addToRead.find((book) => book.bookId == findBook.bookId);

    if (isExist) {
      toast.error(`${findBook.bookName} Already Exist In Read List!`);
      
    } else {
      setAddToRead([...addToRead, findBook]);
      toast.success(`${findBook.bookName} added In Read List!`);
      
    }
    
  };


//   Wish List
  const handleAddToWishList = (findBook) => {

    // isExistInReadList check
    const isExistInReadList = addToRead.find((book) => book.bookId == findBook.bookId);

    if(isExistInReadList){
        toast.error(`${findBook.bookName} Already in ReadList`)
        return;
    }

    // Wish List logic
    const isExist = addToWishList.find((book) => book.bookId == findBook.bookId);

    if (isExist) {
      toast.error(`${findBook.bookName} Already Exist In Read List!`);
    } else {
      setAddToWishList([...addToWishList, findBook]);
      toast.success(`${findBook.bookName} added In WishList!`);
    }
    
  }

  const data = {
    addToRead,
    setAddToRead,
    handleAddToRead,
    handleAddToWishList,
    addToWishList,
    setAddToWishList
  };

  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default ContextProvider;
