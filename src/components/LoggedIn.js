import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "../components/LoggedIn.css";

function LoggedIn() {
  let usersInSession = "usersInSession"
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('signedInUser')))
  }, [users])

  useEffect(()=>{
    let allUsersInStorage = JSON.parse(localStorage.getItem(usersInSession))
    setUsers(allUsersInStorage)
  }, [])

  const handleLogOut = (index) => {
    let allUsersInStorage = JSON.parse(localStorage.getItem(usersInSession))
   
  }
 
  // const users = JSON.parse(localStorage.getItem("usersInSession"));

  // useEffect(() => {
  //   // we check if there's a user in our sessionStorage (when the user opens a new tab)
  //   // if we don't have any we fallback to the last user (which we have in localStorage) coool ;)
  //   if (Object.values(localStorage) === 0) {
  //     setUser(sessionStorage.getItem("user"));
  //   } else {
  //     setUser(localStorage.getItem("user"));
  //   }
  // }, [user]);

  const handleDelete = () => {
    console.log('users')
   // localStorage.removeItem('user');
  }

  return (
    <div className="main-content">
      <div className="login-content">
        {user ? (
          <h1 className="login-h1">Welcome {user}</h1>
        ) : (
          <h1>Loading....</h1>
        )}
        <h3 className="dashboard">Dashboard</h3>

        {/* display users in session */}
        <div className="user-detains">
            <h4 className="active">Active users on browser</h4>
            {users?.map((user, index) => (
              <div key={nanoid()}>
                <p className="active-users">{user}</p>
                {
                  <div className="green"></div>
                }
                {
                
                  <h5 className="h5">active</h5>
                }
                <button onClick={()=> handleLogOut(index)} className="active-button">log out</button>
              </div>
            ))}
        </div>
        <Link to="/">
        <button className="first-button" >
          Log Out
        </button>

        <button className="second-button">
          Sign in with a different user
        </button>
        </Link>
      </div>
    </div>
  );
}

export default LoggedIn;