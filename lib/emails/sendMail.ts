import nodemailer, { SentMessageInfo } from "nodemailer";

import { serverConfig } from "../serverConfig";

const sendEmail = ({ to, subject, text, html = null }): Promise<string | SentMessageInfo> =>
  new Promise((resolve, reject) => {
    const { transport, from } = serverConfig;

    if (!to || !subject || (!text && !html)) {
      return reject("Missing required elements to send email.");
    }

    // const invitationHtml = html(invitation);
    fetch("http://localhost:7000/api/v1/send_text_email", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `winning-cv.com <joan.thuo@gmail.com>`,
        to: to,
        subject: subject,
        html: html,
        text: text(html),
      }),
    })
      .then(handleErrorsJson)
      .then((responseBody) => {
        console.log("email send successfully");
      });

    // nodemailer.createTransport(transport).sendMail(
    //   {
    //     from: `Cal.com ${from}`,
    //     to,
    //     subject,
    //     text,
    //     html,
    //   },
    //   (error, info) => {
    //     if (error) {
    //       console.error("SEND_INVITATION_NOTIFICATION_ERROR", to, error);
    //       return reject(error.message);
    //     }
    //     return resolve(info);
    //   }
    // );
  });

function handleErrorsJson(response) {
  if (!response.ok) {
    response.json().then((e) => console.error("Send Email Error", e));
    throw Error(response.statusText);
  }
  return response.json();
}

export default sendEmail;
