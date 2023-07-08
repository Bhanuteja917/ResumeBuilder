const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { generateResume } = require('./generateResume')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/generate', (req, res) => {
  if (!(req.body.template_id === '1' || req.body.template_id === '2' || req.body.template_id === '3')) {
    res.status(404).send('Template not found')
    return
  }
  generateResume(req.body, (filePath, error) => {
    if (error) {
      console.error('Error generating resume:', error)
      res.status(500).send('Error generating resume')
    } else {
      setTimeout(() => { res.sendFile(filePath) }, 15000)
    }
  })
})

app.listen(process.env.PORT || 8081)
