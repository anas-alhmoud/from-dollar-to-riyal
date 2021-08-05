var express = require('express')
var app = express()

app.get('/:price', function (req, res) {
  res.send((req.params.price * 3.75).toString())
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
})