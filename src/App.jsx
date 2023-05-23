import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import QuoteCard from "../components/QuoteCard";
import NavBar from "../components/NavBar";
import LogInModal from "../components/Routes/LogInModal";
import useFetch from "../Hooks/useFetch";
import SearchResult from "../components/SearchResult";
import { useState } from "react";
import "./App.css";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState("");
  const navigate = useNavigate();
  const { magicQuotes, error, isLoading } = useFetch();

  return (
    <div className="d-flex flex-column align-items-center">
      <NavBar searchArr={magicQuotes} setSearchDisplay={setSearchDisplay}>
        <Button variant="outline-primary" onClick={() => navigate("/Sign-Up")}>
          Sign Up
        </Button>
        <Button variant="primary mx-2" onClick={() => setModalShow(true)}>
          Add Quote
        </Button>
      </NavBar>
      <LogInModal show={modalShow} onHide={() => setModalShow(false)} />
      <QuoteCard />

      {searchDisplay && <SearchResult searchDisplay={searchDisplay} />}
    </div>
  );
}

export default App;
