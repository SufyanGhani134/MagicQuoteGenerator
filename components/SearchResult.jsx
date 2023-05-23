import React from "react";

function SearchResult(props) {
  if (props.searchDisplay.length === 0) {
    return (
      <>
        <h2 className="text-center">Search Results</h2>
        <h4>No Items Found...</h4>
      </>
    );
  }
  return (
    props.searchDisplay && (
      <div className="row container">
        <h2 className="text-center">Search Results</h2>
        {props.searchDisplay.map((result, index) => (
          <div className="col-sm-6 my-3" key={index}>
            <div className="card " style={{ padding: "1em" }}>
              <div className="card-body">
                <div className="card-header">{result.author}</div>
                <p className="card-text text-center">{result.text}</p>
              </div>
            </div>
            <div>{props.children}</div>
          </div>
        ))}
      </div>
    )
  );
}

export default SearchResult;
