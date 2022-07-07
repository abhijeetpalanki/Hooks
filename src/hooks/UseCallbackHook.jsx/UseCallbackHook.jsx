import { Box, Button, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const UseCallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, nice to meet you!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <Box>
      <CallbackChild returnComment={returnComment} />

      <Button
        variant="contained"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </Button>
      {toggle && <Typography variant="h3"> toggle </Typography>}
    </Box>
  );
};

export default UseCallbackHook;
