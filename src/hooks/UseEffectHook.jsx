import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";

const UseEffectHook = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <Box>
      Hello World
      <Typography variant="h3">{data}</Typography>
      <Typography variant="h3">{count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </Button>
    </Box>
  );
};

export default UseEffectHook;
