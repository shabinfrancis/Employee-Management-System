import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  // const authData = useContext(AuthContext)
  const [ authData, setAuthData ] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    // console.log(loggedInUser);

    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      // console.log(userData);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  //Optional: Uncomment the below line to set the local storage

  // useEffect(() => {
  //   console.log('authData:', authData);
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])

  const handleLogin = (email, password) => {
    // API call to login
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password)
      if(employee) {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }))
      }
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
      {/* {user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : ''} */}
    </>
  )
}

export default App
