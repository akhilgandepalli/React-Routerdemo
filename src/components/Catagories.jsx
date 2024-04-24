import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
const Catagories = () => {
  return (
    <>
    <div>
      <h2>Catagories</h2>
    <ul>
        <li key={'ma'}>Mobile Accessories</li>
        <li key={'hm'}>Home Appliances</li>
        <li key={'fur'}>Furniture</li>
    </ul>
    </div>
    </>
  )
}

export default Catagories