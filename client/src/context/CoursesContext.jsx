import React, { createContext, useContext, useState, useEffect } from 'react'
import { privateRequest } from '../services/axios'

const CoursesContext = createContext()

export const CoursesProvider = ({ userId, children }) => {
  const [courses, setCourses] = useState([])

  const fetchCourses = async () => {
    if (!userId) return
    try {
      const res = await privateRequest.get(`/users/${userId}/courses`)
      setCourses(res.data || [])
    } catch (err) {
      console.error('❌ Error fetching courses:', err)
    }
  }

  const addCourse = async (course) => {
    try {
      const res = await privateRequest.post(`/users/${userId}/courses`, course)
      if (res.status === 200 || res.status === 201) {
        setCourses(res.data)
      }
    } catch (err) {
      console.error('❌ Error adding course:', err)
    }
  }

  const removeCourse = async (courseId) => {
    try {
      const res = await privateRequest.delete(`/users/${userId}/courses/${courseId}`)
      if (res.status === 200) {
        setCourses(res.data)
      }
    } catch (err) {
      console.error('❌ Error removing course:', err)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [userId])

  return (
    <CoursesContext.Provider value={{ courses, addCourse, removeCourse, fetchCourses }}>
      {children}
    </CoursesContext.Provider>
  )
}

export const useCourses = () => useContext(CoursesContext)
