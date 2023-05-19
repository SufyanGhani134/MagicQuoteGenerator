import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import AddQuote from "../AddQuote";
import UserQuotes from "../userQuotes";
import QuoteCarousel from "../QuoteCarousel";

function UserPage() {
  const location = useLocation();
  const user = location.state.user;
  const userQuotes = useRef([]);
  const [userInfo, setUserInfo] = useState({ user, userQuotes });

  // localStorage.setItem(`${user.userName}`, JSON.stringify(userInfo));

  const handleQuoteSubmit = (newQuotes) => {
    console.log(newQuotes);
    const existingUser = JSON.parse(localStorage.getItem(`${user.userName}`));
    // console.log(existingUser.userQuotes.current, "current");

    if (existingUser) {
      // console.log(existingUser.userQuotes.current, "inside if");
      existingUser.userQuotes.current = [
        ...existingUser.userQuotes.current,
        newQuotes,
      ];
      console.log(existingUser.userQuotes.current, "existingUser userQuotes current");
      userQuotes.current = existingUser.userQuotes.current;
      console.log(userQuotes, "User Quotes");
      setUserInfo({ user, userQuotes });
      localStorage.setItem(`${user.userName}`, JSON.stringify(userInfo));
      console.log(userInfo, "userInfo");
    } else {
      // console.log("Inside Else")
      userQuotes.current = [...userQuotes.current, newQuotes];
      setUserInfo({ user, userQuotes });
      localStorage.setItem(`${user.userName}`, JSON.stringify(userInfo));
    }
  };
  return (
    <CardGroup>
      <Card>
        <QuoteCarousel />
      </Card>
      <div className="d-flex flex-column">
        <Card>
          <AddQuote onQuoteSubmit={handleQuoteSubmit} />
        </Card>
        <UserQuotes />
      </div>
    </CardGroup>
  );
}

export default UserPage;
