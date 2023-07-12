const validateJson = (req) => {
  try {
    const result = validatePersonalInformation(req.personal_information) &&
    validateSkills(req.skills) &&
    validateWorkExperience(req.experience) &&
    validateEducation(req.education) &&
    validateAchievements(req.achievements)
    if (!result) {
      return false
    }
    return true
  } catch (err) {
    console.log(err)
    return err
  }
}

const validator = require('validator')
const validatePersonalInformation = (req) => {
  try {
    const name = validator.isAlpha(req.name)
    const lastName = validator.isAlpha(req.last_name)
    const emailAddress = validator.isEmail(req.email_address)
    const phoneNumber = validator.isMobilePhone(req.phone_number)
    const url = validator.isURL(req.linkedin_url)
    if (!name || !lastName || !emailAddress || !phoneNumber || !url) {
      return 'personal_information'
    }
    return true
  } catch (err) {
    return 'Error validating personal information'
  }
}

const validateSkills = (skills) => {
  try {
    for (const skill of skills) {
      const value = validator.isAlphanumeric(skill)
      if (!value) {
        return 'skills'
      }
    }
    return true
  } catch (err) {
    return 'Error validating skills'
  }
}

const validateWorkExperience = (workExperience) => {
  try {
    for (const experience of workExperience) {
      const name = validator.isAlphanumeric(experience.company_name)
      const year = experience.passing_year.split('-')
      const year1 = validator.isNumeric(year[0])
      const year2 = validator.isNumeric(year[1])
      const responsibilities = validator.isAlphanumeric(experience.responsibilities)
      if (!name || !year1 || !year2 || !responsibilities) {
        return 'work_experience'
      }
    }
    return true
  } catch (err) {
    return 'Error validating work experience'
  }
}

const validateEducation = (education) => {
  try {
    for (const school of education) {
      const name = validator.isAlphanumeric(school.school_name)
      const year = school.passing_year.split('-')
      const year1 = validator.isNumeric(year[0])
      const year2 = validator.isNumeric(year[1])
      const description = validator.isAlphanumeric(school.description)
      if (!name || !year1 || !year2 || !description) {
        return 'education'
      }
    }
    return true
  } catch (err) {
    return 'Error validating education'
  }
}

const validateAchievements = (achievements) => {
  try {
    for (const achievement of achievements) {
      const field = validator.isAlphanumeric(achievement.field)
      const awards = validator.isAlphanumeric(achievement.awards)
      if (!field || !awards) {
        return 'achievements'
      }
    }
    return true
  } catch (err) {
    return 'Error validating achievements'
  }
}

exports.validateJson = validateJson
