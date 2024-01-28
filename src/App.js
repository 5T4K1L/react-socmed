import "./styles/Global.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Homepage from "./pages/Homepage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [login, setLogin] = useState();

  onAuthStateChanged(auth, (user) => {
    setLogin(user);
  });

  useEffect(() => {
    const fetchData = () => {
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoaded ? (
              login ? (
                <Homepage />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Loading />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoaded ? login ? <Navigate to="/" /> : <Signin /> : <Loading />
          }
        />
        <Route
          path="/signup"
          element={
            isLoaded ? login ? <Navigate to="/" /> : <Signup /> : <Loading />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
