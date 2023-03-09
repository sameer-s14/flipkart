import { Button } from "@mui/material";
import React from "react";
import { COLORS } from "../assets";

const LoginButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: COLORS.WHITE,
        color: COLORS.BASE_BLUE,
        fontWeight: 500,
        cursor: "pointer",
        borderRadius: "2px",
        height: "32px",
        padding: "5px 40px",
        border: "1px solid #dbdbdb",
        textTransform:'capitalize'
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
