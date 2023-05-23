import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import AlertCard from "./AlertCard";
import { useEffect, useRef, useState } from "react";

function LogInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isClicked, setIsClicked] = useState(true);
  const errorMsg = useRef(null);

  useEffect(() => {
    if (errorMsg.current !== null) {
      setIsValid(false);
    }
  }, [isClicked]);

  function logInAuthentication(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      const user = users.find((obj) => Object.values(obj).includes(email));
      errorMsg.current = null;
      try {
        if (!user) throw new Error("User is not registered.. Please Sign In");
        if (user.password !== password) throw new Error("Password Incorrect");
        if (user.password == "") throw new Error("Password Required");
      } catch (error) {
        errorMsg.current = error.message;
        setIsClicked(!isClicked);
      }
      if (errorMsg.current == null) {
        navigate(`/${user.userName}`, { state: { user } });
      }
    } else {
      errorMsg.current = "No users in the Storage";
      setIsClicked(!isClicked);
    }
  }

  return (
    <>
      {!isValid ? (
        <AlertCard setIsValid={setIsValid} errorRef={errorMsg.current} />
      ) : (
        ""
      )}
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
