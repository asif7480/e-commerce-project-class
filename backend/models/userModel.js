const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"]
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User