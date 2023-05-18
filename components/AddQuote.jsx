import React, { useState } from "react";

function AddQuote({ onQuoteSubmit }) {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  function handleFormSubmit(e){
    e.preventDefault();
    onQuoteSubmit({author, quote})
    setAuthor("")
    setQuote("")
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group">
        <span className="input-group-text">Author</span>
        <input
          className="form-control"
          aria-label="With textarea"
          name="author"
          value={author}
          onChange={(e) => {
            e.preventDefault();
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div className="input-group my-2">
        <span className="input-group-text">Enter Quote Here</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          name="quote"
          value={quote}
          onChange={(e) => {
            e.preventDefault();
            setQuote(e.target.value);
          }}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddQuote;
