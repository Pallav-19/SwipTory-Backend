
const express = require('express')
const router = express.Router()
const register = require('../controllers/auth/register')
const login = require('../controllers/auth/login')
const handleRefreshToken = require('../controllers/auth/refreshToken')
const logout = require('../controllers/auth/logout')

router.post("/register", register)
router.post("/login", login)
router.get("/refresh", handleRefreshToken)
router.get("/logout", logout)

module.exports = router