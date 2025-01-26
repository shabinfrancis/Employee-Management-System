import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  
  // const [username, setUsername] = useState('')

  // if(!data) {
  //   setUsername('Admin')
  // } else {
  //   setUsername(data.firstname)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // console.log(props.changeUser);
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-bold'>Hello <br /> <span className='text-3xl font-semibold'> username 😉 </span></h1>
        <button onClick={logOutUser} className='text-lg font-medium bg-red-500 rounded-md px-5 py-3'>Log Out</button>
    </div>
  )
}

export default Header