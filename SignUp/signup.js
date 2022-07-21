import navbar from "./Component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let data = localStorage.getItem('data') || [];

document.getElementById("button").addEventListener("click", () => {
    let UserName = document.getElementById("email").value;
    if (UserName == "") {
        return;
    }
    data.includes(UserName) ? console.log("ok") : data.push(UserName);
    localStorage.setItem('message', JSON.stringify(UserName));
    localStorage.setItem('data', JSON.stringify(data));
    window.location.href = "./SignUp/otp.html";
});

// let telInput = $("#phone"),
//     errorMsg = $("#error-msg"),
//     validMsg = $("#valid-msg");
// telInput.intlTelInput({
//     allowExtensions: true,
//     formatOnDisplay: true,
//     autoFormat: true,
//     autoHideDialCode: true,
//     autoPlaceholder: true,
//     defaultCountry: "auto",
//     ipinfoToken: "yolo",
//     nationalMode: false,
//     numberType: "MOBILE",
//     preventInvalidNumbers: true,
//     separateDialCode: true,
//     initialCountry: "in",
//     geoIpLookup: function (callback) {
//         $.get("http://ipinfo.io", function () { }, "jsonp").always(function (resp) {
//             let countryCode = (resp && resp.country) ? resp.country : "";
//             callback(countryCode);
//         });
//     },
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
// });

// let reset = function () {
//     telInput.removeClass("error");
//     errorMsg.addClass("hide");
//     validMsg.addClass("hide");
// };

// telInput.blur(function () {
//     reset();
//     if ($.trim(telInput.val())) {
//         if (telInput.intlTelInput("isValidNumber")) {
//             validMsg.removeClass("hide");
//         } else {
//             telInput.addClass("error");
//             errorMsg.removeClass("hide");
//         }
//     }
// });

// telInput.on("keyup change", reset);

document.getElementById("LoGoo").addEventListener("click", () => {
    window.location.href = "../ComponentNav/Comp.html";
})





