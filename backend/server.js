import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoutes.js"
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json()) // using this middleware whenever we get the request from frontend to backend that will be parsed using this json
app.use(cors()) // using this we can access the backend from any frontend

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Api Working")
}) // get method is a http method using which we can request the data from the server

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://kunaltalreja216:kunaltalreja216@cluster0.kgmp259.mongodb.net/?