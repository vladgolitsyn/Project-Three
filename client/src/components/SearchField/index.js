import React from "react";
import "./style.css";
import { Input, Button, Menu, Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "City One", value: 1 },
  { key: 2, text: "City Two", value: 2 },
  { key: 3, text: "City Three", value: 3 }
];

const SearchField = () => (
  <div className="search" id="search">
    <Input placeholder="Search..." />
    <Button>Enter</Button>{" "}
  </div>
);

export default SearchField;
