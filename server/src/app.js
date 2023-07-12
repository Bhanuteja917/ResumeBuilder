const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { generateResume } = require('./generateResume')
const { validateJson } = require('./validate')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/generate', (req, res) => {
  if (!validateJson(req.body)) {
    res.status(400).send(
      {
        name: 'Bad Request',
        message: 'Invalid JSON'
      }
    )
    return
  }
  if (!(req.body.template_id === '1' || req.body.template_id === '2' || req.body.template_id === '3')) {
    res.status(404).send(
      {
        name: 'Template not found',
        message: 'Please select another template'
      }
    )
    return
  }
  generateResume(req.body, (filePath, err) => {
    if (err) {
      if (err?.message === 'client_id must not be blank; client_secret must not be blank' ||
          err?.message === 'client_id must not be blank' ||
          err?.message === 'client_secret must not be blank' ||
          err?.message === 'invalid client_secret parameter' ||
          err?.message === 'invalid client_id parameter') {
        res.status(401).send(
          {
            name: 'Unauthorized',
            message: err?.message
          }
        )
        return
      }
      res.status(500).send(
        {
          name: 'Internal Server Error',
          message: err?.message
        })
    } else {
      setTimeout(() => { res.download(filePath) }, 1000)
    }
  })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

app.listen(process.env.PORT || 8081)
