import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import AddQuote from "../AddQuote";
import UserQuotes from "../userQuotes";
import QuoteCarousel from "../QuoteCarousel";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

function UserPage() {
  const navigate = useNavigate()
  const location = useLocation();
  const user = location.state.user;
  const userQuotes = useRef([]);
  const [userInfo, setUserInfo] = useState({ user, userQuotes });
  

  // localStorage.setItem(`${user.userName}`, JSON.stringify(userInfo));
  const existingUser = JSON.parse(localStorage.getItem(`${user.userName}`));


  const handleQuoteSubmit = (newQuotes) => {
    console.log(newQuotes);
    // const existingUser = JSON.parse(localStorage.getItem(`${user.userName}`));
    // console.log(existingUser.userQuotes.current, "current");

    if (existingUser) {
      console.log(existingUser.userQuotes, "inside if");
      existingUser.userQuotes.current = [
        ...existingUser.userQuotes.current,
        newQuotes,
      ];
      console.log(
        existingUser.userQuotes,
        "existingUser userQuotes---"
      );


      userQuotes.current = existingUser.userQuotes.current;
      console.log(userQuotes, "User Quotes");

        console.log(existingUser, "existingUser")
      setUserInfo({user, userQuotes});
      console.log(existingUser, "Existing user")
      localStorage.setItem(`${user.userName}`, JSON.stringify(existingUser));
      // console.log(userInfo, "userInfo");
    } else {
      console.log("Inside Else")
      userQuotes.current = [...userQuotes.current, newQuotes];
      setUserInfo({ user, userQuotes });
      localStorage.setItem(`${user.userName}`, JSON.stringify(userInfo));
      console.log(userInfo)

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



  return (
    <>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Magic Quote Generator</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-primary" onClick={()=> navigate('/')}>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CardGroup className="d-flex flex-column">
      <Card>
        <QuoteCarousel />
      </Card>

      <Card className="my-3 border-0">
        <AddQuote onQuoteSubmit={handleQuoteSubmit} />
      </Card>
      {existingUser && <UserQuotes onDelete={handleDelete}/> }
    </CardGroup>
    </>
    
  );
}

export default UserPage;
