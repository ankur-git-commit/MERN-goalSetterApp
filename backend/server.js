import express from "express"
import dotenv from "dotenv"
import { router } from "./routes/goalRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js"
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", router)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running at ${PORT}`))
