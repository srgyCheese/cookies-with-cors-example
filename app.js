const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(express.json({extended: true}))

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000')
   res.setHeader('Access-Control-Allow-Credentials', 'true')
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

   next()
})

app.get('/getcookies', (req, res) => {
   res.send(JSON.stringify(req.cookies))
})

app.post('/setcookie', (req, res) => {
   const {name, value} = req.body

   res.cookie(name, value, {httpOnly: true}).send()
})

app.listen(3000)