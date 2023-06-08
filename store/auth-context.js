import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    username: '',
    setUsername: (name) => {},
});

function UserContextProvider({children}){
  const [username, setUsername] = useState();

  function setUser(name) {
    setUsername(name);
  }

  const value = {
    username: username,
    setUsername: setUser
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;