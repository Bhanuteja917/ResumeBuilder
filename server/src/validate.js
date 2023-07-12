const Joi = require('joi')

const schema = Joi.object({
  template_id: Joi.string().required(),
  personal_information: Joi.object({
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    email_address: Joi.string().email().required(),
    phone_number: Joi.string().required(),
    linkedin_url: Joi.string().uri().required()
  }).required(),
  job_title: Joi.string().required(),
  career_objective: Joi.string().required(),
  skills: Joi.array().items(Joi.string()).required(),
  education: Joi.array().items(
    Joi.object({
      school_name: Joi.string().required(),
      passing_year: Joi.string().required(),
      description: Joi.string().required()
    })
  ).required(),
  experience: Joi.array().items(
    Joi.object({
      company_name: Joi.string().required(),
      passing_year: Joi.string().required(),
      responsibilities: Joi.string().required()
    })
  ).required(),
  achievements: Joi.array().items(
    Joi.object({
      field: Joi.string().required(),
      awards: Joi.string().required()
    })
  ).required()
})

// Perform validation
const validateJson = (data) => {
  const { error } = schema.validate(data)
  return !error
}

// Usage example
const jsonData = {
  template_id: '1',
  personal_information: {
    name: 'Lorem',
    last_name: 'ipsum',
    email_address: 'ipsum@adobe.com',
    phone_number: '9001400990',
    linkedin_url: 'https://www.linkedin.com'
  },
  job_title: 'Software Development Engineer',
  career_objective: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.',
  skills: [
    'Strong interpersonal',
    'communication skills',
    'Leadership',
    'Poised under pressure'
  ],
  education: [
    {
      school_name: 'School',
      passing_year: '2010-2015',
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\\'t look even slightly believable."
    },
    {
      school_name: 'College',
      passing_year: '2030-2032',
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc'
    }
  ],
  experience: [
    {
      company_name: 'Adobe',
      passing_year: '2011-2012',
      responsibilities: 'It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'
    }
  ],
  achievements: [
    {
      field: 'Academics',
      awards: 'Lorem ipsum dolor sit amet'
    },
    {
      field: 'Sports',
      awards: 'consectetuer adipiscing elit'
    }
  ]
}

const validationErrors = validateJson(jsonData)
if (validationErrors) {
  // Handle validation errors
  console.error(validationErrors)
} else {
  // JSON is valid, proceed with further processing
  console.log('JSON is valid')
}

exports.validateJson = validateJson
