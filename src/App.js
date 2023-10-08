import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./contexts/AppProvider";
import Game from "./pages/Game";
import YouTube from "./pages/YouTube";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <AppProvider>
      <Routes>
        <Route exact path="/" element={<YouTube />} />
      </Routes>
      </AppProvider>
      </Provider>
    </Router>
  );
}

export default App;
