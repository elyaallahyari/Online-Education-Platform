import React, { useEffect, useState } from 'react'
import { privateRequest } from '../../services/axios'
import '../../assets/styles/AdminUsers.css'

const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingUser, setEditingUser] = useState(null)
  const [newUser, setNewUser] = useState({ fullName: '', email: '', age: '', role: 'user' })

  const fetchUsers = async () => {
    try {
      const res = await privateRequest.get('/admin/users')
      setUsers(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleAddUser = async (e) => {
    e.preventDefault()
    try {
      await privateRequest.post('/admin/users', newUser)
      setNewUser({ fullName: '', email: '', password: '', age: '', role: 'user' })
      fetchUsers()
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return
    try {
      await privateRequest.delete(`/admin/users/${id}`)
      fetchUsers()
    } catch (err) {
      console.error(err)
    }
  }

  const handleEditClick = (user) => {
    setEditingUser({ ...user })
  }

  const handleUpdateUser = async (e) => {
    e.preventDefault()
    try {
      await privateRequest.put(`/admin/users/${editingUser._id}`, editingUser)
      setEditingUser(null)
      fetchUsers()
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <p>Loading users...</p>

  return (
    <div className="admin-users">
      <h2>Users Management</h2>

      <form onSubmit={handleAddUser} className="add-user-form">
        <h3>Add New User</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={newUser.fullName}
          onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <table className="users-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) =>
            editingUser && editingUser._id === item._id ? (
              <tr key={item._id}>
                <td>
                  <input
                    type="text"
                    value={editingUser.fullName}
                    onChange={(e) => setEditingUser({ ...editingUser, fullName: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  />
                </td>
                <td>
                  <select
                    value={editingUser.role}
                    onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={editingUser.age || ''}
                    onChange={(e) => setEditingUser({ ...editingUser, age: e.target.value })}
                  />
                </td>
                <td>
                  <button onClick={handleUpdateUser} className="action-btn edit">
                    Save
                  </button>
                  <button onClick={() => setEditingUser(null)} className="action-btn delete">
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={item._id}>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => handleEditClick(item)} className="action-btn edit">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteUser(item._id)} className="action-btn delete">
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsers
