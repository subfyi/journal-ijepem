import React, { useContext } from 'react';
import {useAuth, useFetch} from "react-admin-base";

const UserContext = React.createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [ api, is_logged_in ] = useAuth();
    const [user] = useFetch(is_logged_in && '/api/user/me');

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}
