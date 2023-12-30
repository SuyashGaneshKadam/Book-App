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

const Nav = () => {
  const {text, setText, setBooks} = useContext(BookContext);
  // console.log(text);
  return (
    <nav>
      <div className="left-nav">
        <img src={Logo} alt="Logo" />
        <img src={Name} alt="Name" />
      </div>
      <div className="mid-nav">
        <div className="search-bar">
          <FaSearch className="search-icon"/>
          <input onChange={(e) => setText(e.target.value)} value={text} placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." />
        </div>
        <button>Search</button>
      </div>
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
