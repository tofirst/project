import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "components/Form";

import Home from "pages/Home";
import "./App.css";

import SignupPageContainer from "pages/SignupPageContainer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex w-screen h-screen justify-center items-center bg-gray-200">
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

          <Route
            path="/signup"
            element={
              <div className="flex w-screen h-screen justify-center items-center bg-gray-200">
                <SignupPageContainer />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
