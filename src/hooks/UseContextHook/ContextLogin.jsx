import { Box, TextField } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const ContextLogin = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <Box>
      <TextField
        variant="outlined"
        label="Text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </Box>
  );
};

export default ContextLogin;
