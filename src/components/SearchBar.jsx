import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ setSearchResult }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchResult(searchInput);
    }
  };

  return (
    <div className="search-container">
      <div className="main">
        <TextField
          id="outlined-basic"
          label="Search Here"
          variant="outlined"
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Button
        variant="outlined"
        size="large"
        sx={{ height: "55px" }}
        onClick={() => {
          setSearchResult(searchInput);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
