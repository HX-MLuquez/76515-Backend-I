const crypto = require("crypto");

const passUser = "abcd123";

const hash = crypto.createHash("sha256");

console.log("01 - ", hash); // es { de hasheo }

hash.update(passUser);

console.log("02 - ", hash); // es { de hasheo }

const passwordEncrypt = hash.digest("hex");

console.log("03 - ", passwordEncrypt); // 983487d9c4b7451b0e7d282114470d3a0ad50dc5e554971a4d1cda04acde670b


const user = {
    username: "Pepe",
    passHash: passwordEncrypt //  983487d9c4b7451b0e7d282114470d3a0ad50dc5e554971a4d1cda04acde670b
}

const input = "231www"
const hashTest = crypto.createHash("sha256");
hashTest.update(input);
const passwordEncryptInput = hashTest.digest("hex");

if(passwordEncryptInput === user.passHash){
    console.log("okookoooookooo")
}

const ID = crypto.randomUUID()
console.log("ID", ID) // 1ac595d2-7b77-44e9-b25a-dbe1f4704e52


/*

HASH unidireccional   1234 ->    absd3322  -> X

input 1235 -> sdjds321

ENCRIPTAR ->   Italia 222  ->  ydsfgsygf2334  ->  Italia 222   Bidireccional

userPepe {
nombre Mauro
apellido Lopez
edad kmokxzmc
direccion aslkfjpsadflsañdf
tel sdkfj{askfmj{asñldf}}



}
*/