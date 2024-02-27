import { createContext, useContext, useState } from "react";


const StateConext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
}
);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (token) => {
        _setToken(token);

        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }

    return (
        <StateConext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateConext.Provider>
    )
}

export const useStateContext = () => useContext(StateConext);
