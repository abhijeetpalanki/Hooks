import { Button, Typography } from "@mui/material";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <Typography variant="h5">{state.count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </Button>

      {state.showText && (
        <Typography variant="body1">This is a text</Typography>
      )}
    </div>
  );
};

export default UseReducerHook;
