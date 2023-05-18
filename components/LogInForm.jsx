import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import AlertCard from "./AlertCard";

function LogInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isUser = useRef(true);

  function logInAuthentication(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((obj) => Object.values(obj).includes(email));
    try {
      if (!user) throw "User is not registered.. Please Sign In";
      if (user.password !== password) throw "Password Incorrect";
      if (user.password == "") throw "Password Required";
    } catch (error) {
      setError(error);
      console.log(error);
      isUser.current = false;
      return isUser.current;
    }
    console.log(user);
    if (user) {
      console.log(user.userName);
      navigate(`/${user.userName}`, { state: { user } });
    }
  }

  return (
    <>
      {!isUser.current && <AlertCard isValidRef={isUser} error={error} />}
      <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={logInAuthentication}>
          Log in
        </Button>
        <Form.Text className="text-muted mx-2">or</Form.Text>
        <Button
          variant="outline-primary mx-2"
          onClick={() => navigate("/Sign-Up")}
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
}

export default LogInForm;
