const crypto = require('crypto');
const secretKey = process.env.ENCRYPTION_KEY; 
const storedIvHex=process.env.ENCRYPTION_IV;
const key = Buffer.from(secretKey, 'hex'); 
const iv = Buffer.from(storedIvHex, 'hex');


exports.decrypt =(req, res, next)=> {
  
  try {
    const jsonData = JSON.parse(req.headers['text']);
    const msg= decryptText(jsonData);
    res.status(200).json({ message: msg });

  } catch (error) {
    console.error("Error parsing JSON:", error);
    res.status(400).json({ error: "Invalid JSON" });
  }
}


// Decrypt text using the crypto library
function decryptText(text) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decryptedData = decipher.update(text, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}


