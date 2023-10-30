const express = require('express');
const app = express();

const mailRoute=require('./routes/route');



app.post('/send-email',mailRoute);



app.use('/*',(req,res,next)=>{
  res.json({"message" : "Unsuccessfull"});
});

const PORT = process.env.PORT||3333; // Or any port you prefer
app.listen(PORT, () => {
  console.log(`Nodemailer microservice running on port ${PORT}`);
});
