import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

export const axiosReq = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

privateRequest.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token')
    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
    return req
  },
  (error) => {
    return Promise.reject(error)
  }
)

privateRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)
