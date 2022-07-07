import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <Box>
      <Box> {getLongestName} </Box>

      <Button
        variant="contained"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </Button>
      {toggle && <Typography variant="h4"> toggle </Typography>}
    </Box>
  );
};

export default UseMemoHook;
