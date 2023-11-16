import React,{createContext,useContext} from 'react';

const UserContext=createContext();

export function UserContextProvider ({children}){
    return <UserContext.Provider>{children}</UserContext.Provider>
}    // this is the provider or producer part 

export function useUserContext(){
    return useContext(UserContext);
}  // this is the consumer part



// basically this is the context provider pattern