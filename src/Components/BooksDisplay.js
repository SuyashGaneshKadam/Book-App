import React, { useContext, useEffect } from "react";
import "./BooksDisplay.css";
import BookContext from "../Context/BookContext";
import axios from "axios";

const BooksDisplay = () => {
  const { books, setBooks, searchClicked } = useContext(BookContext);
//   console.log(books);

  useEffect(() => {
    if (!searchClicked && books.length === 0) {
      fetchBooks("Harry Potter");
    }
  });

  useEffect(() => {
    if (!searchClicked && books.length === 10) {
      fetchBooks("Sherlock Holmes");
    }
  });

  async function fetchBooks(q) {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q,
          },
        }
      );
    //   console.log(response);
      setBooks([...books, ...response.data.items]);
    } catch (error) {
      console.log(error);
    }
  }

  return <div className="container">
    {books.length > 0 && books.map((book) =>(
        <img key={book.id} src={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail}/>
    ))}
  </div>;
};

export default BooksDisplay;
