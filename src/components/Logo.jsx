import { Box } from "@mui/system";
import React from "react";
import { COLORS, IMAGES } from "../assets";

const Logo = () => {
  return (
    <Box>
      <img
        style={{ height: "20px", background: COLORS.BASE_BLUE }}
        src={IMAGES.LOGO.SRC}
        alt={IMAGES.LOGO.ALT}
      ></img>
      <Box
        fontStyle="italic"
        flexDirection="column"
        fontSize="11px"
        marginTop="-7px"
      >
        <span style={{ marginRight: "2px" }}>Explore</span>
        <span style={{ color: COLORS.YELLOW }}>Plus</span>
        <img
          src={IMAGES.SUB_LOGO.SRC}
          alt={IMAGES.SUB_LOGO.ALT}
          style={{ width: "10px", margin: "2px" }}
        />
      </Box>
    </Box>
  );
};

export default Logo;
