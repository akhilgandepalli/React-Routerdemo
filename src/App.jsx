import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Catagories from './components/Catagories';
import Users from './components/Users';
import User from './components/User';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/Catagories',
          element: <Catagories/>
        },
        {
          path: '/users',
          element: <Users/>,
          children:[
            {
              path:'/users/:userid',
              element:<User/>
            }
          ]
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/profile',
          element:<Profile/>
        }
      ]

    },
    
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
