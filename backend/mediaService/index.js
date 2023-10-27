const express=require('express');
const app=express();
const port=process.env.PORT || 3333;
const routeUpload=require('./routes/routeUpload');

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.post("/*",routeUpload);

app.use("/*" , (req,res,next)=>{
    res.json({"message" : "Unsuccessfull"});
});
