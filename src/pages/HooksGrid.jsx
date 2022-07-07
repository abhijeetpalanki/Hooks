import React from "react";
import HooksCard from "../components/HooksCard";
import { Grid } from "@mui/material";

const HooksGrid = ({ hooksData }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      padding={2}
    >
      {hooksData.map((hook, index) => (
        <Grid key={index} item xs={2} sm={4} md={4}>
          <HooksCard hook={hook} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HooksGrid;
