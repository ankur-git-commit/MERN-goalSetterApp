import asyncHandler from 'express'
import User from '../models/userModel.js'

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({ message: "Register User" })
}

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler (async (req, res) => {
    res.json({ message: "Login User" })
})

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe =  asyncHandler (async (req, res) => {
    res.json({ message: "User data display" })
})

export { registerUser, loginUser, getMe }
