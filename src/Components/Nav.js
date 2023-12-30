import React, { useContext } from "react";
import "./Nav.css";
import { FaSearch } from "react-icons/fa";
import Logo from "../Assets/Logo.svg";
import Name from "../Assets/Name.svg";
import Book from "../Assets/Book.svg";
import Bell from "../Assets/Bell.svg";
import Diamond from "../Assets/Diamond.svg";
import Profile from "../Assets/Profile.svg";
import BookContext from "../Context/BookContext";
import axios from "axios";

const Nav = () => {
  const { text, setText, setBooks, setSearchClicked, setSelectedBook } =
    useContext(BookContext);
  // console.log(text);

  async function fetchBooks(e) {
    e.preventDefault();
    setSearchClicked(true);
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: text,
          },
        }
      );
      setSelectedBook("");
      setBooks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav>
      <div className="left-nav">
        <img src={Logo} alt="Logo" />
        <img src={Name} alt="Name" />
      </div>
      <form className="mid-nav" onSubmit={(e) => fetchBooks(e)}>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          />
        </div>
        <button className="search-btn">Search</button>
      </form>
      <div className="right-nav">
        <img src={Book} alt="Book" />
        <img src={Bell} alt="Bell" />
        <img src={Diamond} alt="Diamond" />
        <img src={Profile} alt="Profile" />
      </div>
    </nav>
  );
};

export default Nav;
