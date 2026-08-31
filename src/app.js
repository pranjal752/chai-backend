import express from "express"
import cors from "cors"
// routes import
import userRouter from './routes/user.routes.js'
import cookieParser from "cookie-parser"   // server se user ka browser cookies access and cookies set kerna basically crud operation , only read server
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())



// routes declaration
app.use("/api/v1/users", userRouter)


// https://localhost:8000/api/v1/users/register

export {app}
