import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import "../components/LoggedIn.css";

function LoggedIn() {
  let usersInSession = "usersInSession"
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('signedInUser')))
  }, [users])

  useEffect(()=>{
    let allUsersInStorage = JSON.parse(localStorage.getItem(usersInSession))
    setUsers(allUsersInStorage)
  }, [])

  const handleLogOut = () => {
    let allUsersInStorage = JSON.parse(localStorage.getItem(usersInSession));
    let remainingUsers = allUsersInStorage.filter(singleUser => singleUser !== user);
    setUsers(remainingUsers);
    localStorage.setItem(usersInSession, JSON.stringify(remainingUsers))
    navigate("/")
  }

  const handleUsersLogOut = (name) => {
    let allUsersInStorage = JSON.parse(localStorage.getItem(usersInSession));
    let remainingUsers = allUsersInStorage.filter(singleUser => singleUser !== name);
    setUsers(remainingUsers);
    localStorage.setItem(usersInSession, JSON.stringify(remainingUsers))
  }
 
 
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
                <button onClick={()=> handleUsersLogOut(user)} className="active-button">log out</button>
              </div>
            ))}
        </div>
        <button className="first-button" onClick={handleLogOut} >
          Log Out
        </button>
          <Link to="/">
            <button className="second-button">
              Sign in with a different user
            </button> 
        </Link>
      </div>
    </div>
  );
}

export default LoggedIn;