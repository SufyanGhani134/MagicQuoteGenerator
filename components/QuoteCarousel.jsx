import Carousel from "react-bootstrap/Carousel";
import useFetch from "../Hooks/useFetch";

function QuoteCarousel() {
  const { magicQuotes, error, isLoading } = useFetch();
  const quoteArray = Object.values(magicQuotes)
  return (
    <Carousel>
      {quoteArray.map((quote, index) => (
        <Carousel.Item key={index} >
          <h1>{quote.text}</h1>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default QuoteCarousel;
