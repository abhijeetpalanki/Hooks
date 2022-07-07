import { Box } from "@mui/material";
import { useLayoutEffect, useEffect, useRef } from "react";

const UseLayouEffectHook = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <Box>
      <input
        ref={inputRef}
        value="ABHIJEET"
        style={{ width: 400, height: 60 }}
      />
    </Box>
  );
};

export default UseLayouEffectHook;
