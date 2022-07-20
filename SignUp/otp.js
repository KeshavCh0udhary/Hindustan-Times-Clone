import navbar from "./Component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let Value = JSON.parse(localStorage.getItem("message"));
let message = document.getElementById("message");
message.innerText = `We have sent you a verification code to ${Value ? Value : "No Body"}`;


let x=document.getElementById("body")
x.onload= () => {
    load();
};

let load=()=>{
    setTimeout(() => {
        verify();
    }, 3000);
}

let verify = () => {
    let me = document.getElementById("me");
    me.innerText = generateOTP3(6);
    console.log(me.innerText);
}

function generateOTP3(size) {
    let string = '0123456789';
    let OTP = '';
    let len = string.length;
    for (let i = 0; i < size; i++) {
        OTP += string[Math.floor(Math.random() * len)];
    }
    return OTP;
}

let Verify=document.getElementById("OTPVerify");

Verify.addEventListener("click",()=>{
window.location.href="password.html"
});
