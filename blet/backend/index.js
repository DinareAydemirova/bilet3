const express = require('express')
require("./src/config/db")

const router=require("./src/routes/menuRoute")
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use("/", router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})