import React, { useState } from 'react'

import { NavLink, Navigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const context = useOutletContext();
  const inputUpdate = (e)=>{
    const {name, value} = e.target;
    context.setUser(val=>({...val,[name]:value}));
  }
  if(context.action==='logout' && context.user.username && context.user.password){
    return <Navigate to='/profile' replace/>
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    if(context.user.username && context.user.password){
      context.setAction('logout');
    }else{
      context.setAction('login');
    }
  }
  // {!context.user.username && context.action!=='login' ?'Login':<NavLink to={'/users'}>Login</NavLink>}
  
  return (
    <div className='login-page'>Login-Page
        <form action="" onSubmit={submitHandler}>
            <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='Username' 
            onChange={inputUpdate}/>

            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Password'
            onChange={inputUpdate}/>
            <button className='login' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login