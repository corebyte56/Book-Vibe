import React, { useContext } from "react";
import { bookContext } from "../../Context/context";
import WishList from "../../Ui/WishList/WishList";
import ReadList from "../../Ui/ReadList/ReadList";

const Books = () => {
  //   context
  const { addToRead, addToWishList } = useContext(bookContext);

  return (
    // Read List 
    <div className="container mx-auto px-20">
      {addToRead.map((readBook) => (
        <ReadList readBook = {readBook} />
      ))}


      {
        addToWishList.map((wishBook) => (
        <WishList wishBook = {wishBook} />
      ))
      }
    </div>
  );
};

export default Books;
