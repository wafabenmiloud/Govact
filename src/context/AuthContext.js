import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({fullname:"",email:""})

  async function getLoggedIn() {
    const res = await axios.get(
      "http://localhost:4000/logged"
    );

    setLoggedIn(res.data.loggedIn);
    setUserInfo(res.data.msg);
    console.log(loggedIn);
    console.log(
      userInfo
    )
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, userInfo }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };