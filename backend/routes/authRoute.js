const express = require("express")
const router = express.Router()
const {
    register,
    login,
    currentUser
} = require("../controllers/authController")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")

// REGISTER || METHOD POST
router.post("/register", register)

// LOGIN || METHOD POST
router.post("/login", login)

// currentUser || METHOD GET
router.get("/currentUser", requireSignIn, currentUser)
router.get("/currentAdmin", requireSignIn, isAdmin ,currentUser)

module.exports = router