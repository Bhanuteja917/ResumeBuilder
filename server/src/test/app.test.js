const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { expect } = require('chai')
const sinon = require('sinon')
const request = require('supertest')
const { describe, it, beforeEach } = require('mocha')

// Mock generateResume and validateJson functions
const generateResumeMock = sinon.stub()
const validateJsonMock = sinon.stub()

// Create the Express app
const app = express()
app.use(bodyParser.json())
app.use(cors())

// POST /generate endpoint
app.post('/generate', (req, res) => {
  if (!validateJsonMock(req.body)) {
    return res.status(400).json({
      name: 'Bad Request',
      message: 'Invalid JSON'
    })
  }
  if (!(req.body.template_id === '1' || req.body.template_id === '2' || req.body.template_id === '3')) {
    return res.status(404).json({
      name: 'Template not found',
      message: 'Please select another template'
    })
  }
  generateResumeMock(req.body, (filePath, err) => {
    if (err) {
      if (
        err?.message === 'client_id must not be blank client_secret must not be blank' ||
        err?.message === 'client_id must not be blank' ||
        err?.message === 'client_secret must not be blank' ||
        err?.message === 'invalid client_secret parameter' ||
        err?.message === 'invalid client_id parameter'
      ) {
        return res.status(401).json({
          name: 'Unauthorized',
          message: err?.message
        })
      }
      return res.status(500).json({
        name: 'Internal Server Error',
        message: err?.message
      })
    } else {
      setTimeout(() => res.sendFile(filePath), 1000)
    }
  })
})

describe('ResumeBuilder Server', () => {
  beforeEach(() => {
    // Reset the mocks before each test
    sinon.reset()
  })

  it('should respond with 400 if JSON validation fails', (done) => {
    // Mock the validateJson function to return false
    validateJsonMock.returns(false)

    request(app)
      .post('/generate')
      .send({ invalid: 'data' })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          name: 'Bad Request',
          message: 'Invalid JSON'
        })
        done(err)
      })
  })

  it('should respond with 401 if generateResume encounters a client credentials error', (done) => {
    // Mock the validateJson function to return true
    validateJsonMock.returns(true)

    // Mock the generateResume function to invoke the callback with an error
    const error = new Error('invalid client_secret parameter')
    generateResumeMock.yields(null, error)

    request(app)
      .post('/generate')
      .send({ template_id: '1' })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          name: 'Unauthorized',
          message: error.message
        })
        done(err)
      })
  })

  it('should respond with 404 if template_id is invalid', (done) => {
    // Mock the validateJson function to return true
    validateJsonMock.returns(true)

    request(app)
      .post('/generate')
      .send({ template_id: '4' })
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          name: 'Template not found',
          message: 'Please select another template'
        })
        done(err)
      })
  })

  it('should respond with 500 if generateResume encounters an internal error', (done) => {
    // Mock the validateJson function to return true
    validateJsonMock.returns(true)

    // Mock the generateResume function to invoke the callback with an error
    const error = new Error('Internal error')
    generateResumeMock.yields(null, error)

    request(app)
      .post('/generate')
      .send({ template_id: '1' })
      .expect(500)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          name: 'Internal Server Error',
          message: error.message
        })
        done(err)
      })
  })

  // Add more test cases to cover different scenarios
})
