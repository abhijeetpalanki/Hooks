import { Box, Button } from "@mui/material";
import React, { useRef } from "react";
import ImperativeButton from "./ImperativeButton";

const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null);
  return (
    <Box>
      <Button
        sx={{ marginRight: 2 }}
        variant="contained"
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </Button>
      <ImperativeButton ref={buttonRef} />
    </Box>
  );
};

export default UseImperativeHandleHook;
