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
