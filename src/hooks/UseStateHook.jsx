import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const UseStateHook = () => {
  const [color, setColor] = useState("red");

  return (
    <Box>
      <Typography variant="h3" mb={2}>
        My favorite color is {color}!
      </Typography>
      <Button variant="contained" onClick={() => setColor("blue")}>
        Blue
      </Button>
    </Box>
  );
};

export default UseStateHook;
