import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useFetch from "../Hooks/useFetch";
import useRandom from "../Hooks/useRandom";
import React from "react";
import Spinner from "react-bootstrap/Spinner";

function QuoteCard() {
  const { magicQuotes, error, isLoading } = useFetch();
  const { randomNumber, click, setClick } = useRandom();

  return (
    <Card>
      <Card.Header>Magic Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {isLoading ? (
            <Spinner animation="border" variant="primary" />
          ) : error ? (
            "Error Fetching Data"
          ) : (
            <p>{magicQuotes[randomNumber].text}</p>
          )}

          <footer className="blockquote-footer">
            <cite title="Source Title">
              {magicQuotes.author
                ? "Anonymous"
                : magicQuotes[randomNumber].author}
            </cite>
          </footer>
        </blockquote>
        <Button variant="primary my-2" onClick={() => setClick(!click)}>
          Generate Magic Quote
        </Button>
        <Button variant="primary my-2 mx-2"> Add Personal Quotes</Button>
      </Card.Body>
    </Card>
  );
}

export default QuoteCard;
