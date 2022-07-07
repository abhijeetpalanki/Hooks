import { Button, Typography } from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const ImperativeButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <Button variant="contained">Button From Child</Button>
      {toggle && <Typography variant="body1">Toggle</Typography>}
    </>
  );
});

export default ImperativeButton;
