import { Form, useNavigate } from "react-router-dom";
import AlertCard from "../AlertCard";
import React, { useEffect, useRef, useState } from "react";
import '../../src/Style.css';

function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isClicked, setIsClicked] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const errorRef = useRef(null);

  const navigate = useNavigate();

  function validation() {
    name.current = userName;
    email.current = userEmail;
    errorRef.current = null;
    const userNamePattern = /^[a-zA-Z\s]+$/;
    const test = userNamePattern.test(name.current);
    try {
      if (!test) throw new Error("Invalid User Name...");
      if (password.length < 5)
        throw new Error("Password should be atleast 5 characters");
      if (password !== confirmPassword)
        throw new Error("Passwords do not match");
    } catch (error) {
      errorRef.current = error.message;
      setIsClicked(!isClicked);
    }
    const users = JSON.parse(localStorage.getItem("users"));
    let userNameExists = true;
    let emailExists = true;
    if (users) {
      userNameExists = users.some((user) => user.userName === userName);
      emailExists = users.some((user) => user.email === userEmail);
      try {
        if (userNameExists)
          throw new Error("User Name already exists in users");
        if (emailExists) throw new Error("Email already exists in users");
      } catch (error) {
        errorRef.current = error.message;
        setIsClicked(!isClicked);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validation();
    if (errorRef.current == null) {
      const formData = new FormData(e.target);
      const userInfo = Object.fromEntries(formData);
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(userInfo);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
    }
  }
  useEffect(() => {
    if (errorRef.current != null) {
      setIsValid(false);
    }
  }, [isClicked]);

  return (
    <div className="d-flex align-items-center flex-column ">
      {!isValid ? (
        <AlertCard setIsValid={setIsValid} errorRef={errorRef.current} />
      ) : (
        ""
      )}
      <div
        className="text-light signUpForm"
        style={{ backgroundColor: "darkblue", borderRadius: "3em" }}
      >
        <h2 className="mb-3 text-center my-3">Sign Up Info</h2>
        <Form className="w-50 container text-start" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={userName}
              onChange={(e) => {
                e.preventDefault();
                setUserName(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
              value={userEmail}
              onChange={(e) => {
                e.preventDefault();
                setUserEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10 w-100">
              <input
                type="password"
                className="form-control "
                name="password"
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label"
              style={{ width: "auto" }}
            >
              Confirm Password
            </label>
            <div className="col-sm-10 w-100">
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => {
                  e.preventDefault();
                  setConfirmPassword(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label my-3" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12 my-3">
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUpForm;
