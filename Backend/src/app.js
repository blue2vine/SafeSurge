import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// import  userRouter  from "./Routes/user.routes.js"
import { errorHandler } from "./utils/ErrorHandler.js"
import Smsroutes from "./Routes/SMSroutes.js"
import userRouter from "./Routes/user.routes.js"
import missingRouter from "./Routes/missing.routes.js"

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(express.static('public'))
app.use(cookieParser())

app.use("/api/v1/esms",Smsroutes)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/missing",missingRouter)




app.use(errorHandler)



export default app