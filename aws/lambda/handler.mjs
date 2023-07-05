import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "eu-west-1" });

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

export const submitReservationForm = async (event) => {
  const emailParams = generateEmailParams(event.body);
  const command = new SendTemplatedEmailCommand(emailParams);

  try {
    let response = await ses.send(command);
    return generateResponse(200, response);
  }
  catch (error) {
    return generateError(500, error);
  }
  // finally {
  //   // finally.
  // }
};
