# ResumeBuilder

 A Resume Builder API is a tool that allows users to create professional resumes quickly and easily. The API uses pre-built templates and dynamically generates the resume content based on the user's input data, such as personal information, skills, experiences, and education. This reduces the manual effort required to create and format a resume. 


# Getting Started

To use this program, you'll need an Adobe PDF Services account. If you don't have one already, you can sign up for a free trial on the [Adobe PDF Services website](https://developer.adobe.com/document-services/apis/pdf-extract/).

Once you have your Adobe PDF Services credentials, you can clone this repository and follow the instructions below to set up the program.


# Installation

1. Open Command Prompt.

2. Clone the repository.

```Shell
git clone https://github.com/Bhanuteja917/ResumeBuilder.git
```
3. Change directory to ResumeBuilder directory. (Open two terminals. One for client and one for server)

```Shell
cd ResumeBuilder
```

4. Install the required dependencies. 

```Shell
# client terminal
cd client
npm install

# server terminal
cd server
npm install
```
<br>

# Usage

1. In the server terminal enter the following commands to set environment variables. 
<br>
`PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` can be replaced with the credentials downloaded after signing up for a free trial on the [Adobe PDF Services website](https://developer.adobe.com/document-services/apis/pdf-extract/).

```Shell
# server
set PDF_SERVICES_CLIENT_ID=6298b572a5784d10b72a5ce7086a69fc
set PDF_SERVICES_CLIENT_SECRET=p8e-a1gbryrdRlvZkumGMisQxWg2d52428gI
set PORT=8000
```

2. Run the server and client programs using the commands below

```Shell
# client
npm run dev

# server
npm start
```

## Testing the server
1. Run the following command from server directory. Set the environment variables before running the below command
```Shell
# change the directory to server
npm test
```

## Making a request to the server from command line
1. Run the following command from server directory. Set the environment variables before running the below command
2. File must have a .pdf extension
```Shell
# change the directory to server
curl -X POST -d "@example.json" -H "Content-Type: application/json" http://localhost:8081/generate --output <FILE>
```

### Note

1. When using the user interface it usually takes 10 to 15 seconds to download the file.






