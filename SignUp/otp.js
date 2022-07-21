import navbar from "./Component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let Value = JSON.parse(localStorage.getItem("message"));
let message = document.getElementById("message");
message.innerText = `We have sent you a verification code to ${Value ? Value : "No Body"}`;


let x = document.getElementById("body")
x.onload = () => {
    load();
};

let load = () => {
    setTimeout(() => {
        verify();
    }, 3000);
}

let verify = () => {
    let me = document.getElementById("me");
    let x = generateOTP3(6);
    x = x.split("");
    let X = x.join("");
    x = x.join(" ");
    alert(`Your OTP is : ${X}`);
    me.innerText = x
    // console.log(me.innerText);
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

let Verify = document.getElementById("OTPVerify");

Verify.addEventListener("click", () => {
    window.location.href = "password.html"
});
document.getElementById("LoGoo").addEventListener("click", () => {
    window.location.href = "../ComponentNav/Comp.html";
});


// document.querySelector("#submit").addEventListener("submit", Save);

//  function Save(){
//     event.preventDefault();
//     console.log("Save called");
// }