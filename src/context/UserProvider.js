import { createContext, useState } from "react";
export const UserAccount = createContext(null);



const UserProvider=({ children })=> {
    const [account, setAccount]= useState();
    const [persion, setPersion]= useState({});
    return (
        <UserAccount.Provider value={{
            account,
            setAccount,
            persion,
            setPersion
        }}>
         {children}
        </UserAccount.Provider>
    )
}

export default UserProvider;
