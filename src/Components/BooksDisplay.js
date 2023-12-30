import React, { useContext } from "react";
import "./BooksDisplay.css"
import BookContext from "../Context/BookContext";

const BooksDisplay = () =>{
    const {books, setBooks} = useContext(BookContext);
    return(
        <div className="container">
            
        </div>
    )
}

export default BooksDisplay;