const express = require("express")
const app = express()
const {connecttomongoDB} = require("./connect")
const urlRoute = require("./routes/url")
const PORT = 8001;

connecttomongoDB("mongodb://localhost:27017/short-url")
.then(() => console.log("MongoDB connected"))

app.use(express.json)
app.use("/url", urlRoute)

app.get

app.listen(PORT,()=> console.log(`the server has started at port ${PORT}`))
