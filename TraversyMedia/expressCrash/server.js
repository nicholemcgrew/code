const express = require('express')
const path = require('path')

const app = express()

// setup static folder
app.use(express.static(path.join(__dirname, 'public')))


app.listen(8001, () => console.log(`Server running on port 8001`))