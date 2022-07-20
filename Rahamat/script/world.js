// api_kye=6f85ccbc79a94217a85abd703fd4e188

async function getData() {
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=6f85ccbc79a94217a85abd703fd4e188`;
  let res=await fetch(url);
  let data= await res.json();
//   console.log(data.articles);
  append(data.articles)

}

getData();

// For Middle Content

function append(data) {
console.log(data);
let container=document.getElementById("content_middle");

data.forEach((el)=>{
let heading=document.createElement("h3");
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
div.append(heading,des,image,content,pub);
container.append(div);
})
}




