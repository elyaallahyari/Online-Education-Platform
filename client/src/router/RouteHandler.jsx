import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import DashboardLayout from '../layouts/DashboardLayout'
import Trending from '../pages/dashboard/Trending'
import Courses from '../pages/dashboard/Courses'
import Categories from '../pages/dashboard/Categories'
import Exams from '../pages/dashboard/Exams'
import About from '../pages/dashboard/About'
import Enter from '../pages/auth/Enter'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import VerifyCode from '../pages/auth/VerifyCode'
import CategoryCourses from '../components/CategoryCourses'
import ProfileCourses from '../pages/dashboard/profile/ProfileCourses'
import Login_admin from '../pages/admin/Login_admin'
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminUsers from '../pages/admin/AdminUsers'
import AdminCourses from '../pages/admin/AdminCourses'
import AdminReports from '../pages/admin/AdminReports'

export const RouteHandler = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/admin',
    element: <Login_admin />
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
  },
  {
    path: '/enter',
    element: <Enter />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/verify',
    element: <VerifyCode />
  },
  {
    path: '/category/:id',
    element: <CategoryCourses />
  },
  {
    path: '/profile/courses',
    element: <ProfileCourses />
  },
  {
    path: '/admin/dashboard',
    element: <AdminLayout />,
    children: [
      {
        element: <AdminDashboard />,
        path: ''
      },
      {
        element: <AdminUsers />,
        path: 'users'
      },
      {
        element: <AdminCourses />,
        path: 'courses'
      },
      {
        element: <AdminReports />,
        path: 'reports'
      }
    ]
  }
])
