import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import swal from "sweetalert";
import {AuthContext} from "./Context/authProvider"

import React from 'react'

const Auth = ({ allowedRoles }) => {
    // const {isLoggedIn} = useContext(AuthContext);
    const isLoggedIn=JSON.parse(localStorage.getItem('userInfo'));
    
    console.log('sanchit',isLoggedIn);
    function showUnauthorizedAlert() {
      swal({
        title: "Unauthorized Access",
        text: "You are not authorized to access this page",
        icon: "error",
        button: "OK",
      });
    }
    const location = useLocation();

  return (
    allowedRoles.find(role => isLoggedIn?.role?.includes(role))
     // auth.role.find(role => allowedRoles?.includes(role))
      ? <Outlet/>
      : isLoggedIn?.name
        // ? <Navigate to="/unauthorized" state={{ from: location}} replace/>
        ? showUnauthorizedAlert()
        : <Navigate to="/" state={{from: location}} replace/>
  )
}

export default Auth;