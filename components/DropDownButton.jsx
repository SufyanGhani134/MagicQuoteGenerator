import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

function DropDownButton({ handleItemClick, selectedItem, searchHandler }) {
  return (
    <Dropdown as={ButtonGroup} className="w-100">
      <Button variant="success" onClick={searchHandler}>
        {selectedItem}
      </Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleItemClick("Search by Author")}>
          Search by Author
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick("Search by Quote")}>
          Search by Quote
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownButton;
