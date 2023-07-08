function generateResume (data, callback) {
  const PDFServicesSdk = require('@adobe/pdfservices-node-sdk')
  const fs = require('fs')
  const path = require('path')

  const OUTPUT = './generatedResume.pdf'

  // If our output already exists, remove it so we can run the application again.
  if (fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT)

  const INPUT = `./templates/${data.template_id}.docx`

  const JSON_INPUT = data

  const credentials = PDFServicesSdk.Credentials
    .servicePrincipalCredentialsBuilder()
    .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
    .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
    .build()

  const executionContext = PDFServicesSdk.ExecutionContext.create(credentials)

  const documentMerge = PDFServicesSdk.DocumentMerge
  const documentMergeOptions = documentMerge.options
  const options = new documentMergeOptions.DocumentMergeOptions(JSON_INPUT, documentMergeOptions.OutputFormat.PDF)

  const documentMergeOperation = documentMerge.Operation.createNew(options)

  const input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT)
  documentMergeOperation.setInput(input)

  documentMergeOperation.execute(executionContext)
    .then(result => result.saveAsFile(OUTPUT))
    .catch(err => {
      if (err instanceof PDFServicesSdk.Error.ServiceApiError ||
        err instanceof PDFServicesSdk.Error.ServiceUsageError) {
        console.log('Exception encountered while executing operation', err)
      } else {
        console.log('Exception encountered while executing operation', err)
      }
    })

  if (callback && typeof (callback) === 'function') {
    const filePath = path.resolve('./generatedResume.pdf')
    callback(filePath, null)
  }
}

exports.generateResume = generateResume
