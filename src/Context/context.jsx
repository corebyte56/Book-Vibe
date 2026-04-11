import React, { useState } from "react";
import { createContext } from "react";

export const bookContext = createContext();



const ContextProvider = ({ children }) => {
    
  const [addToRead, setAddToRead] = useState([]);

  const handleAddtoRead = (findBook) => {
    const isExist = addToRead.find(book => book.bookId == findBook.bookId)

    if(isExist){
        alert('Book Already exist')
    }

    else{
        setAddToRead([...addToRead, findBook])
    }
    console.log(addToRead);
    
    
  };

  const data = {
  handleAddtoRead,
  addToRead,
  setAddToRead
};

  return <bookContext.Provider value={data}>{children}</bookContext.Provider>;
};

export default ContextProvider;
