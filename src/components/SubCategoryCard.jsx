import { Box, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../assets";

const SubCategoryCard = ({ title, src }) => {
  return (
    <Box
      sx={{
        padding: "12px 8px",
        textAlign: "center",
        cursor: "pointer",
        height: "64px",
      }}
    >
      <img
        src={src}
        alt={title}
        style={{
          textDecoration: "none",
          color: "inherit",
          border: "none",
          outline: "none",
          height: "inherit",
        }}
      />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "14px",
          "&:hover": {
            color: COLORS.BASE_BLUE,
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SubCategoryCard;
