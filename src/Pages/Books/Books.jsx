import React, { useContext } from "react";
import { bookContext } from "../../Context/context";
import WishList from "../../Ui/WishList/WishList";
import ReadList from "../../Ui/ReadList/ReadList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Books = () => {
  //   context
  const { addToRead, addToWishList } = useContext(bookContext);

  return (
    // Read List
    <div className="container mx-auto px-3 my-15">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        {/* Read List Tab */}
        <TabPanel>
          <div>
            {addToRead.map((readBook) => (
              <ReadList readBook={readBook} />
            ))}
          </div>
        </TabPanel>


        {/* Wish List Tab */}
        <TabPanel>
          <div>
            {addToWishList.map((wishBook) => (
              <WishList wishBook={wishBook} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
