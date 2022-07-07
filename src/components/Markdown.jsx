import React from "react";
import { Grid } from "@mui/material";

const Markdown = ({ example, template }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      style={{ minHeight: "80vh" }}
    >
      <Grid item display="flex" justifyContent="center" alignItems="center">
        {example}
      </Grid>
      <Grid item>
        <pre style={{ background: "#fff", borderLeft: "4px solid #1976d2" }}>
          {template}
        </pre>
      </Grid>
    </Grid>
  );
};

export default Markdown;
