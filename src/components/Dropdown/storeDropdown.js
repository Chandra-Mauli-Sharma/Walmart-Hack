import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import mockStores from "../../variables/stores";
import itemPairsData from "../../variables/assoStoreItems";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const randomTextOptions = [
  "Welcome to Store 1!",
  "Explore the offerings of Store 2!",
  "Discover great deals at Store 3!",
  "Experience quality products at Store 4!",
  "Shop the latest trends at Store 5!",
];
function StoreDropdown() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

  const handleGroupChange = (event) => {
    setSelectedGroupIndex(parseInt(event.target.value));
  };

  const selectedGroup = itemPairsData[selectedGroupIndex];

  return (
    <div className="App">
      <h1>Item Pairs</h1>
      <label>Select a Group:</label>
      <select value={selectedGroupIndex} onChange={handleGroupChange}>
        {itemPairsData.map((group, index) => (
          <option key={index} value={index}>
            Group {index + 1}
          </option>
        ))}
      </select>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {selectedGroup.map((pair, index) => (
          <div key={index}>
            <Card>
              <CardBody>
                <div style={{ textAlign: "center ", color: "#DEDEDE" }}>
                  <span>
                    <b>{pair.support * 100}% </b>
                    {` people who bought `}
                    <b>{pair.items[0]} </b>
                    {`also bought `}
                    <b>{pair.items[1]}</b>
                  </span>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreDropdown;
