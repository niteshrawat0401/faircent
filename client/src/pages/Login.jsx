import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./css/login.css"

let init = {
  name: "",
  passWord: "",
};

export const Login = () => {
  const [login, setlogin] = useState(init);
  const navigate = useNavigate()

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://scarlet-firefly-veil.cyclic.app/auth/login", login)
      .then((res) => {
        localStorage.setItem("pvtroute", JSON.stringify({
          isLoggin : true,
          userId : res.data.userID,
          token: res.data.accessToken,
          name: login.name,
          passWord: login.passWord,
        }))
        setlogin(res.data);
        // console.log(res.data);
        setlogin({ ...init });
        alert("Login sucessfully");
        navigate("/bmscalculator")
      })
      .catch((err) => {
        alert("User not found");
        console.log("error", err);
      });
  };
  return (
  <>
  <div className="login_main_container my-7">
      <h1  style={{ fontWeight: "bold", paddingTop: "2rem", fontSize: "21px" }}>Login User</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          className="inpu1"
          placeholder="UserName"
          onChange={handleChanged}
          value={login.name}
          required
        />
        <br />
        <input
          type="password"
          name="passWord"
          className="inpu2"
          placeholder="PassWord"
          onChange={handleChanged}
          value={login.passWord}
          required
        />
        <br/>
        <input className="inpu4" type="submit" value="Log In" />
      </form>
      <p className="my-4">
        Create an account <Link className="text-blue-700	" to={"/signup"}>Signup</Link>
      </p>
    </div>
    </>
  );
};