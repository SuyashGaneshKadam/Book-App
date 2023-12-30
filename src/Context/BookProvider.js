import React, { useState } from "react";
import BookContext from "./BookContext";

const BookProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [books, SetBooks] = useState([]);
  return (
    <BookContext.Provider value={{ text, setText, books, SetBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
