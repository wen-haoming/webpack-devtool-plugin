const express = require('express')

const app = express()


app.get('/a', function (req, res) {
    res.send('get a')
  })
  app.get('/b', function (req, res) {
    res.send('get a')
  })
  app.get('/c', function (req, res) {
    res.send('get a')
  })

  app.listen(2000)