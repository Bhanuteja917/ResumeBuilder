const PDFServicesSdk = require('@adobe/pdfservices-node-sdk')
const fs = require('fs')
const path = require('path')
function generateResume (data, callback) {
  try {
    const OUTPUT = './generatedResume.pdf'
    const filePath = path.resolve(OUTPUT)

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
      .then(result => result.saveAsFile(filePath))
      .catch(err => {
        if (err instanceof PDFServicesSdk.Error.ServiceApiError ||
          err instanceof PDFServicesSdk.Error.ServiceUsageError) {
          if (err?.message === 'invalid client_secret parameter' ||
            err?.message === 'invalid client_id parameter') {
            return callback(null, err)
          }
          return callback(null, err)
        } else {
          console.log('Exception encountered while executing operation', err)
        }
      })

    setTimeout(() => {
      fs.promises.readFile(path.resolve(filePath))
        .then(() => {
          callback(filePath, null)
        }).catch((err) => {
          callback(null, err)
        })
    }, 13000)
  } catch (err) {
    if (err?.message === 'client_id must not be blank; client_secret must not be blank' ||
      err?.message === 'client_id must not be blank' ||
      err?.message === 'client_secret must not be blank') {
      console.log(err?.message)
      return callback(null, err)
    }
    return callback(null, err)
  }
}
exports.generateResume = generateResume
