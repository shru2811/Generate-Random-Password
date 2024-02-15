const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specialchar = "!@#$%^&*~_-"
const all = alphabet + numbers + specialchar;
let pswdBox = document.querySelector(".box");

function createPassword(){
    let pswd = "";
   for(let i=0;i<4;i++){
    pswd+=alphabet[Math.floor(Math.random()*alphabet.length)];
    pswd+=numbers[Math.floor(Math.random()*numbers.length)];
    pswd+=specialchar[Math.floor(Math.random()*specialchar.length)];
   }
    pswdBox.value = pswd;
}

let btn = document.querySelector(".genBtn");
btn.addEventListener("click",createPassword);

let cpyBtn = document.querySelector(".copy");
cpyBtn.addEventListener("click",function(){
    pswdBox.select();
    navigator.clipboard.writeText(pswdBox.value);
});
