import { useState } from "react";
import "./App.css";
import QuoteCard from "../components/QuoteCard";
import NavBar from "../components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar  />
      <QuoteCard />
    </>
  );
}

export default App;
