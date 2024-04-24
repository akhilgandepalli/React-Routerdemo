import React from 'react'
import {NavLink , Outlet} from 'react-router-dom'

const Users = () => {
    const users=[1,2,3,4,5]
  return (
    <div>Users
        <ul>
            {users.map((e)=>{
                return (<li key={`${e}`}><NavLink className={({isActive})=>(isActive ? 'active' : '')} to={`/users/${e}`}>User {e}</NavLink></li>)
            })}
        </ul>
        <Outlet/>
    </div>
  )
}

export default Users