import React from "react";
import { useLocation } from "react-router-dom";

function UserQuotes({onDelete}) {
  const location = useLocation();
  const user = location.state.user;
  const currentUser = JSON.parse(localStorage.getItem(`${user.userName}`));
  

  // function handleDelete(quoteIndex){
  //   console.log(quoteIndex)
  //   console.log(currentUser)
  //   const updatedUserQuotes = currentUser.userQuotes.current.filter(
  //     (_, index) => index !== quoteIndex)
    
  //     currentUser.userQuotes.current = updatedUserQuotes;

  //     localStorage.setItem(`${user.userName}`, JSON.stringify(currentUser));
  // }



  if (currentUser.userQuotes.current) {
    console.log("Inside If");
    const userQuotes = currentUser.userQuotes.current;
    return (
      userQuotes && (
        <div className="row">
          {userQuotes.map((userQuote, index)=>(
            <div className="col-sm-6 my-3" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{userQuote.author}</h5>
                <p className="card-text">
                {userQuote.quote}
                </p>
                <button className="btn btn-primary" onClick={() => onDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      )
    );
  }
}

export default UserQuotes;
