import React, { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import AlertCard from "../AlertCard";

function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  // const [isValid, setIsValid] = useState(true)
  const isValid = useRef(true)

  const navigate = useNavigate();

  function validation() {
    const userNamePattern = /^[a-zA-Z\s]+$/;
    const test = userNamePattern.test(userName);
    try {
      if (!test) throw "Invalid User Name";
      if (password !== confirmPassword) throw "Passwords do not match";
    } catch (error) {
      setError(error);
      // setIsValid(false)
      isValid.current = false
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    validation();
    console.log(isValid.current)
    if (isValid.current == true) {
      const formData = new FormData(e.target);
      const userInfo = Object.fromEntries(formData);
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(userInfo);
      localStorage.setItem("users", JSON.stringify(users));
      console.log(users);
      navigate("/");
    }
  }

  return (
    <>
      {!isValid.current && <AlertCard isValidRef={isValid} error={error} />}
      <h2 className="mb-3">Sign Up Info</h2>
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
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
          <div className="col-sm-10">
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
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </>
  );
}

export default SignUpForm;
