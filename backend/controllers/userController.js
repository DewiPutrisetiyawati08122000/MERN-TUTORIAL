const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    if (!name || !email || !password){
        res.status(400)
        throw Error('Please add all fields')
    }

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw Error('User already exists')
    }
    res.json({message: "Register User"})
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login User"})
})

const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User data display"})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}