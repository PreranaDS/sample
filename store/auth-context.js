import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    username: '',
    mobileNumber: '',
    homeNumber: '',
    setUsername: (name) => {},
});

function UserContextProvider({children}){
  const [username, setUsername] = useState();

  function setUser(name) {
    setUsername(name);
  }

  const value = {
    username: username,
    mobileNumber:'999999999',
    homeNumber:'2222222',
    setUsername: setUser
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;