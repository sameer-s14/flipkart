import { Stack } from "@mui/system";
import React from "react";
import { CATEGORIES } from "../assets";
import SubCategoryCard from "./SubCategoryCard";
const SubHeader = () => {
  const data = CATEGORIES;

  return (
    <Stack
      flexDirection="row"
      sx={{ height: "112px", justifyContent: "space-evenly" }}
    >
      {data.map((item) => (
        <SubCategoryCard title={item?.TITLE} src={item.SRC} />
      ))}
    </Stack>
  );
};

export default SubHeader;
