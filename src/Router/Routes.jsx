import HomePage from "../Pages/HomePage/HomePage.jsx";
import MainLayout from "../Layout/mainlayout.jsx";
import Books from "../Pages/Books/Books.jsx";
import PagesToRead from "../Pages/Pages to Read/PagesToRead.jsx";
import { createBrowserRouter } from "react-router";
import BookDetails from "../Pages/BookDetails/BookDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "/Pages to Read",
        element: <PagesToRead />,
      },
      
    ],
  },
]);
