import express from "express"
import dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import connectDB from "./config/db.js"
import { goalRouter } from "./routes/goalRoutes.js"
import { userRouter } from "./routes/userRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js"

import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", goalRouter)
app.use("/api/users", userRouter)

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    const frontendBuildPath = path.resolve(__dirname, "../frontend/dist")
    app.use(express.static(frontendBuildPath))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(frontendBuildPath, "index.html"))
    })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running at ${PORT}`))
