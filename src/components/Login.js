import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "../components/Login.css";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  function changeUser(e) {
    setUser(e.target.value);
  }

  let usersInSession = "usersInSession"

  function formSubmit(e) {
    e.preventDefault();

    if(JSON.parse(localStorage.getItem(usersInSession)) == undefined || JSON.parse(localStorage.getItem(usersInSession)).length == 0){
      localStorage.setItem(usersInSession, JSON.stringify([user]));
      sessionStorage.setItem('signedInUser', JSON.stringify(user));
      navigate("/dashboard");
    }else{
      let allUsersInStorage = JSON.parse(localStorage.getItem(usersInSession))
      if(allUsersInStorage.some(singleUser => singleUser === user)){
        alert("user is logged in")
        navigate("/dashboard")
      }else{
        sessionStorage.setItem('signedInUser', JSON.stringify(user));
        localStorage.setItem(usersInSession, JSON.stringify([user, ...allUsersInStorage]));
        navigate("/dashboard")
      }
    }

    // localStorage.setItem("user", user);
    // if (!localStorage.getItem("usersInSession")) {
    //   localStorage.setItem("usersInSession", JSON.stringify([user]));
    //   sessionStorage.setItem("user", user);
    //   navigate("/dashboard");
    // } else {
    //   const prevUsersInSession = JSON.parse(
    //     localStorage.getItem("usersInSession")
    //   );

    //   if (prevUsersInSession.includes(user)) {
    //     alert("user already signed in");
    //     navigate("/dashboard");
    //   } else {
    //     localStorage.setItem(
    //       "usersInSession",
    //       JSON.stringify([...prevUsersInSession, user])
    //     );
    //     sessionStorage.setItem("user", user);
    //     navigate("/dashboard");
    //   }
    // }
  }

  return (
    <div className="contents">
      <div className="main-content">
        <h1 className="brand-name">BITMAMA</h1>

        <form className="form" onSubmit={formSubmit}>
          <div className="circle"></div>
          <div className="circle1"></div>
          <h1 className="form-h1">Login</h1>
          <h3 className="form-h3">Welcome</h3>
          <label className="label">Enter Username</label>
          <input
            className="first-input"
            type="text"
            placeholder="Username..."
            value={user}
            onChange={changeUser}
            required
          />
          <br />
          
          <input className="first-input2" type="submit" value="Log In" />
          
        </form>
      </div>
    </div>
  );
}

export default Login;