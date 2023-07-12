const validator = require('validator')

const validateJson = (req) => {
  try {
    const result = validatePersonalInformation(req.personal_information) &&
    validateSkills(req.skills) &&
    validateWorkExperience(req.experience) &&
    validateEducation(req.education) &&
    validateAchievements(req.achievements) &&
    validator.isAlphanumeric(req.job_title) &&
    validator.isAlphanumeric(req.career_objective)
    if (!result) {
      return false
    }
    return true
  } catch (err) {
    console.log(err)
    return err
  }
}

const validatePersonalInformation = (req) => {
  try {
    const name = validator.isAlpha(req.name)
    const lastName = validator.isAlpha(req.last_name)
    const emailAddress = validator.isEmail(req.email_address)
    const phoneNumber = validator.isMobilePhone(req.phone_number)
    const url = validator.isURL(req.linkedin_url)
    if (!name || !lastName || !emailAddress || !phoneNumber || !url) {
      return false
    }
    return true
  } catch (err) {
    return false
  }
}

const validateSkills = (skills) => {
  try {
    for (const skill of skills) {
      const value = validator.isAlphanumeric(skill)
      if (!value) {
        return false
      }
    }
    return true
  } catch (err) {
    return false
  }
}

const validateWorkExperience = (workExperience) => {
  try {
    for (const experience of workExperience) {
      const name = validator.isAlpha(experience.company_name)
      console.log(name)
      console.log(validator.isAlphanumeric('ABC Inc'))
      const year = experience.passing_year.split('-')
      console.log(year)
      const year1 = validator.isNumeric(year[0])
      console.log(year1)
      const year2 = validator.isNumeric(year[1])
      console.log(year2)
      const responsibilities = validator.isAlpha(experience.responsibilities)
      console.log(responsibilities)
      if (!name || !year1 || !year2 || !responsibilities) {
        return false
      }
    }
    return true
  } catch (err) {
    return false
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
        return false
      }
    }
    return true
  } catch (err) {
    return false
  }
}

const validateAchievements = (achievements) => {
  try {
    for (const achievement of achievements) {
      const field = validator.isAlphanumeric(achievement.field)
      const awards = validator.isAlphanumeric(achievement.awards)
      if (!field || !awards) {
        return false
      }
    }
    return true
  } catch (err) {
    return false
  }
}

exports.validateJson = validateJson
exports.validatePersonalInformation = validatePersonalInformation
exports.validateSkills = validateSkills
exports.validateWorkExperience = validateWorkExperience
exports.validateEducation = validateEducation
exports.validateAchievements = validateAchievements
