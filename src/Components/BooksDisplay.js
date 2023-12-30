import React, { useContext, useEffect, useState } from "react";
import "./BooksDisplay.css";
import BookContext from "../Context/BookContext";
import axios from "axios";

const BooksDisplay = () => {
  const { books, setBooks, searchClicked, selectedBook, setSelectedBook } =
    useContext(BookContext);
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

  return (
    <div className="container">
      {selectedBook !== "" && (
        <div className="selected-book">
          <div className="img-div">
            <img
              className="book-img selected-book-img"
              src={selectedBook.volumeInfo.imageLinks.thumbnail}
              alt="Book Image"
            />
          </div>
          <div className="book-card">
            <div className="card-top">
              <h1 className="title">{selectedBook.volumeInfo.title}</h1>
              <p className="date">
                Published on: {selectedBook.volumeInfo.publishedDate}
              </p>
            </div>
            <h3 className="author">{selectedBook.volumeInfo.authors[0]}</h3>
            <p className="desc">{selectedBook.volumeInfo.description}</p>
            <div className="card-bottom">
              <div className="stats">
                <p>
                  Avg Rating:{" "}
                  {selectedBook.volumeInfo.averageRating !== undefined
                    ? selectedBook.volumeInfo.averageRating
                    : "--"}{" "}
                  |
                </p>
                <p>
                  Rating Count:{" "}
                  {selectedBook.volumeInfo.ratingsCount !== undefined
                    ? selectedBook.volumeInfo.ratingsCount
                    : "--"}{" "}
                  |
                </p>
                <p>
                  Publisher:{" "}
                  {selectedBook.volumeInfo.publisher !== undefined
                    ? selectedBook.volumeInfo.publisher
                    : "--"}{" "}
                  |
                </p>
                <p>
                  Language:{" "}
                  {selectedBook.volumeInfo.language !== undefined
                    ? selectedBook.volumeInfo.language
                    : "--"}
                </p>
              </div>
              <div className="buttons">
                <button className="card-btn">
                  <a href={selectedBook.volumeInfo.previewLink} target="_blank">
                    Now Read!
                  </a>
                </button>
                <button className="card-btn">
                  <a href={selectedBook.volumeInfo.infoLink} target="_blank">
                    More Info!
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedBook !== "" && (
        <h2 style={{ color: "white", margin: "2%" }}>More Books Like This</h2>
      )}
      <div className="books-container">
        {books.length > 0 &&
          books.map((book) =>
            book.volumeInfo.imageLinks !== undefined ? (
              <img
                className="book-img"
                key={book.id}
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Image"
                onClick={() => {
                  setSelectedBook(book);
                }}
              />
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};

export default BooksDisplay;
