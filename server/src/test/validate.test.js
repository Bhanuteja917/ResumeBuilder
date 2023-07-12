const { expect } = require('chai')
const { describe, it } = require('mocha')
const jsonData = require('./test.json')

const {
  validateJson
} = require('../validate')

describe('validateJson', () => {
  it('should return true for valid JSON', () => {
    const req = jsonData

    const result = validateJson(req)
    expect(result).to.equal(true)
  })

  it('should return false for invalid JSON', () => {
    const req = {
      experience: [
        {
          company_name: 'ABC Inc',
          passing_year: '2010-2012',
          responsibilities: 'Developed web applications'
        }
      ],
      education: [
        {
          school_name: 'XYZ University',
          passing_year: '2008-2010',
          description: 'Bachelor of Science'
        }
      ],
      achievements: [
        {
          field: 'Web Development',
          awards: 'Best Web Developer'
        }
      ]
    }

    const result = validateJson(req)
    expect(result).to.equal(false)
  })
})
