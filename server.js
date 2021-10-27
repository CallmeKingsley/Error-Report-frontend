const express = require('express')
const app = express()
const path = require('path')


const port = process.env.PORT || 1800

//app.use(express.static(path.join(__dirname, 'client','Home')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html')) // relative path
    })
}

app.listen(port, () => {
  console.log('connected')
})