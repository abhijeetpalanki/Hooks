import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Grid from "./pages/HooksGrid";
import Detail from "./pages/Detail";
import Error from "./pages/Error";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { hooksData } from "./data/hooksData";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                React Hooks
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Grid hooksData={hooksData} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
