import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error-page'>
    <h2>OOPS!</h2>
    <p>Unexpected error occured URL not found</p>
    <Link to='/'><button>Back to home</button></Link>
    </div>
  )
}

export default ErrorPage