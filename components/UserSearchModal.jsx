import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchResult from "./SearchResult";
import React from "react";

export default function UserSearchModal({ setShow, show, searchDisplay }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <SearchResult searchDisplay={searchDisplay} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
