import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import mockStores from "../../variables/stores";

const randomTextOptions = [
  "Welcome to Store 1!",
  "Explore the offerings of Store 2!",
  "Discover great deals at Store 3!",
  "Experience quality products at Store 4!",
  "Shop the latest trends at Store 5!",
];

function StoreDropdown2() {
  const [selectedStore, setSelectedStore] = useState("");
  const [selectedStoreIndex, setSelectedStoreIndex] = useState(null);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStore(selectedValue);

    // Find the index of the selected store
    const index = mockStores.findIndex((store) => store.name === selectedValue);
    setSelectedStoreIndex(index);
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Select Store</InputLabel>
        <Select
          style={{ width: "120px", color: "white" }}
          value={selectedStore}
          onChange={handleChange}
        >
          {mockStores.map((store) => (
            <MenuItem key={store.id} value={store.name}>
              {store.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <iframe
          title="Embedded Content"
          src="https://walmarthack.github.io/"
          style={{ width: "100%", height: "600px", border: "none" }}
        />
      </div>
    </div>
  );
}
export default StoreDropdown2;
