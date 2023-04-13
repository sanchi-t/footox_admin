// import React from "react";
import { useSelector } from "react-redux";
import { useState, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {AuthContext } from "../Admin/Context/authProvider"
 function PrivateRoute({children}) {
  const { isLoggedIn } = useContext(AuthContext);
  var userInfo = localStorage.getItem('userInfo');
   userInfo = JSON.parse(userInfo);
   const loggedIn = userInfo?.loggedIn ? userInfo?.loggedIn : false;
  const location = useLocation();
  console.log(loggedIn,"asdfghj");
   if (!loggedIn) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return children;

  // const location = useLocation();
  // const auth = useSelector((store) => store.AuthReducer.isAuth);
  // if (!auth) {
  //   return <Navigate to="/" replace state={{ from: location }} />;
  // }
  // return children;
};

export default PrivateRoute;

