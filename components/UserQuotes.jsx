import React from "react";
import { useLocation } from "react-router-dom";


function UserQuotes() {
  const location = useLocation();
  const user = location.state.user;
  const currentUser = JSON.parse(localStorage.getItem(`${user.userName}`));
  if(currentUser.userQuotes.current){
    console.log("Inside If")
    const userQuotes = currentUser.userQuotes.current
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
  
  
}

export default UserQuotes;
