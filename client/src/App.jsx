import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { RouteHandler } from './router/RouteHandler'
import './assets/styles/app.css'

const App = () => {
  return (
    <>
      <RouterProvider router={RouteHandler} />
    </>
  )
}

export default App
