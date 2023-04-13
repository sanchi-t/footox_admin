import { createContext, useState } from "react";
import axios from "axios";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // const location = useLocation();
    const [auth, setAuth] = useState(false);
    
    console.log(auth, 'aman');
      return (
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
        )
 
    
}

export { AuthContext, AuthProvider};


// import { useSelector } from "react-redux";


// const Authentication = ({ children }) => {
 
//   const auth = useSelector((store) => store.AuthReducer.isAuth);
  
// };

// export default Authentication;
