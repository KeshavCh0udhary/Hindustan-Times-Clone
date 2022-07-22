import { MiniNav, Nav, Side, Temp } from "../ComponentNav/navbar.js";
document.getElementById("NaVbAr").innerHTML = Nav();
Side();
Temp();

document.getElementById("MiNi").innerHTML = MiniNav();


let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=42130d0c2d2d4a94a20b89b77f9ca3eb`


//https://newsapi.org/v2/top-headlines?country=in&apiKey=42130d0c2d2d4a94a20b89b77f9ca3eb
let getData = async() => {
    let res = await fetch (url)
    let data = await res.json()
    //console.log(data.articles)
    return(data.articles)
//    appendData(data.articles)
};

//getData()

let displayLeft = async() => {
    let First = document.getElementById("left");
    let div = document.createElement("div");
    div.setAttribute("class", "left");
    div.innerHTML=`<h3 class="heading-css"><span class="brackets">[</span>TOP NEWS<span class="brackets">]</span></h3>`;
    let div1 = document.createElement("div");
    div1.innerHTML=`<h3 class="heading-css"><span class="brackets">[</span>TRENDING TOPICS<span class="brackets">]</span></h3>`;
    div1.setAttribute("class", "left");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "left");
    div2.innerHTML=`<h3 class="heading-css"><span class="brackets">[</span>DON'T MISS<span class="brackets">]</span></h3>`
    let div3 = document.createElement("div");
    div3.setAttribute("class", "left");
    div3.innerHTML=` <h3 class="heading-css"><span class="brackets">[</span>LATEST NEWS<span class="brackets">]</span></h3>`
    First.append(div, div1, div2, div3);
    let second= document.getElementById("middle");
    second.innerHTML=`<h5 class="AllignLeft"><span class="brackets">Home</span> / Entertainment</h5>
    <h2 class="heading-css"><span class="brackets">[</span>ENTERTAINMENT<span class="brackets">]</span></h2>
    <div id="BigDiv"></div>
    <div id="SmallDiv"></div>`;

    let Second1= document.getElementById("BigDiv");
    let div4= document.createElement("div");
    div4.setAttribute("class", "middle");
    let X= await getData();
    X=X[0];
   // console.log(X);
    let h2= document.createElement("h3");
    h2.innerText=X.title; 
    let img= document.createElement("img");
    img.src=X.urlToImage;
    let p= document.createElement("p");
    p.innerText=`Updated on ${X.publishedAt}`;
    let divv= document.createElement("div");
    divv.setAttribute("id","icons");
    divv.innerHTML=`<div>
    <i class="fa fa-share-alt fa-2x"></i>
    <i class="fa fa-bookmark-o fa-2x"></i>
    </div>`
    // h3.innerText=`Home / Editorials`
    divv.append(p);
    div4.append(h2,img,divv);
    Second1.addEventListener("click",()=>{
        details(X);
    });
   
    Second1.append(div4);

    

    

    let Third= document.getElementById("right");
    let DIV = document.createElement("div");
    DIV.setAttribute("class", "right");
    DIV.innerHTML=`<h3 class="heading-css"><span class="brackets">[</span>TRENDING PHOTOS<span class="brackets">]</span></h3>`
    let DIV1 = document.createElement("div");
    DIV1.setAttribute("class", "right");
    DIV1.innerHTML=`<h3 class="heading-css"><span class="brackets">[</span>MOST POPULAR<span class="brackets">]</span></h3>`
    let DIV2 = document.createElement("div");
    DIV2.setAttribute("class", "right");
    DIV2.innerHTML=`<h3 class="heading-css"><span class="brackets">[</span>TRENDING<span class="brackets">]</span></h3>`
    let DIV3 = document.createElement("div");
    DIV3.setAttribute("class", "right");
    DIV3.innerHTML=`<h3 class="heading-css"><span class="brackets">[</span>TRENDING VIDEOS<span class="brackets">]</span></h3>`
    let DIV4 = document.createElement("div");
    Third.append(DIV,DIV1,DIV2,DIV3);
    // <h4 class="heading-css"><span class="brackets">[</span>PHOTOS<span class="brackets">]</span></h4>
}


let MidBig=async()=>{
    let Second1= document.getElementById("BigDiv");
    Second1.innerHTML=null;
    let div4= document.createElement("div");
    div4.setAttribute("class", "middle");
    let X= await getData();
    X=X[0];
    //console.log(X);
    let h2= document.createElement("h3");
    h2.innerText=X.title; 
    let img= document.createElement("img");
    img.src=X.urlToImage;
    let p= document.createElement("p");
    p.innerText=`Updated on ${X.publishedAt}`;
    let divv= document.createElement("div");
    divv.setAttribute("id","icons");
    divv.innerHTML=`<div>
    <i class="fa fa-share-alt fa-2x"></i>
    <i class="fa fa-bookmark-o fa-2x"></i>
    </div>`
    // h3.innerText=`Home / Editorials`
    divv.append(p);
    div4.append(h2,img,divv);
    Second1.addEventListener("click",()=>{
        details(X);
    });
}
displayLeft(MidBig());


let MidSmall= async()=>{
    let Second2= document.getElementById("SmallDiv");
    let X=await getData();
    //Second2.innerHTML=null;
    X.forEach((el,i)=>{

        console.log(el,i)

        let div4= document.createElement("div");
    div4.setAttribute("class", "middle");
    // let X= await getData();
    // X=X[0];
    //console.log(X);
    let h2= document.createElement("h3");
    h2.innerText=el.title; 
    let img= document.createElement("img");
    img.src=el.urlToImage;
    let divImg= document.createElement("div");
    divImg.append(img);
    let p= document.createElement("p");
    p.innerText=`Updated on ${el.publishedAt}`;
    let divv= document.createElement("div");
    divv.setAttribute("id","icon");
    divv.innerHTML=`<div>
    <i class="fa fa-share-alt fa-2x"></i>
    <i class="fa fa-bookmark-o fa-2x"></i>
    </div>`
    // h3.innerText=`Home / Editorials`
    divv.append(p);
    let DD= document.createElement("div");
    DD.append(h2,divv)
    div4.append(DD,divImg);
    div4.setAttribute("id","Flex");
    div4.addEventListener("click",()=>{
        details1(el,div4);
    });
    Second2.append(div4);
//Second2.append(el.title)
    })
   

//console.log(X);
}
MidSmall();



let details1= (X,div)=>{
    // console.log(X)
    console.log(div);
    div.style.width="135%";
    div.innerHTML=null;
    // let Second1= document.getElementById("SmallDiv");
    // Second1.innerHTML=null;
    let div4= document.createElement("div");
    div4.setAttribute("class", "middle");
    //console.log(X);
    let h2= document.createElement("h3");
    h2.innerText=X.title; 
    let pp= document.createElement("p");
    pp.innerText=X.description;
    let img= document.createElement("img");
    img.src=X.urlToImage;
    let p= document.createElement("p");
    p.innerText=`Updated on ${X.publishedAt}`;
    let divv= document.createElement("div");
    divv.setAttribute("id","icons");
    divv.innerHTML=`<div>
    <i class="fa fa-share-alt fa-2x"></i>
    <i class="fa fa-bookmark-o fa-2x"></i>
    </div>`
    divv.append(p);
    let P= document.createElement("p");
    P.innerText=X.content;
    let btn=document.createElement("button");
    btn.addEventListener("click",()=>{
        window.location.href="./editorials.html";
    });
    btn.innerText="Go Back";
    div4.append(h2,pp,img,divv,P,btn);
    div.append(div4);
};


let details= (X)=>{
    // console.log(X)
    let Second1= document.getElementById("BigDiv");
    Second1.innerHTML=null;
    let div4= document.createElement("div");
    div4.setAttribute("class", "middle");
    //console.log(X);
    let h2= document.createElement("h3");
    h2.innerText=X.title; 
    let pp= document.createElement("p");
    pp.innerText=X.description;
    let img= document.createElement("img");
    img.src=X.urlToImage;
    let p= document.createElement("p");
    p.innerText=`Updated on ${X.publishedAt}`;
    let divv= document.createElement("div");
    divv.setAttribute("id","icons");
    divv.innerHTML=`<div>
    <i class="fa fa-share-alt fa-2x"></i>
    <i class="fa fa-bookmark-o fa-2x"></i>
    </div>`
    divv.append(p);
    let P= document.createElement("p");
    P.innerText=X.content;
    let btn=document.createElement("button");
    btn.addEventListener("click",()=>{
        window.location.href="./editorials.html";
    });
    btn.innerText="Go Back";
    div4.append(h2,pp,img,divv,P,btn);
    Second1.append(div4);
};