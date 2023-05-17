import React from "react";
import { useLocation } from "react-router-dom";

function UserPage() {
  const location = useLocation();
  const user = location.state.user;
  console.log(user);
  return <div>userPage</div>;
}

export default UserPage;
