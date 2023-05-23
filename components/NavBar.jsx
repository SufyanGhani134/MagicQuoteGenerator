import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import useSearch from "../Hooks/useSearch";
import DropDownButton from "./DropDownButton";
import { useEffect, useState } from "react";

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
    <Navbar
      className="w-100"
      style={{ background: "darkslateblue", borderRadius: "1em" }}
    >
      <Container>
        <Link to={"/"}>
          <Navbar.Brand className="text-light">
            Magic Quote Generator
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex mx-2 w-50">
            <Form.Control
              type="search"
              placeholder="Search Quote..."
              className="me-2"
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
          </Form>

          <div>{props.children}</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
