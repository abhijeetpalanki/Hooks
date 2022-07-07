import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <Box>
      <Typography variant="h4">
        Click the button to clear and focus on text field
      </Typography>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </Box>
  );
};

export default UseRefHook;
