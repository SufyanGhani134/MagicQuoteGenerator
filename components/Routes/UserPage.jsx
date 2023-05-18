import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QuoteCard from "../QuoteCard";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import AddQuote from "../AddQuote";
import UserQuotes from "../userQuotes";

function UserPage() {
  const [userQuotes, setUserQuotes] = useState([]);
  // const [noQuotes, setNoQuotes] = useState(true)
  const [userInfo, setUserInfo] = useState({});
  const location = useLocation();
  const user = location.state.user;

  const handleQuoteSubmit = (newQuotes) => {
    setUserQuotes([...userQuotes, newQuotes]);
    console.log(userQuotes);
    setUserInfo({ user, userQuotes });
    console.log(userInfo);
    localStorage.setItem(`${user.userName}`, JSON.stringify(userInfo));
    // setNoQuotes(false);
  };

  if (userQuotes == []) {
    return (
      <CardGroup>
        <Card>
          <QuoteCard />
        </Card>
        <div className="d-flex flex-column">
          <Card>
            <AddQuote onQuoteSubmit={handleQuoteSubmit} />
          </Card>
        </div>
      </CardGroup>
    );
  } else {
    return (
      <CardGroup>
        <Card>
          <QuoteCard />
        </Card>
        <div className="d-flex flex-column">
          <Card>
            <AddQuote onQuoteSubmit={handleQuoteSubmit} />
          </Card>
          <UserQuotes user={user} />
        </div>
      </CardGroup>
    );
  }
}

export default UserPage;
