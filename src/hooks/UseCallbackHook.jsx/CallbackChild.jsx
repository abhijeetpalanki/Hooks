import { Box } from "@mui/material";
import React, { useEffect } from "react";

const CallbackChild = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <Box>{returnComment("Abhijeet")}</Box>;
};

export default CallbackChild;
