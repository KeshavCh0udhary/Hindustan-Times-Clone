// api_kye=6f85ccbc79a94217a85abd703fd4e188
// https://newsapi.org/docs/get-started#top-headlines

async function getData() {
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=6f85ccbc79a94217a85abd703fd4e188`;
  let res=await fetch(url);
  let data= await res.json();
//   console.log(data.articles);
  append(data.articles);
  // headLine(data.articles);

}

getData();

// --------------------For Middle Content---------------------------------------------

function append(data) {
// console.log(data);
let container=document.getElementById("content_middle");

data.forEach((el)=>{
  let top=document.createElement("h3")
  top.innerText="WORLD NEWS";

let heading=document.createElement("h2");
heading.innerText=el.title;

let des=document.createElement("p");
des.innerText=el.description;

let image=document.createElement("img");
image.setAttribute("class","newsImg");
image.src=el.urlToImage;

let content=document.createElement("p");
content.innerText=el.content;

let pub=document.createElement("p");
pub.innerText="Published on "+el.publishedAt;

let div=document.createElement('div');
div.append(top,heading,des,image,content,pub);
container.append(div);
})
}

// --------------------------for Left content----------------------------------------

async function leftSection() {
  const url=`https://newsapi.org/v2/top-headlines?country=IN&apiKey=6f85ccbc79a94217a85abd703fd4e188`;
let res=await fetch(url);
let data= await res.json();
//   console.log(data.articles);

headLine(data.articles);

}
leftSection();

function headLine(data) {
let content= document.getElementById("content_left");
data.forEach((el)=>{
  let top=document.createElement("h3")
  top.innerText="INDIA NEWS";
  let h3=document.createElement("h4");
  h3.innerText=el.title;
  let pub=document.createElement("p");
  pub.innerText="Published on "+el.publishedAt;

  let div=document.createElement('div');
  
  div.append(top,h3,pub);
  content.append(div);
  
})
}

// -----------RIGHT CONTENT------------------

// https://newsapi.org/v2/everything?q=Apple&from=2022-07-22&sortBy=popularity&apiKey=API_KEY

async function rightSection() {
  const url=`https://newsapi.org/v2/everything?q=Bollywood&from=2022-07-22&sortBy=popularity&apiKey=6f85ccbc79a94217a85abd703fd4e188`;
let res=await fetch(url);
let data= await res.json();
  console.log(data.articles);

topHeadLine(data.articles);

}
rightSection();

function topHeadLine(data) {
let content= document.getElementById("content_right");
data.forEach((el)=>{
  let top=document.createElement("img")
  top.src=el.urlToImage;
  top.setAttribute("class","sizeImg");

  let h3=document.createElement("h4");
  h3.innerText=el.title;
  let pub=document.createElement("p");
  pub.innerText="Published on "+el.publishedAt;

  let div=document.createElement('div');
  
  div.append(h3,top,pub);
  content.append(div);
  
})
}