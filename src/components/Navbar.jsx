import React, { useEffect, useState } from 'react'
import {Outlet, NavLink, Link} from 'react-router-dom'
const Navbar = () => {
  const [user, setUser] = useState({});
  const [action, setAction] = useState('login');
  const userLogin = ()=>{
    setAction('login');
  }
  const userLogout = ()=>{
    setUser({});
    setAction('login');
  }
  useEffect(()=>{
    console.log(user);
    console.log(action)
  },[user,action])
  return (
    <>
    <nav>
        <ul>
            <li key={'home'}><NavLink className={({isActive})=>(isActive ? 'active' : '')} to={'/'} >Home</NavLink></li>
            <li key={'about'}><NavLink to={'/about'}>About</NavLink></li>
            <li key={'contact'}><NavLink to={'/contact'}>Contact</NavLink></li>
            <li key={'catagories'}><NavLink to={'/catagories'}>Catagories</NavLink></li>
            <li key={'users'}><NavLink  to={'/users'}>Users</NavLink></li>
            {action==='logout' && <li key={'profile'}><NavLink  to={'/profile'}>Profile</NavLink></li>}
        </ul>
        <span>{action==='logout'&& user.username && user.password&&<p>User:<b>{user.username}</b></p>}
        {action==='logout'&& user.username && user.password 
        ? <Link to={'/'}><button onClick={userLogout} className='login'>logout</button></Link> 
        : <Link key={'login'} to={'/login'}><button className='login' onClick={userLogin}>Login</button></Link>}</span>
    </nav>
    <Outlet context={{user,setUser,action,setAction}}/>
    </>
  )
}

export default Navbar