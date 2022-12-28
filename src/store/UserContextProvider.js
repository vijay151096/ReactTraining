import React, {useState} from 'react';
import UserContext from "./UserContext";

function UserContextProvider(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = async(username, password) => {
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        const userDetails = await data.filter(user =>  user.username === username)[0];
        if(userDetails.username && userDetails.password === password){
            setIsAuthenticated(true);
        }
    }
    const logout = () => {
        setIsAuthenticated(false);
    }

    return (
        <UserContext.Provider value={{isAuthenticated, login: login, logout: logout}} > {props.children} </UserContext.Provider>
    );
}

export default UserContextProvider;