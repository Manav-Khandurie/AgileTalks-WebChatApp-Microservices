const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();
let newName='';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

// Set up Multer for file uploads
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME, // Use the environment variable directly // Set the ACL as per your requirements
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      // Use a unique key to avoid overwriting files with the same name
      newName=Date.now().toString() + '-' + file.originalname;
      cb(null, newName);
    },
  }),
});

module.exports = {
  uploadFile: (req, res, next) => {
    // Handle the file upload using the "upload" middleware
    upload.single('file')(req, res, function (err) {
      if (err) {
        // Handle any Multer or S3 upload errors here
        console.log(err);
        return res.status(500).json({ error: err.message });
      }
      const publicUrl = s3.getSignedUrl('getObject', { 
        Bucket: process.env.AWS_BUCKET_NAME,
        Key : newName 
      });
      res.status(400).json({
         message: "Sucessfully Uploaded" ,
         publicUrl : publicUrl
     });// Continue to the next middleware or route
    });
  },
};
