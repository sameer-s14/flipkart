import { IconButton, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { COLORS } from "../assets";

const SearchBox = () => {
  return (
    <Paper
      sx={{
        padding: "2px",
        height: "35px",
        elevation: 3,
        width: "383px",
        marginLeft: "12px",
        marginRight: "18px",
        paddingLeft: 2,
      }}
      square
    >
      <input
        className="search-bar"
        placeholder="Search for products, brands and more"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ color: COLORS.BASE_BLUE, fontSize: "23px" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBox;
