import React, { useState } from "react";
import "../styles/Signup.css";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          firstName,
          username,
        });
      }
    );
    nav("/login");
  };

  return (
    <div className="signupContainer">
      <div className="content">
        <div className="title">
          <h1>
            Create <br />
            your account<span>.</span>
          </h1>
        </div>

        <div className="signupForm">
          <form onSubmit={handleSubmit}>
            <div className="firstRow">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                type="text"
              />
              <input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
              />
            </div>
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
              Already have an account?{" "}
              <a href="/login">
                <span>Sign in.</span>
              </a>
            </p>

            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
