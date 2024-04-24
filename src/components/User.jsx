import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const params = useParams();
  return (
    <p key={params.userid}>I am User {params.userid}</p>
  )
}

export default User