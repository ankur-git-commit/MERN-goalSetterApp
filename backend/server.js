import express from "express"
import dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import connectDB from "./config/db.js"
import { goalRouter } from "./routes/goalRoutes.js"
import { userRouter } from "./routes/userRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js"

connectDB()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", goalRouter)
app.use("/api/users", userRouter)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running at ${PORT}`))
