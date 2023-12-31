import React, {createContext, useContext, useState, useEffect} from 'react';

const UserContext = createContext({state: {}, actions: {}});

export function UserContextProvider({
  children,
  username,
  setUsername,
  isNotificationEnabled,
  setIfNotifEnabled,
}) {
  //const [data, setData] = useState(username);

  //   useEffect(()=>{
  //     setData(username)
  //   },[username]);// in future we can have more states like this

  const value = {
    state: {username: username, isNotificationEnabled},
    actions: {setUsername: setUsername, setIfNotifEnabled},
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
} // this is the provider or producer part

export function useUserContext() {
  return useContext(UserContext);
} // this is the consumer part

// basically this is the context provider pattern
