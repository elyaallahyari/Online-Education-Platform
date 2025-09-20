import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { RouteHandler } from './router/RouteHandler'
import './assets/styles/app.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={RouteHandler} />
    </>
  )
}

export default App
