const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el valor a encriptar: ', (dataToHash) => {
  const hashResult = calculateSHA256Hash(dataToHash);
  console.log(`Entrada: ${dataToHash}`);
  console.log(`Encriptación SHA-256: ${hashResult}`);
  rl.close();
});
//Messi
function calculateSHA256Hash(data) {
  const sha256Hash = crypto.createHash('sha256');
  sha256Hash.update(data, 'utf-8');
  return sha256Hash.digest('hex');
}
