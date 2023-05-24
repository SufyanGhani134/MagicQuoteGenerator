import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import useSearch from "../Hooks/useSearch";
import DropDownButton from "./DropDownButton";
import { useEffect, useState } from "react";
import "../src/Style.css";

function NavBar(props) {
  const [searchQuote, setSearchQuote] = useState("");
  const [selectedItem, setSelectedItem] = useState("Search by Author");

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };
  const { searchMagicQuoteByAuthor, searchMagicQuoteByText, searchResult } =
    useSearch(props.searchArr);

  useEffect(() => {
    if (searchResult) {
      props.setSearchDisplay(searchResult);
    }
  }, [searchResult]);

  function searchHandler() {
    if (selectedItem == "Search by Author") {
      searchMagicQuoteByAuthor(searchQuote);
    } else if (selectedItem == "Search by Quote") {
      searchMagicQuoteByText(searchQuote);
    }

    setSearchQuote("");
  }

  return (
    <>
      <nav
        className="navbar w-100"
        style={{ background: "darkslateblue"}}
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-light">
            Magic Quote Generator
          </Link>
          <form className="navBarSearchDisplay">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Quote..."
              aria-label="Search"
              value={searchQuote}
              onChange={(e) => {
                e.preventDefault();
                setSearchQuote(e.target.value);
              }}
              required
            />
            <DropDownButton
              handleItemClick={handleItemClick}
              selectedItem={selectedItem}
              searchHandler={searchHandler}
            />
          </form>
          <div className="navBarSearchDisplay">{props.children}</div>  
        </div>
      </nav>
      
      <form className="searchDisplay my-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Quote..."
          aria-label="Search"
          value={searchQuote}
          onChange={(e) => {
            e.preventDefault();
            setSearchQuote(e.target.value);
          }}
          required
        />
        <DropDownButton
          handleItemClick={handleItemClick}
          selectedItem={selectedItem}
          searchHandler={searchHandler}
        />
      </form>
      <div className="searchDisplay my-3">{props.children}</div>  

    </>
  );
}

export default NavBar;
