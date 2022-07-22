let contain=document.getElementById("top-top");

let ht=document.createElement("img");
ht.src="https://www.hindustantimes.com/res/images/ht-logo.svg";

let app=document.createElement("img");
app.src="https://images.hindustantimes.com/images/app-images/2022/2/mweb_button_svg.svg";

let div=document.getElementById("div");
div.append(ht,app);
contain.append(div)