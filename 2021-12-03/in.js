// to use prompt-sync you need to install it via npm
// npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });
let name = prompt("What's your name : ")

console.log(`Hi ${name}, I am NodeJS`)