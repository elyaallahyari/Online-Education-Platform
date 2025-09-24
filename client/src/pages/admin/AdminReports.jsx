import React, { useEffect, useState } from 'react'
import { privateRequest } from '../../services/axios'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from 'recharts'
import '../../assets/styles/AdminReports.css'

const AdminReports = () => {
  const [reports, setReports] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await privateRequest.get('/admin/reports')
        setReports(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [])

  if (loading) return <p className="loading">Loading reports...</p>
  if (!reports) return <p className="empty">No reports available</p>

  const chartData = [
    { name: 'Users', value: reports.totalUsers },
    { name: 'Courses Selected', value: reports.totalCoursesSelected }
  ]

  const COLORS = ['#6682ed', '#89cfe8']

  return (
    <div className="reports-container">
      <h2 className="reports-title"> Admin Reports</h2>

      <div className="stats-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>{reports.totalUsers}</p>
        </div>
        <div className="card">
          <h3>Total Courses Selected</h3>
          <p>{reports.totalCoursesSelected}</p>
        </div>
        {reports.mostActiveUser && (
          <div className="card highlight">
            <h3>Most Active User</h3>
            <p>{reports.mostActiveUser.fullName}</p>
            <span>{reports.mostActiveUser.email}</span>
            <strong>{reports.mostActiveUser.count} courses</strong>
          </div>
        )}
        {reports.mostPopularCourse && (
          <div className="card highlight">
            <h3>Most Popular Course</h3>
            <p>{reports.mostPopularCourse.title}</p>
            <strong>{reports.mostPopularCourse.count} users</strong>
          </div>
        )}
      </div>

      <div className="chart-box">
        <h3>Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {reports.popularCourses && (
        <div className="chart-box">
          <h3>Popular Courses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reports.popularCourses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#6682ed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default AdminReports
