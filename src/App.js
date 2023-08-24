import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./contexts/AppProvider";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <AppProvider>
      <Routes>
        <Route exact path="/" element={<Game />} />
      </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
