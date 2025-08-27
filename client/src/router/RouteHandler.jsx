import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import DashboardLayout from '../layouts/DashboardLayout'
import Trending from '../pages/dashboard/Trending'
import Courses from '../pages/dashboard/Courses'
import Categories from '../pages/dashboard/Categories'
import Exams from '../pages/dashboard/Exams'
import About from '../pages/dashboard/About'

export const RouteHandler = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'trending', element: <Trending /> },
      { path: 'courses', element: <Courses /> },
      { path: 'categories', element: <Categories /> },
      { path: 'exams', element: <Exams /> },
      { path: 'about', element: <About /> }
    ]
  }
])
