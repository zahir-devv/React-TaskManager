import React, { useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import Employeedashboard from "./Components/Dashboard/Employeedashboard";
import Admindashboard from "./Components/Dashboard/Admindashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";

const App = () => {
  /* useEffect(() => {
    setLocalStorage();
  }, []);  */

  const [user, setUser] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  const authData = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser).role);
    }

    const userData = localStorage.getItem("loggedInUserData");
    if (userData) {
      setLoggedInUserdata(JSON.parse(userData));
    }
  }, []);

  const handLogin = (email, password) => {
    if (
      authData.admin.find((a) => a.email === email && a.password === password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );

        // Save the logged-in user data to local storage
        localStorage.setItem("loggedInUserData", JSON.stringify(employee));
        setLoggedInUserdata(employee); // Set state directly
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handLogin={handLogin} />
      ) : user === "admin" ? (
        <Admindashboard />
      ) : (
        <Employeedashboard data={loggedInUserdata} />
      )}
    </>
  );
};

export default App;
