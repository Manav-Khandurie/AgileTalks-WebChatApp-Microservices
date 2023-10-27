const crypto = require('crypto');

const dataToEncrypt = 'Hello Manav here:-)';

// Function to generate a random key (256 bits or 32 bytes for AES-256)
function generateAESKey() {
    return crypto.randomBytes(32);
    }
  // Function to generate a random IV (Initialization Vector - 128 bits or 16 bytes)
function generateIV() {
    return crypto.randomBytes(16);
    }
  
  // Generate a random keys
const key = generateAESKey();
const iv = generateIV();


//Cipher Logic
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encryptedData = cipher.update(dataToEncrypt, 'utf8', 'hex');
encryptedData += cipher.final('hex');
console.log('Encrypted Data:', encryptedData);


//Decipher Logic
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
decryptedData += decipher.final('utf8');
console.log('Decrypted Data:', decryptedData);

console.log("\n!!!!!!!!!!Store these keys in a env file to use later!!!!!!!!!!! \n");

console.log("key:",key.toString('hex'));
console.log("iv:",iv.toString('hex'));