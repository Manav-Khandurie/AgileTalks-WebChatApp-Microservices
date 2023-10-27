const crypto = require('crypto');
const secretKey = process.env.ENCRYPTION_KEY; 
const storedIvHex=process.env.ENCRYPTION_IV;
const key = Buffer.from(secretKey, 'hex'); 
const iv = Buffer.from(storedIvHex, 'hex');


exports.encrypt =(req, res, next)=> {
  
  try {
    const jsonData = JSON.parse(req.headers['text']);
    const msg= encryptText(jsonData);
    res.status(200).json({ message: msg });
  } 
  catch (error) {
    console.error("Error parsing JSON:", error);
    res.status(400).json({ error: "Invalid JSON" });
  }
}


// Encrypt text using the crypto library
function encryptText(text) {

  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encryptedData = cipher.update(text, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}


