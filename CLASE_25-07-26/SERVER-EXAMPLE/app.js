const express = require('express')
const app = express()
const port = 3101

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/que-locura', (req, res) => {
  res.json({
    quee: "si este ya es un server con dataaaaaaaaaaa"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
