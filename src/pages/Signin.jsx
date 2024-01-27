import React, { useState } from "react";
import "../styles/Signin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      nav("/");
    });
  };

  return (
    <div className="signinContainer">
      <div className="content">
        <div className="title">
          <h1>
            Sign in to <br />
            your account<span>.</span>
          </h1>
        </div>

        <div className="signinForm">
          <form onSubmit={handleSubmit}>
            <div className="secondRow">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="thirdRow">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <p>
              Don't have an account?{" "}
              <a href="/signup">
                <span>Sign up.</span>
              </a>
            </p>

            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
