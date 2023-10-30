require('dotenv').config();

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

module.exports = {
    goMail : (req,res,next)=>{
        const auth = {
            auth: {
              api_key: process.env.MAIL_GUN_API_KEY || 'mailgun_api_key', // TODO: 
              domain: process.env.MAIL_GUN_DOMAIN || 'mailgun_domain' // TODO:
            }
          };
          let transporter = nodemailer.createTransport( mailGun(auth) );
          // Extract necessary data from the request body
          console.log(req.headers);
          const to = req.headers['to'] || "";
          const subject = req.headers['subject'] || "";
          const text = req.headers['text'] || "";
          const html=req.headers['html'] || "";
        
          let mailOptions = {
            from: 'agiletalks@gmail.com', // TODO: email sender
            to: to, // TODO: email receiver
            subject: subject,
            text: text,
            html: html
          };
          transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
              return log('Error occurs');
            }
            console.log('Email sent!!!');
            res.json({"message" : "Successfull"});
          });
    }
}