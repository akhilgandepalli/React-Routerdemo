import React from 'react'
import { Navigate, useOutletContext } from 'react-router-dom'

const Profile = () => {
    const context = useOutletContext();
    if(!context.user.username && context.action === 'login'){
        return <Navigate to={'/'} replace/>
    }
  return (
    <div>
        <h2>Hi {context.user.username}</h2>
        <p>Welcome to the portal</p>
    </div>
  )
}

export default Profile