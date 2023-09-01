
const express = require('express')

const app = express();

app.get('/greet', (req, res)=>{

  res.send("Hello, Express!")
  res.end()
})


app.get('/success', (req, res)=>{

  res.status(200)
  res.send("Response has been sent successfully with status 200!")
  res.end()
})

app.get('/notfound', (req, res)=>{

  res.status(404)
  res.send("The resource was not found")
  res.end()
})

app.get('/', (req, res)=>{

  res.cookie('username', 'JohnDoe')
  res.cookie('language', 'en')
  res.end()
})

app.get('/clearcookies', (req, res)=>{

  res.clearCookie('username')
  res.clearCookie('language')
  res.end("The cookies have been cleared!")
})

app.listen(3000, ()=>{
  console.log("running on port 3000")
})