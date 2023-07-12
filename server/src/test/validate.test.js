const { expect } = require('chai')
const { describe, it } = require('mocha')
const jsonData = require('./test.json')

const {
  validateJson,
  validatePersonalInformation,
  validateSkills,
  validateWorkExperience,
  validateEducation,
  validateAchievements
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

describe('validatePersonalInformation', () => {
  it('should return true for valid personal information', () => {
    const req = jsonData.personal_information

    const result = validatePersonalInformation(req)
    expect(result).to.equal(true)
  })

  it('should return false for invalid personal information', () => {
    const req = {
      name: 'John',
      last_name: 'Doe',
      email_address: 'john.doe@example.com',
      phone_number: 'invalid',
      linkedin_url: 'https://www.linkedin.com/in/johndoe'
    }

    const result = validatePersonalInformation(req)
    expect(result).to.equal(false)
  })
})

describe('validateSkills', () => {
  it('should return true for valid skills', () => {
    const skills = ['JavaScript', 'HTML', 'CSS']

    const result = validateSkills(skills)
    expect(result).to.equal(true)
  })

  it('should return false for invalid skills', () => {
    const skills = null

    const result = validateSkills(skills)
    expect(result).to.equal(false)
  })
})

describe('validateWorkExperience', () => {
  it('should return true for valid work experience', () => {
    const workExperience = [
      {
        company_name: 'ABC Inc',
        passing_year: '2010-2012',
        responsibilities: 'Developed web applications'
      }
    ]

    const result = validateWorkExperience(workExperience)
    expect(result).to.equal(true)
  })

  it('should return false for invalid work experience', () => {
    const workExperience = [
      {
        company_name: 'ABC Inc',
        passing_year: '2010-2012',
        responsibilities: null // Invalid responsibilities
      }
    ]

    const result = validateWorkExperience(workExperience)
    expect(result).to.equal(false)
  })
})

describe('validateEducation', () => {
  it('should return true for valid education', () => {
    const education = [
      {
        school_name: 'XYZ University',
        passing_year: '2008-2010',
        description: 'Bachelor of Science'
      }
    ]

    const result = validateEducation(education)
    expect(result).to.equal(true)
  })

  it('should return true for invalid education', () => {
    const education = [
      {
        school_name: 'XYZ University',
        passing_year: '2008-2010',
        description: null // Invalid description
      }
    ]

    const result = validateEducation(education)
    expect(result).to.equal(false)
  })
})

describe('validateAchievements', () => {
  it('should return true for valid achievements', () => {
    const achievements = [
      {
        field: 'Web Development',
        awards: 'Best Web Developer'
      }
    ]

    const result = validateAchievements(achievements)
    expect(result).to.equal(true)
  })

  it('should return false for invalid achievements', () => {
    const achievements = [
      {
        field: 'Web Development',
        awards: null // Invalid awards
      }
    ]

    const result = validateAchievements(achievements)
    expect(result).to.equal(false)
  })
})
