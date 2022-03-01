import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "components/Form";

import Home from "pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Form />
              </div>
            }
          />

          <Route
            path="/home"
            element={
              <div className="App">
                <Home />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
