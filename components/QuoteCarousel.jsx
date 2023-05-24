import Carousel from "react-bootstrap/Carousel";
import useFetch from "../Hooks/useFetch";


function QuoteCarousel() {
  const { magicQuotes, error, isLoading } = useFetch();
  const quoteArray = Object.values(magicQuotes);
  return (
    <Carousel
      className="text-light text-center"
      style={{ padding: "12% 15%", height: "350px" }}
    >
      {quoteArray.map((quote, index) => (
        <Carousel.Item key={index} interval={2000}>
          <h1>{quote.text}</h1>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default QuoteCarousel;
