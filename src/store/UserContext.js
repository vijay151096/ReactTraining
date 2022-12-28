
import React from "react";

const UserContext = React.createContext( {
    isAuthenticated: false,
    login: (username, password) => {},
    logout: () => {}
} );

export default UserContext