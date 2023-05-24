import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import AddQuote from "../AddQuote";
import QuoteCarousel from "../QuoteCarousel";
import UserQuotes from "../UserQuotes";
import NavBar from "../NavBar";
import UserSearchModal from "../UserSearchModal";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../src/Style.css"


function UserPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const userQuotes = useRef([]);
  const [userInfo, setUserInfo] = useState({ user, userQuotes });
  const [searchDisplay, setSearchDisplay] = useState("");
  const [searchIndex, setSearchIndex] = useState("");
  const [show, setShow] = useState(false);

  const existingUser = JSON.parse(localStorage.getItem(`${user.userName}`));

  const handleQuoteSubmit = (newQuotes) => {
    if (existingUser) {
      existingUser.userQuotes.current = [
        ...existingUser.userQuotes.current,
        newQuotes,
      ];
      userQuotes.current = existingUser.userQuotes.current;
      setUserInfo({ user, userQuotes });
      localStorage.setItem(`${user.userName}`, JSON.stringify(existingUser));
    } else {
      userQuotes.current = [...userQuotes.current, newQuotes];
      setUserInfo({ user, userQuotes });
      localStorage.setItem(`${user.userName}`, JSON.stringify(userInfo));
    }
  };

  const handleDelete = (quoteIndex) => {
    const updatedUserQuotes = existingUser.userQuotes.current.filter(
      (_, index) => index !== quoteIndex
    );

    existingUser.userQuotes.current = updatedUserQuotes;
    localStorage.setItem(`${user.userName}`, JSON.stringify(existingUser));
    setUserInfo({ user, userQuotes: existingUser.userQuotes.current });
  };

  useEffect(() => {
    if (searchDisplay) {
      setShow(true);
    }
  }, [searchDisplay]);

  return (
    <div className="d-flex flex-column align-items-center">
      <NavBar
        searchArr={existingUser ? existingUser.userQuotes.current : []}
        setSearchDisplay={setSearchDisplay}
        setSearchIndex={setSearchIndex}
      >
        <Button variant="info  mx-2 text-light" onClick={() => navigate("/")}>
          Log out
        </Button>
      </NavBar>
      <CardGroup className="d-flex flex-column align-items-center w-100">
        <Card className="my-3  cardCarousel">
          <QuoteCarousel />
        </Card>

        <Card
          className="my-3 d-flex align-items-center addQuoteForm"
          style={{ backgroundColor: "lightsteelblue", borderRadius: "5em" }}
        >
          <AddQuote onQuoteSubmit={handleQuoteSubmit} />
        </Card>
        <div
          style={{ borderRadius: "5em" }}
          className="w-75 d-flex justify-content-center"
        >
          {existingUser && (
            <UserQuotes
              onDelete={handleDelete}
              userQuotesDisplay={existingUser.userQuotes.current}
            />
          )}
        </div>
      </CardGroup>
      {show && (
        <UserSearchModal
          setShow={setShow}
          show={show}
          searchDisplay={searchDisplay}
        />
      )}
    </div>
  );
}

export default UserPage;
