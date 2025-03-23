import axios from "axios"

const API_URL = "/api/users/"

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

// Code suggested for adding bearer token
const setupAxiosInterceptors = () => {
    axios.interceptors.request.use(
        (config) => {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user && user.token) {
                config.headers.Authorization = `Bearer ${user.token}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}

// setupAxiosInterceptors()

// Logout user
const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    register,
    login,
    logout,
}

export default authService
