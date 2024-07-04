const express = require("express")
const router = express.Router()
const {
    register,
    login,
    userProfile,
    adminProfile
} = require("../controllers/authController")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")

// REGISTER || METHOD POST
router.post("/register", register)

// LOGIN || METHOD POST
router.post("/login", login)

// currentUser || METHOD GET
router.get("/userProfile", requireSignIn, userProfile)
router.get("/adminProfile", requireSignIn, isAdmin ,adminProfile)

module.exports = router