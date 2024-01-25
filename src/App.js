import "./styles/Global.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

function App() {
  return (
    <>
      {isLoaded ? (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <PulseLoader color="#36d7b7" />
      )}
    </>
  );
}

export default App;
