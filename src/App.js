import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./contexts/AppProvider";
import Game from "./pages/Game";
import YouTube from "./pages/YouTube";

function App() {
  return (
    <Router>
      <AppProvider>
      <Routes>
        <Route exact path="/" element={<YouTube />} />
      </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
