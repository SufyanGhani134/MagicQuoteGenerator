import React from "react";

function UserQuotes({ user }) {
  const currentUser = JSON.parse(localStorage.getItem(`${user.userName}`));
  console.log(currentUser.userQuotes);
  const userQuotes = currentUser.userQuotes;
  return (
    userQuotes && <ol className="list-group list-group-numbered">
      {userQuotes.map((userQuote, index) => (
        <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{userQuote.author}</div>
            {userQuote.quote}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default UserQuotes;
