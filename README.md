# toulis-apartments

> Static website based on nuxt.js and AWS serverless

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Email Service
This project uses AWS Lambda and AWS SES services to submit contact/reservation form.

### 1. Prepare the Email Template

**HTML template file:**

`/aws/ses-templates/template.html`

This file contains the html format of the email template.

**TEXT template file:**

`/aws/ses-templates/text-template.txt`

This file contains the text format of the email template.


**Template configuration file:**

`/aws/ses-templates/reservation_template.json`

This file contains the template name, the subject of the email and the body in text and html format.
The HtmlPart and TextPart fields will contain the text-template.txt and template.html content JSON escaped.
To JSON escape the templates you can use:

[https://www.freeformatter.com/json-escape.html](https://www.freeformatter.com/json-escape.html)

### 2. Create a template in AWS SES

```bash
aws ses create-template --cli-input-json file://reservation_template.json --region {yourRegion} --profile {yourProfile}
```

### 3. Update a template in AWS SES

In case you want to apply updates to your template:

```bash
aws ses update-template --cli-input-json file://reservation_template.json --region {yourRegion} --profile {yourProfile}
```

## Deploy serverless

This project uses serverless framework to deploy our reservation/contact form lambda function to aws.

### 1. Configure lambda function

`/aws/lambda/handler.js`

### 2. Configure serverless framework

`/aws/lambda/serverless.yml`

### 3. Deploy lambda function for contact form

```bash
serverless deploy
```