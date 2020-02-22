'use strict';

const AWS = require('aws-sdk');

const ses = new AWS.SES();
const FROM = 'contact@toulis-apartments.com';
const TO = 'toulis79@gmail.com';

// To create email template
// aws ses create-template --cli-input-json file://reservation_template.json --region eu-west-1

function generateResponse(code, payload) {
  return {
    statusCode: code,
    body: JSON.stringify(payload),
  };
}

function generateError(code, err) {
  console.log(err);
  return {
    statusCode: code,
    body: JSON.stringify(err.message),
  };
}

function generateEmailParams(data) {
  const { email, name } = data;
  if (!(email && name)) {
    throw new Error('Make sure to fill all required fields.');
  }

  return {
    Source: FROM,
    Destination: {
      ToAddresses: [TO],
    },
    ReplyToAddresses: [email],
    Template: 'Toulis_apartments_reservation_template',
    TemplateData: JSON.stringify(data),
  };
}

module.exports.submitReservationForm = async (event) => {
  try {
    const emailParams = generateEmailParams(event.body);
    const data = await ses.sendTemplatedEmail(emailParams).promise();
    return generateResponse(200, data);
  } catch (err) {
    return generateError(500, err);
  }
};
