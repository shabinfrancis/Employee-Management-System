import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    // console.log(handleLogin)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
        // console.log("Form submitted")
    }
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="border-2 border-emerald-700 rounded-xl p-20">
                    <form
                        onSubmit={(e) => {
                            submitHandler(e); 
                        }}
                        className='flex flex-col items-center justify-center'
                    >
                        <input
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className='text-white outline-none bg-transparent border-2 border-emerald-700 rounded-full text-xl px-5 py-3 mx-5 my-3 placeholder:text-white w-full' type="email" placeholder='Enter your email' />
                        <input
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            className='text-white outline-none bg-transparent border-2 border-emerald-700 rounded-full text-xl px-5 py-3 mx-5 my-3 placeholder:text-white w-full' type="password" placeholder='Enter password' />
                        <button className='text-white outline-none bg-transparent border-none bg-emerald-700 rounded-full text-xl px-5 py-3 mx-5 my-3 placeholder:text-white w-full'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login