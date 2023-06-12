import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    isLoggedIn: '',
    username: '',
    mobileNumber: '',
    homeNumber: '',
    setUsername: (name) => {},
    logout: () => {}
});

function UserContextProvider({children}){
  const [username, setUsername] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function setUser(name) {
    setUsername(name);
    setIsLoggedIn(true);
  }

  function logout()
  {
    setUsername('');
    setIsLoggedIn(false);
  }

  const value = {
    isLoggedIn: isLoggedIn,
    username: username,
    mobileNumber:'999999999',
    homeNumber:'2222222',
    setUsername: setUser,
    logout: logout
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;