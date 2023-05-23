import React from "react";

function UserQuotes({ onDelete, userQuotesDisplay }) {
  return (
    userQuotesDisplay && (
      <div className="row w-75">
        {userQuotesDisplay.map((userQuote, index) => (
          <div className="col-sm-6 my-3" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{userQuote.author}</h5>
                <p className="card-text">{userQuote.text}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
  // }
}

export default UserQuotes;
