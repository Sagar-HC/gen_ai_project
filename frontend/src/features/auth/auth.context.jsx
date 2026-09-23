import { createContext,useState } from "react";


export const AuthContext = createContext();

// here the children would be the app itself which provides us with all data needed
export const AuthProvider = ({ children })=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false);

    return(
        <AuthContext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}