import React from "react";

export default function AlertCard({ setIsValid, errorRef }) {
  const changeValid = () => {
    setIsValid(true);
  };
  return (
    <div
      className="alert alert-danger alert-dismissible fade show w-100"
      role="alert"
    >
      <strong>Alert!</strong> {errorRef}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={changeValid}
      ></button>
    </div>
  );
}
