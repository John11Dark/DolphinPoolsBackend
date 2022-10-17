// require("dotenv").config();
// const config = require("config");
const mailer = require("nodemailer");

// const MAIL = process.env.MAIL || config.get("MAIL");
// const PASSWORD = process.env.PASSWORD || config.get("PASSWORD");
// const RECEIVER = process.env.RECEIVER || config.get("RECEIVER");

const MAIL = "dolphinPoolsApp@gmail.com";
const PASSWORD = "PASS_xomLcDAxeJIEKRbNr3TlakscfpEjdm_J0H@#n+45";
const RECEIVER = "info@johnmuller.eu";

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL,
    pass: PASSWORD,
  },
});

const mailOptions = {
  from: MAIL,
  to: RECEIVER,
  subject: "Error",
  text: "",
};

function pushMail(text, subject = "error ocurred", to = RECEIVER, from = MAIL) {
  transporter.sendMail(
    {
      from,
      to,
      subject,
      text,
    },
    function (error, info) {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
}

pushMail((text = "test error logs "));
// console.log(MAIL);
// console.log(PASSWORD);
// console.log(RECEIVER);
