import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import * as Icons from "@mui/icons-material";
import { COLORS } from "../assets";

const Header = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        backgroundColor: "#2874f0",
        height: "56px",
        width: "100%",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
      <SearchBox />
      <LoginButton />
      <Box sx={{ fontSize: "16px", margin: "18px", marginLeft: "36px" }}>
        <Typography sx={{ cursor: "pointer", fontWeight: 430 }}>
          Become a Seller
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{ backgroundColor: "inherit", color: COLORS.WHITE }}
          endIcon={
            <ChevronLeftIcon sx={{ margin: "-5px", fontSize: "14px" }} />
          }
          margin="18px"
        >
          <Typography sx={{ fontWeight: 430, textTransform: "none" }}>
            More
          </Typography>
        </Button>

        <Button
          startIcon={<Icons.ShoppingCart />}
          sx={{
            color: COLORS.WHITE,
            marginLeft: "30px",
            fontWeight: 430,
            textTransform: "none",
          }}
        >
          <Typography sx={{ fontWeight: 430, textTransform: "none" }}>
            Cart
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default Header;
