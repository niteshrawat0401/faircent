import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/signup.css";

let init = {
  name: "",
  email : "",
  passWord: "",
};

export const Signup = () => {
  const [signup, setSignupdata] = useState(init);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupdata({ ...signup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://scarlet-firefly-veil.cyclic.app/auth/signup", signup)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log("error", err);
      });
  };

  return (
    <>
    <div className="signup_main_cont">
      <h1 style={{ fontWeight: "bold",fontSize:"21px",paddingTop:"2rem" }}>Register User</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          name="name"
          className="inp1"
          placeholder="UserName"
          onChange={handleChange}
          value={signup.name}
          required
        />
        <br />
        <input
          type="text"
          name="email"
          className="inp2"
          placeholder="Email"
          onChange={handleChange}
          value={signup.email}
          required
        />
        <br />
        <input
          type="password"
          name="passWord"
          className="inp2"
          placeholder="PassWord"
          onChange={handleChange}
          value={signup.passWord}
          required
        />
        <br/>
        <input className="inp5" type="submit" value="Sign Up" />
      </form>
      <p className="my-4">
        Already have an account <Link className="text-blue-700	" to={"/"}>Login</Link>
      </p>
    </div>
    </>
  );
};