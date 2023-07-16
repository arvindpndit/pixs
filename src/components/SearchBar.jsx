import TextField from "@mui/material/TextField";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  return (
    <div className="main">
      <TextField
        id="outlined-basic"
        label="Search Here"
        variant="outlined"
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
