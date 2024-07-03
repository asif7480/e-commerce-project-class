import { useState, createContext, useContext } from "react"

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUser ] = useState({
        email: localStorage.getItem("email"),
        orders: []
    })

    return(
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

// custom hook
export const useAuth = () => useContext(UserContext)