import React, { useState } from "react";

function AddQuote({ onQuoteSubmit }) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
    onQuoteSubmit({ author, text });
    setAuthor("");
    setText("");
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-75">
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
          required
        />
      </div>
      <div className="input-group my-2">
        <span className="input-group-text">Enter Quote Here</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          name="text"
          value={text}
          onChange={(e) => {
            e.preventDefault();
            setText(e.target.value);
          }}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddQuote;
