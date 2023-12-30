import React, { useState } from "react";
import BookContext from "./BookContext";

const BookProvider = ({children}) =>{
    const [text, setText] = useState("");
    const [books, setBooks] = useState([]);
    const [searchClicked, setSearchClicked] = useState(false);
    const [selectedBook, setSelectedBook] = useState("");
    return(
        <BookContext.Provider value={{text, setText, books, setBooks, searchClicked, setSearchClicked, selectedBook, setSelectedBook}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider;