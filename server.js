import express from "express"
import colors from "colors"
import connectDB from "./config/db.js"
import authRouter from "./routes/authRouter.js"
import doctorRouter from "./routes/doctorRouter.js"

const PORT = 5000

connectDB()


const app = express()


app.use(express.json())

app.use('/api/v1/user', authRouter)
app.use('/api/v1/doctor', doctorRouter)


app.get('/', (req, res) => {
    res.send('i am krantikumar')
})

app.listen(PORT, () => {
    console.log("BackEnd sever Running on Given Port".bgWhite.black)
})