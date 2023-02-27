import { createContext, useState } from "react";
export const UserAccount = createContext(null);



const UserProvider=({ children })=> {
    const [account, setAccount]= useState();
    return (
        <UserAccount.Provider value={{
            account,
            setAccount
        }}>
         {children}
        </UserAccount.Provider>
    )
}

export default UserProvider;
