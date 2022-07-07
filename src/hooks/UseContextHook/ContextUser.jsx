import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const ContextUser = () => {
  const { username } = useContext(AppContext);

  return (
    <Box>
      <Typography variant="body1">User: {username}</Typography>
    </Box>
  );
};

export default ContextUser;
