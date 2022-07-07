import UseStateHook from "../hooks/UseStateHook";
import UseReducerHook from "../hooks/UseReducerHook";
import UseEffectHook from "../hooks/UseEffectHook";
import UseRefHook from "../hooks/UseRefHook";
import UseLayouEffectHook from "../hooks/UseLayouEffectHook";
import UseImperativeHandleHook from "../hooks/UseImperativeHandleHook/UseImperativeHandleHook";
import UseContextHook from "../hooks/UseContextHook/UseContextHook";
import UseMemoHook from "../hooks/UseMemoHook";
import UseCallbackHook from "../hooks/UseCallbackHook.jsx/UseCallbackHook";

import useStateImage from "../assets/useState.png";
import useRefImage from "../assets/useRef.png";
import useReducerImage from "../assets/useReducer.png";
import useMemoImage from "../assets/useMemo.png";
import useLayoutEffectImage from "../assets/useLayoutEffect.png";
import useImperativeHandleImage from "../assets/useImperativeHandle.png";
import useEffectImage from "../assets/useEffect.png";
import useContextImage from "../assets/useContext.png";
import useCallbackImage from "../assets/useCallback.png";

export const hooksData = [
  {
    id: 1,
    name: "use State",
    description:
      "useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.",
    example: <UseStateHook />,
    template: `
                import { useState } from "react";
                import { Button, Typography } from "@mui/material";

                const useStateHook = () => {
                  const [color, setColor] = useState("red");

                  return (
                    <>
                      <Typography variant="h3" mb={2}>
                        My favorite color is {color}!
                      </Typography>
                      <Button variant="contained" onClick={() => setColor("blue")}>
                        Blue
                      </Button>
                    </>
                  );
                };

                export default useStateHook;  
              `,
    link: "https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/",
    image: useStateImage,
  },
  {
    id: 2,
    name: "use Reducer",
    description:
      "useReducer Hook allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.",
    example: <UseReducerHook />,
    template: `
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
              `,
    link: "https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/",
    image: useReducerImage,
  },
  {
    id: 3,
    name: "use Effect",
    description:
      "useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.",
    example: <UseEffectHook />,
    template: `
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
              `,
    link: "https://blog.logrocket.com/guide-to-react-useeffect-hook/",
    image: useEffectImage,
  },
  {
    id: 4,
    name: "use Ref",
    description:
      "useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.",
    example: <UseRefHook />,
    template: `
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
              `,
    link: "https://blog.logrocket.com/complete-guide-react-refs/",
    image: useRefImage,
  },
  {
    id: 5,
    name: "Use Layout Effect",
    description:
      "UseLayoutEffect fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM.",
    example: <UseLayouEffectHook />,
    template: `                
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
              `,
    link: "https://blog.logrocket.com/useeffect-vs-uselayouteffect-examples/",
    image: useLayoutEffectImage,
  },
  {
    id: 6,
    name: "Use Imperative Handle",
    description:
      "useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases.",
    example: <UseImperativeHandleHook />,
    template: `
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

                -------------------------------------------------------------------

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
              `,
    link: "https://blog.logrocket.com/underrated-react-hooks-youre-missing-out-on/#:~:text=The%20useImperativeHandle%20Hook%20allows%20us,DOM%20in%20a%20function%20component.",
    image: useImperativeHandleImage,
  },
  {
    id: 7,
    name: "Use Context",
    description:
      "useContext hook makes it easy to pass data throughout your app without manually passing props down the tree which is known as prop drilling.",
    example: <UseContextHook />,
    template: `
                import { Stack } from "@mui/material";
                import React, { useState, createContext } from "react";
                import ContextLogin from "./ContextLogin";
                import ContextUser from "./ContextUser";

                export const AppContext = createContext(null);

                const UseContextHook = () => {
                  const [username, setUsername] = useState("");

                  return (
                    <AppContext.Provider value={{ username, setUsername }}>
                      <Stack spacing={2}>
                        <ContextLogin />
                        <ContextUser />
                      </Stack>
                    </AppContext.Provider>
                  );
                };

                export default UseContextHook;

                --------------------------------------------

                import { Box, TextField } from "@mui/material";
                import React, { useContext } from "react";
                import { AppContext } from "./UseContextHook";

                const ContextLogin = () => {
                  const { setUsername } = useContext(AppContext);

                  return (
                    <Box>
                      <TextField
                        variant="outlined"
                        label="Text"
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </Box>
                  );
                };

                export default ContextLogin;

                --------------------------------------------

                import { Box, Typography } from "@mui/material";
                import React, { useContext } from "react";
                import { AppContext } from "./UseContextHook";

                const ContextUser = () => {
                  const { username } = useContext(AppContext);

                  return (
                    <Box>
                      <Typography variant="body1">User: {username}</Typography>
                    </Box>
                  );
                };

                export default ContextUser;
              `,
    link: "https://blog.logrocket.com/react-reference-guide-hooks-api/#usecontext",
    image: useContextImage,
  },
  {
    id: 8,
    name: "Use Memo",
    description:
      "useMemo Hook returns a memoized value. The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.",
    example: <UseMemoHook />,
    template: `
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
              `,
    link: "https://blog.logrocket.com/rethinking-hooks-memoization/",
    image: useMemoImage,
  },
  {
    id: 9,
    name: "Use Callback",
    description:
      "useCallback Hook returns a memoized callback function. This allows us to isolate resource intensive functions so that they will not automatically run on every render.",
    example: <UseCallbackHook />,
    template: `
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

                ---------------------------------------------

                import { Box } from "@mui/material";
                import React, { useEffect } from "react";

                const CallbackChild = ({ returnComment }) => {
                  useEffect(() => {
                    console.log("FUNCTION WAS CALLED");
                  }, [returnComment]);

                  return <Box>{returnComment("Abhijeet")}</Box>;
                };

                export default CallbackChild;
              `,
    link: "https://blog.logrocket.com/react-usememo-vs-usecallback-a-pragmatic-guide/",
    image: useCallbackImage,
  },
];
