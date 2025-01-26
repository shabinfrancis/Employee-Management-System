import React, { useState, useEffect, createContext } from 'react'
import { employees, getLocalStorage, initializeLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    const [userData, setUserData] = useState({
        employees: employees, // Initialize with your employee data
    });

    // const [authData, setAuthData] = useState({employees: []})

    // useEffect(() => {
    //   initializeLocalStorage();
    //   const {employees, admin} = getLocalStorage()
    //   setAuthData({employees, admin})
    // }, [])

    useEffect(() => {
        initializeLocalStorage();
        const storedEmployees = JSON.parse(localStorage.getItem('employees'));
        if (storedEmployees) {
            setUserData({ employees: storedEmployees });
        }
    }, []);
    
    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider